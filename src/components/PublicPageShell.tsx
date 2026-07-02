import Link from "next/link";
import { ArrowRight, UtensilsCrossed } from "lucide-react";

export function PublicPageShell({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: React.ReactNode }) {
  return (
    <main className="public-page">
      <nav className="public-top">
        <Link href="/" className="brand"><span className="brand-mark"><UtensilsCrossed size={18} /></span><span>Bite<span className="brand-dot">Now</span></span></Link>
        <div><Link href="/login">Login</Link><Link href="/signup">Sign Up</Link><Link href="/dashboard">Dashboard</Link></div>
      </nav>
      <header className="public-hero">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link href="/" className="primary-cta">Back to landing <ArrowRight size={16} /></Link>
      </header>
      {children}
      <footer><div className="brand"><span className="brand-mark">B</span><span>Bite<span className="brand-dot">Now</span></span></div><p>Order fast. Eat now.</p><span>© 2026 BiteNow Platform</span></footer>
    </main>
  );
}
