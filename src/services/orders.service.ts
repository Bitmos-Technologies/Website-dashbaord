import { orders } from "@/lib/mock-data/admin";

export interface CreateOrderPayload {
  hotel: number;
  table?: number;
  items: Array<{ menu_item: number; quantity: number }>;
}

export async function getOrders(){ /* TODO: GET /api/v1/orders/ */ return orders; }
export async function getOrder(id:string){ /* TODO: GET /api/v1/orders/{id}/ */ return orders.find(order=>order.id===id); }
export async function createOrder(payload:CreateOrderPayload){ /* TODO: POST /api/v1/orders/ */ return payload; }
