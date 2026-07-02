"use client";

import Link from "next/link";
import { Menu, ShoppingBag, UtensilsCrossed } from "lucide-react";
import { useCart } from "@/store/cart";

export function Header() {
  const { items, toggle } = useCart();
  const count = items.reduce((sum, line) => sum + line.quantity, 0);

  return <header className="site-header">
    <Link href="/" className="brand"><span className="brand-mark"><UtensilsCrossed size={19} /></span><span>Bite<span className="brand-dot">Now</span></span></Link>
    <nav className="main-nav" aria-label="Main navigation">
      <Link href="/services">Services</Link><Link href="/restaurants">Restaurants</Link><Link href="/menu">Menu</Link><Link href="/how-it-works">How it works</Link><Link href="/contact">Contact</Link>
    </nav>
    <div className="header-actions">
      <Link className="dashboard-link" href="/login">Login</Link>
      <Link className="dashboard-link" href="/signup">Sign Up</Link>
      <Link className="dashboard-link" href="/dashboard">Dashboard</Link>
      <button className="cart-button" onClick={toggle} aria-label={`Open cart with ${count} items`}><ShoppingBag size={18} /><span>Cart</span>{count > 0 && <b>{count}</b>}</button>
      <button className="mobile-menu" aria-label="Open menu"><Menu size={22} /></button>
    </div>
  </header>;
}
