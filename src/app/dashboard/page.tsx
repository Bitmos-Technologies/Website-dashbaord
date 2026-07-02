import { Bell, ClipboardList, Plus, Table2, Utensils, WalletCards } from "lucide-react";
import { recentOrders } from "@/data/demo";

const stats = [
  ["Total revenue", "$24,860", "+12.4% this month", WalletCards], ["Total orders", "284", "+8.2% this month", ClipboardList], ["Active tables", "18 / 24", "6 tables available", Table2], ["Menu items", "86", "4 unavailable", Utensils],
] as const;

export default function Dashboard() {
  return <>
      <header className="dash-topbar"><div><h1>Good morning, Sarah</h1><p>Here&apos;s what&apos;s happening at BiteNow today.</p></div><div className="top-actions"><button className="icon-btn"><Bell size={17}/></button><button className="new-order"><Plus size={15}/> New order</button></div></header>
      <section className="stat-grid">{stats.map(([label,value,trend,Icon],i)=><article className="stat-card" key={label}><div className="stat-top"><span>{label}</span><span className="stat-icon"><Icon size={17}/></span></div><h3>{value}</h3><span className={`trend ${i>1?"neutral":""}`}>{trend}</span></article>)}</section>
      <section className="dash-grid"><article className="panel"><div className="panel-head"><h2>Revenue overview</h2><button>Last 7 days⌄</button></div><div className="chart">{[38,52,43,71,57,88,76].map((h,i)=><div key={i} className={`bar ${i===5?"current":""}`} style={{height:`${h}%`}}/>)}</div><div className="chart-labels"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div></article><article className="panel"><div className="panel-head"><h2>Order status</h2><button>View report</button></div><div className="donut-wrap"><div className="donut"/></div><div className="legend"><span>Completed 55%</span><span>Preparing 21%</span><span>Ready 14%</span><span>Pending 10%</span></div></article></section>
      <section className="panel orders-panel"><div className="panel-head"><h2>Recent orders</h2><button>View all orders →</button></div><table className="orders-table"><thead><tr><th>Order</th><th>Guest</th><th>Location</th><th>Items</th><th>Total</th><th>Status</th><th>Time</th></tr></thead><tbody>{recentOrders.map(o=><tr key={o.id}><td className="order-id">{o.id}</td><td className="guest-cell"><strong>{o.guest}</strong><small>Guest order</small></td><td>{o.table}</td><td>{o.items}</td><td>${o.total}.00</td><td><span className={`status ${o.status}`}>{o.status}</span></td><td>{o.time}</td></tr>)}</tbody></table></section>
  </>;
}
