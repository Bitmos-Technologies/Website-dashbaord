"use client";

import { create } from "zustand";
import type { CartLine, MenuItem } from "@/types";

type CartStore = {
  items: CartLine[];
  open: boolean;
  add: (item: MenuItem) => void;
  decrement: (id: number) => void;
  toggle: () => void;
  close: () => void;
};

export const useCart = create<CartStore>((set) => ({
  items: [],
  open: false,
  add: (item) => set((state) => ({
    items: state.items.some((line) => line.id === item.id)
      ? state.items.map((line) => line.id === item.id ? { ...line, quantity: line.quantity + 1 } : line)
      : [...state.items, { ...item, quantity: 1 }],
    open: true,
  })),
  decrement: (id) => set((state) => ({ items: state.items.map((line) => line.id === id ? { ...line, quantity: line.quantity - 1 } : line).filter((line) => line.quantity > 0) })),
  toggle: () => set((state) => ({ open: !state.open })),
  close: () => set({ open: false }),
}));
