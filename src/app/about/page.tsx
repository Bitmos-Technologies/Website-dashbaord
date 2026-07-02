import { PublicPageShell } from "@/components/PublicPageShell";

export default function AboutPage() {
  return (
    <PublicPageShell eyebrow="About us" title="A clearer way to order, serve, and grow." description="BiteNow is a wireframe for a food ordering platform that supports both customers and restaurant teams.">
      <section className="wire-page-grid">
        <article><span>Mission</span><h2>Make food ordering beautifully simple.</h2><p>We help customers find meals quickly while giving restaurants a structured operational dashboard.</p></article>
        <article><span>Objectives</span><h2>Speed, clarity, control.</h2><p>The platform focuses on clear menus, faster checkout, visible order status, restaurant tools, and better service visibility.</p></article>
        <article><span>Audience</span><h2>Built for guests and operators.</h2><p>Customers use the storefront. Restaurants use the admin dashboard to manage day-to-day activity.</p></article>
      </section>
    </PublicPageShell>
  );
}
