import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cnTw(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}