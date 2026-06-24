import { ArrowDownRight, ArrowRight, Award, Leaf, MapPin, Star } from "lucide-react";
import { CartDrawer } from "@/components/CartDrawer";
import { Header } from "@/components/Header";
import { MenuCard } from "@/components/MenuCard";
import { menuItems } from "@/data/demo";

export default function Home() {
  return <main>
    <Header /><CartDrawer />
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span /> Nairobi · Kenya</div>
        <h1>Good food.<br /><em>Beautifully</em> simple.</h1>
        <p>Season-led plates, familiar flavours, and a little spark—served all day in the heart of the city.</p>
        <div className="hero-actions"><a href="#menu" className="primary-cta">Explore the menu <ArrowDownRight size={18} /></a><button className="text-cta">Book a table <ArrowRight size={17} /></button></div>
        <div className="hero-proof"><div className="avatar-stack"><span>MC</span><span>NW</span><span>+</span></div><div><div className="stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><small>Loved by 2,400+ guests</small></div></div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo" />
        <div className="floating-card"><span>Chef&apos;s favourite</span><strong>Coastal Salmon</strong><small>Bright, buttery, unforgettable.</small></div>
        <div className="open-pill"><i /><span><strong>Open today</strong><small>7:00 AM — 11:00 PM</small></span></div>
      </div>
    </section>

    <section className="intro" id="story">
      <div className="intro-label">The Luma way</div><h2>Hospitality is in the<br />details.</h2><p>We source close, cook with care, and make every visit feel wonderfully unhurried.</p>
      <div className="principles"><div><Leaf /><h3>Season-led</h3><p>The freshest ingredients, at their natural best.</p></div><div><Award /><h3>Made with purpose</h3><p>Thoughtful food, from kitchen to table.</p></div><div><MapPin /><h3>Proudly local</h3><p>Great producers and growers, close to home.</p></div></div>
    </section>

    <section className="menu-section" id="menu">
      <div className="section-heading"><div><span>From our kitchen</span><h2>Today&apos;s favourites</h2></div><a href="#menu">View full menu <ArrowRight size={17} /></a></div>
      <div className="menu-grid">{menuItems.map((item) => <MenuCard key={item.id} item={item} />)}</div>
    </section>

    <section className="experience" id="experience"><div><span>A table, just for you</span><h2>Come for dinner.<br />Stay for the feeling.</h2><p>Quiet corners, good music, and plates worth sharing. Your table is closer than you think.</p><button>Reserve your table <ArrowRight size={17} /></button></div></section>
    <footer><div className="brand"><span className="brand-mark">L</span><span>Luma<span className="brand-dot">.</span></span></div><p>Food made with feeling. Served in Nairobi.</p><span>© 2026 Luma Hospitality</span></footer>
  </main>;
}
