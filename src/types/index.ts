export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  prepTime: string;
};

export type CartLine = MenuItem & { quantity: number };

export type Order = {
  id: string;
  guest: string;
  table: string;
  items: number;
  total: number;
  status: "Preparing" | "Ready" | "Completed" | "Pending" | "Cancelled";
  time: string;
};

export type AdminRecord = Record<string, string | number> & { id: string };

export interface OrderItem { id: string; name: string; quantity: number; price: number; }
export interface DiningTable { id: string; number: string; capacity: number; status: string; order: string; section: string; created: string; }
export interface Hotel { id: string; name: string; location: string; phone: string; email: string; status: string; created: string; }
export interface HotelMembership { id: string; name: string; email: string; role: string; hotel: string; status: string; joined: string; }
export interface MenuCategory { id: string; name: string; description: string; items: number; status: string; created: string; }
export interface AdminMenuItem { id: string; name: string; category: string; price: string; availability: string; prepTime: string; description: string; image: string; }
export interface Payment { id: string; orderId: string; customer: string; amount: string; method: string; status: string; date: string; }
export interface HotelNotification { id: string; title: string; message: string; type: string; status: string; created: string; }
export interface AuditLog { id: string; user: string; action: string; resource: string; resourceId: string; description: string; ip: string; date: string; }
