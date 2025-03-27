
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

/**
 * Interface para as propriedades do toast
 * Amplia as propriedades do componente Toast com propriedades adicionais
 */
const TOAST_LIMIT = 5
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

/**
 * Tipos de ações que podem ser aplicadas a um toast
 */
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

/**
 * Função para gerar um ID único para um toast
 */
function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

/**
 * Tipos de ações para o state reducer do toast
 */
type ActionType = typeof actionTypes

/**
 * Tipos para as ações do state reducer
 */
type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: string
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: string
    }

/**
 * Interface para o estado do toast
 */
interface State {
  toasts: ToasterToast[]
}

/**
 * Hook para criar e gerenciar toasts na aplicação
 * @returns Objeto com toasts e funções para manipulá-los
 */
export const useToast = () => {
  const [state, dispatch] = React.useReducer(toastReducer, {
    toasts: [],
  })

  /**
   * Função para criar um novo toast
   */
  const toast = React.useMemo(() => {
    const api = {
      /**
       * Exibe um novo toast com as propriedades especificadas
       */
      toast(props: Omit<ToasterToast, "id">): string {
        const id = genId()
        const toast = { ...props, id }
        dispatch({
          type: "ADD_TOAST",
          toast,
        })
        return id
      },
      /**
       * Atualiza um toast existente
       */
      update(props: Partial<ToasterToast> & { id: string }) {
        if (state.toasts.some((toast) => toast.id === props.id)) {
          dispatch({
            type: "UPDATE_TOAST",
            toast: props,
          })
        }
      },
      /**
       * Fecha um toast específico ou todos se nenhum ID for fornecido
       */
      dismiss(toastId?: string) {
        dispatch({
          type: "DISMISS_TOAST",
          toastId,
        })
      },
    }

    return api
  }, [state.toasts])

  React.useEffect(() => {
    const timeouts = new Map<string, ReturnType<typeof setTimeout>>()

    state.toasts.forEach((toast) => {
      if (toast.id && !toast.open && !timeouts.has(toast.id)) {
        timeouts.set(
          toast.id,
          setTimeout(() => {
            dispatch({
              type: "REMOVE_TOAST",
              toastId: toast.id,
            })
          }, TOAST_REMOVE_DELAY)
        )
      }
    })

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout))
    }
  }, [state.toasts])

  return {
    ...toast,
    toasts: state.toasts,
  }
}

/**
 * Reducer para gerenciar o estado dos toasts
 */
function toastReducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // Fecha todos os toasts se nenhum ID for fornecido
      if (toastId === undefined) {
        return {
          ...state,
          toasts: state.toasts.map((t) => ({
            ...t,
            open: false,
          })),
        }
      }

      // Fecha apenas o toast específico
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId ? { ...t, open: false } : t
        ),
      }
    }

    case "REMOVE_TOAST": {
      const { toastId } = action

      if (toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }

      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== toastId),
      }
    }
  }
}

/**
 * API para exibir toasts fora de componentes React
 */
export const toast = {
  /**
   * Exibe um toast padrão
   */
  toast(props: Omit<ToasterToast, "id">) {
    return globalToast.toast(props)
  },
  /**
   * Exibe um toast de erro
   */
  error(props: Omit<ToasterToast, "id">) {
    return globalToast.toast({ ...props, variant: "destructive" })
  },
  /**
   * Fecha um toast específico ou todos
   */
  dismiss(toastId?: string) {
    globalToast.dismiss(toastId)
  },
}

// Criação de um objeto toast global para uso fora de componentes
const globalToast = {
  toasts: [] as ToasterToast[],
  toast(props: Omit<ToasterToast, "id">) {
    const id = genId()
    // Adiciona um toast ao array de toasts global
    const toast = { ...props, id }
    this.toasts = [toast, ...this.toasts].slice(0, TOAST_LIMIT)
    return id
  },
  dismiss(toastId?: string) {
    if (toastId) {
      // Remove um toast específico
      this.toasts = this.toasts.filter((t) => t.id !== toastId)
    } else {
      // Remove todos os toasts
      this.toasts = []
    }
  },
}
