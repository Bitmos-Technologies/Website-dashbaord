import { categories, menu } from "@/lib/mock-data/admin";
export async function getMenuItems(){ /* TODO: GET /api/v1/menu-items/ */ return menu; }
export async function getMenuCategories(){ /* TODO: GET /api/v1/menu-categories/ */ return categories; }
