"use client";

import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/store/cart";

export function CartDrawer() {
  const { items, open, add, decrement, close } = useCart();
  const subtotal = items.reduce((sum, line) => sum + line.price * line.quantity, 0);
  return <>
    <div className={`cart-overlay ${open ? "is-open" : ""}`} onClick={close} />
    <aside className={`cart-drawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="cart-heading"><div><span>Your order</span><h2>A fine choice.</h2></div><button onClick={close} aria-label="Close cart"><X /></button></div>
      {items.length === 0 ? <div className="empty-cart"><ShoppingBag size={40} /><h3>Your table is waiting</h3><p>Add a dish from today&apos;s menu to begin.</p></div> : <>
        <div className="cart-lines">{items.map((line) => <div className="cart-line" key={line.id}><div className="cart-thumb" style={{ backgroundImage: `url(${line.image})` }} /><div><h4>{line.name}</h4><p>${line.price} each</p><div className="quantity"><button onClick={() => decrement(line.id)}><Minus size={13} /></button><span>{line.quantity}</span><button onClick={() => add(line)}><Plus size={13} /></button></div></div><strong>${line.price * line.quantity}</strong></div>)}</div>
        <div className="cart-total"><div><span>Subtotal</span><strong>${subtotal}</strong></div><p>Taxes and service calculated at checkout.</p><button>Continue to checkout <span>→</span></button></div>
      </>}
    </aside>
  </>;
}
