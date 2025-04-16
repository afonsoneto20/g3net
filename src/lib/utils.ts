
/**
 * Biblioteca de funções utilitárias
 * Contém funções reutilizáveis em toda a aplicação
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Função utilitária para combinar classes CSS de forma segura
 * Utiliza clsx para concatenar classes condicionalmente
 * E twMerge para resolver conflitos de classes do Tailwind
 * @param inputs - Classes CSS a serem combinadas
 * @returns String com as classes CSS combinadas
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
