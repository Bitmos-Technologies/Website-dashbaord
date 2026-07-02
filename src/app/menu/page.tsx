import { PublicPageShell } from "@/components/PublicPageShell";
import { MenuCard } from "@/components/MenuCard";
import { CartDrawer } from "@/components/CartDrawer";
import { menuItems } from "@/data/demo";
import { promos } from "@/data/public-site";

export default function PublicMenuPage() {
  return (
    <PublicPageShell eyebrow="Menu" title="Featured menu items and promotional content." description="Customers can add demo items to the cart. No API is required for this wireframe page.">
      <CartDrawer />
      <section className="promo-grid page-promos">{promos.map((promo) => <article key={promo.name}><span>{promo.label}</span><h3>{promo.name}</h3><p>{promo.discount}</p><strong>{promo.price}</strong></article>)}</section>
      <section className="menu-grid page-menu-grid">{menuItems.map((item) => <MenuCard key={item.id} item={item} />)}</section>
    </PublicPageShell>
  );
}
