import type { MenuItem, Order } from "@/types";

export const menuItems: MenuItem[] = [
  { id: 1, name: "Coastal Salmon", description: "Charred lemon, crushed potatoes, dill beurre blanc", price: 28, category: "Mains", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85", rating: 4.9, prepTime: "20 min" },
  { id: 2, name: "Truffle Tagliatelle", description: "Wild mushrooms, parmesan, fresh herbs", price: 24, category: "Mains", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85", rating: 4.8, prepTime: "18 min" },
  { id: 3, name: "Garden Burrata", description: "Heirloom tomato, basil oil, sourdough crisp", price: 16, category: "Starters", image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85", rating: 4.7, prepTime: "12 min" },
  { id: 4, name: "Citrus Pavlova", description: "Passion fruit curd, vanilla cream, mint", price: 12, category: "Desserts", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85", rating: 4.9, prepTime: "10 min" },
];

export const recentOrders: Order[] = [
  { id: "#ORD-2841", guest: "Maya Chen", table: "T12", items: 4, total: 86, status: "Preparing", time: "8 min ago" },
  { id: "#ORD-2840", guest: "Noah Williams", table: "T04", items: 2, total: 42, status: "Ready", time: "14 min ago" },
  { id: "#ORD-2839", guest: "Emma Clarke", table: "Room 308", items: 5, total: 124, status: "Completed", time: "28 min ago" },
  { id: "#ORD-2838", guest: "Liam Okafor", table: "T09", items: 3, total: 67, status: "Pending", time: "32 min ago" },
];
