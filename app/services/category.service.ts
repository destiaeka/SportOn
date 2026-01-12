import { fetchAPI } from "../lib/api";
import { Category } from "../types";

export const getAllCaregories = async (): Promise<Category[]> => {
    return await fetchAPI<Category[]>("/categories");
}