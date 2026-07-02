import { PublicPageShell } from "@/components/PublicPageShell";
import { restaurants } from "@/data/public-site";
import { Star } from "lucide-react";

export default function RestaurantsPage() {
  return (
    <PublicPageShell eyebrow="Restaurants" title="Featured restaurants available on BiteNow." description="Browse top-rated restaurants by cuisine, location, and rating.">
      <section className="restaurant-grid page-restaurants">{restaurants.map((restaurant) => <article className="restaurant-card" key={restaurant.name}><div style={{ backgroundImage: `url(${restaurant.image})` }} /><section><span>{restaurant.location}</span><h3>{restaurant.name}</h3><p>{restaurant.tag}</p><strong><Star size={14} fill="currentColor" /> {restaurant.rating}</strong></section></article>)}</section>
    </PublicPageShell>
  );
}
