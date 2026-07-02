"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ClipboardList, FileClock, Hotel, LayoutDashboard, LogOut, Menu, MenuSquare, Settings, SquareMenu, Table2, Users, Utensils, WalletCards, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Dashboard", "/dashboard", LayoutDashboard], ["Orders", "/dashboard/orders", ClipboardList], ["Tables", "/dashboard/tables", Table2], ["Hotels", "/dashboard/hotels", Hotel], ["Memberships", "/dashboard/memberships", Users], ["Menu categories", "/dashboard/menu/categories", MenuSquare], ["Menu items", "/dashboard/menu/items", SquareMenu], ["Payments", "/dashboard/payments", WalletCards], ["Notifications", "/dashboard/notifications", Bell], ["Audit logs", "/dashboard/audit-logs", FileClock],
] as const;

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebar = <aside className="dash-sidebar"><div className="sidebar-brand-row"><Link href="/" className="brand"><span className="brand-mark"><Utensils size={17}/></span><span>Bite<span className="brand-dot">Now</span></span></Link><button className="mobile-close" onClick={()=>setMobileOpen(false)}><X size={20}/></button></div><nav>{links.map(([label,href,Icon])=>{const active = href==="/dashboard" ? pathname===href : pathname.startsWith(href);return <Link className={active?"active":""} href={href} key={href} onClick={()=>setMobileOpen(false)}><Icon size={17}/><span>{label}</span></Link>})}</nav><footer><Link href="#" className="sidebar-settings"><Settings size={16}/><span>Settings</span></Link><div className="staff-card"><div className="staff-avatar">BN</div><div><strong>BiteNow Admin</strong><small>Restaurant manager</small></div><button title="Log out"><LogOut size={15}/></button></div></footer></aside>;
  return <div className="dash-shell">{sidebar}<div className={`mobile-sidebar ${mobileOpen?"open":""}`}>{sidebar}</div><div className={`mobile-shade ${mobileOpen?"open":""}`} onClick={()=>setMobileOpen(false)}/><main className="dash-main"><div className="mobile-top"><button onClick={()=>setMobileOpen(true)}><Menu/></button><Link href="/" className="brand"><span>Bite<span className="brand-dot">Now</span></span></Link><button><Bell size={18}/></button></div>{children}</main></div>;
}
