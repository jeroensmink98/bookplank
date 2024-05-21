import { writable } from "svelte/store";
import type { BookInfo } from "./models/book";

export const newBookPreview = writable(<BookInfo | null>(null))