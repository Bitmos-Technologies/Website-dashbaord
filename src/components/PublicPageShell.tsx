import { CartDrawer } from "@/components/CartDrawer";
import { Header } from "@/components/Header";

export function PublicPageShell({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: React.ReactNode }) {
  return (
    <main className="public-page">
      <Header />
      <CartDrawer />
      <header className="public-hero">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      {children}
      <footer><div className="brand"><span className="brand-mark">B</span><span>Bite<span className="brand-dot">Now</span></span></div><p>Order fast. Eat now.</p><span>© 2026 BiteNow Platform</span></footer>
    </main>
  );
}
