import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSS sınıflarını birleştirir ve çakışmaları çözer
 * @param inputs - Birleştirilecek className'ler
 * @returns Birleştirilmiş ve optimize edilmiş className string'i
 * 
 * @example
 * cn("px-2 py-1", "px-4") // "py-1 px-4" - px-2 çakışma nedeniyle kaldırıldı
 * cn("text-red-500", condition && "text-blue-500") // condition'a göre dinamik
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
