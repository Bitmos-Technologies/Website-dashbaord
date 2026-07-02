import Link from "next/link";
import { ArrowDownRight, ArrowRight, CheckCircle2, Mail, MapPin, Phone, Star } from "lucide-react";
import { CartDrawer } from "@/components/CartDrawer";
import { Header } from "@/components/Header";
import { MenuCard } from "@/components/MenuCard";
import { menuItems } from "@/data/demo";
import { customerBenefits, howItWorks, platformStats, promos, restaurantBenefits, restaurants, testimonials } from "@/data/public-site";

export default function Home() {
  return (
    <main>
      <Header />
      <CartDrawer />

      <section className="hero platform-hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Food ordering platform</div>
          <h1>Order fast.<br /><em>Eat now.</em></h1>
          <p>BiteNow connects hungry customers with restaurants, hotels, and food vendors through a simple ordering experience and an operational dashboard for restaurant teams.</p>
          <div className="hero-actions">
            <Link href="/signup" className="primary-cta">Get started <ArrowDownRight size={18} /></Link>
            <Link href="/login" className="text-cta">Login <ArrowRight size={17} /></Link>
            <Link href="/dashboard" className="text-cta">Dashboard <ArrowRight size={17} /></Link>
          </div>
          <div className="stat-strip">{platformStats.map(([value, label]) => <span key={label}><strong>{value}</strong>{label}</span>)}</div>
        </div>
        <div className="hero-visual wireframe-visual">
          <div className="app-wireframe">
            <div className="wire-top"><i /><i /><i /></div>
            <div className="wire-search">Search restaurants, meals, offers...</div>
            {restaurants.slice(0, 2).map((restaurant) => <div className="wire-row" key={restaurant.name}><span /><div><b>{restaurant.name}</b><small>{restaurant.tag}</small></div><em>{restaurant.rating}</em></div>)}
            <div className="wire-checkout"><span>Cart total</span><strong>$52.00</strong><button>Place order</button></div>
          </div>
        </div>
      </section>

      <section className="intro" id="services">
        <div className="intro-label">Services offered</div>
        <h2>One platform for customers<br />and restaurants.</h2>
        <p>Customers discover restaurants and order meals. Restaurants manage menus, tables, payments, notifications, and staff operations from the admin dashboard.</p>
        <div className="split-benefits">
          <article>
            <span>For customers</span>
            {customerBenefits.map(([title, text, Icon]) => <div className="benefit-line" key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </article>
          <article>
            <span>For restaurants</span>
            {restaurantBenefits.map(([title, text, Icon]) => <div className="benefit-line" key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </article>
        </div>
      </section>

      <section className="process-section" id="how-it-works">
        <div className="section-heading"><div><span>How it works</span><h2>From browsing to serving.</h2></div><Link href="/how-it-works">Open page <ArrowRight size={17} /></Link></div>
        <div className="process-grid">{howItWorks.map(([title, text], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="restaurant-section" id="restaurants">
        <div className="section-heading"><div><span>Featured restaurants</span><h2>Discover places to order from.</h2></div><Link href="/restaurants">View all <ArrowRight size={17} /></Link></div>
        <div className="restaurant-grid">{restaurants.map((restaurant) => <article className="restaurant-card" key={restaurant.name}><div style={{ backgroundImage: `url(${restaurant.image})` }} /><section><span>{restaurant.location}</span><h3>{restaurant.name}</h3><p>{restaurant.tag}</p><strong><Star size={14} fill="currentColor" /> {restaurant.rating}</strong></section></article>)}</div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading"><div><span>Featured menu & promotions</span><h2>Meals and offers customers can explore.</h2></div><Link href="/menu">Full menu <ArrowRight size={17} /></Link></div>
        <div className="promo-grid">{promos.map((promo) => <article key={promo.name}><span>{promo.label}</span><h3>{promo.name}</h3><p>{promo.discount}</p><strong>{promo.price}</strong></article>)}</div>
        <div className="menu-grid">{menuItems.map((item) => <MenuCard key={item.id} item={item} />)}</div>
      </section>

      <section className="about-band" id="about">
        <div>
          <span>About us</span>
          <h2>Our mission is to make ordering simpler for everyone.</h2>
        </div>
        <p>BiteNow helps food businesses move from scattered calls and manual order books to a clear digital flow. The objective is simple: faster ordering for customers, calmer operations for teams, and better visibility for owners.</p>
        <Link href="/about" className="primary-cta">Read about us <ArrowRight size={17} /></Link>
      </section>

      <section className="testimonials-section" id="testimonials">
        <div className="section-heading"><div><span>Reviews & success stories</span><h2>What users say.</h2></div></div>
        <div className="testimonial-grid">{testimonials.map((item) => <article key={item.author}><CheckCircle2 /><p>“{item.quote}”</p><strong>{item.author}</strong><span>{item.role}</span></article>)}</div>
      </section>

      <section className="contact-band" id="contact">
        <div><span>Contact</span><h2>Ready to order or onboard your restaurant?</h2></div>
        <ul>
          <li><Mail size={16} /> hello@bitenow.example</li>
          <li><Phone size={16} /> +254 700 123 456</li>
          <li><MapPin size={16} /> Nairobi, Kenya</li>
        </ul>
        <div className="social-links"><a href="#">Instagram</a><a href="#">Facebook</a><a href="#">X / Twitter</a><a href="#">LinkedIn</a></div>
      </section>

      <footer><div className="brand"><span className="brand-mark">B</span><span>Bite<span className="brand-dot">Now</span></span></div><p>Order fast. Eat now.</p><span>© 2026 BiteNow Platform</span></footer>
    </main>
  );
}
