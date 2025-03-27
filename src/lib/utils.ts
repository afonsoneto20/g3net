
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Função utilitária para combinar classes CSS
 * Utiliza clsx e tailwind-merge para juntar classes condicionalmente
 * 
 * @param inputs - Classes CSS a serem combinadas
 * @returns String com as classes CSS combinadas
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
