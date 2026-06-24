"use client";

import { Clock3, Plus, Star } from "lucide-react";
import type { MenuItem } from "@/types";
import { useCart } from "@/store/cart";

export function MenuCard({ item }: { item: MenuItem }) {
  const add = useCart((state) => state.add);
  return <article className="menu-card">
    <div className="menu-image" style={{ backgroundImage: `url(${item.image})` }}><span>{item.category}</span></div>
    <div className="menu-card-body">
      <div className="menu-title"><h3>{item.name}</h3><strong>${item.price}</strong></div>
      <p>{item.description}</p>
      <div className="menu-meta"><span><Star size={14} fill="currentColor" /> {item.rating}</span><span><Clock3 size={14} /> {item.prepTime}</span><button onClick={() => add(item)} aria-label={`Add ${item.name} to cart`}><Plus size={18} /></button></div>
    </div>
  </article>;
}
