import { Building2, Clock3, CreditCard, HeartHandshake, Megaphone, Smartphone, Star, Store, UsersRound, UtensilsCrossed } from "lucide-react";

export const customerBenefits = [
  ["Order faster", "Browse restaurants, compare meals, and place an order in a few taps.", Smartphone],
  ["Track clearly", "See order progress from placed to ready without calling the restaurant.", Clock3],
  ["Pay smoothly", "Use cash, card, mobile money, or pay later depending on the restaurant.", CreditCard],
] as const;

export const restaurantBenefits = [
  ["Centralized orders", "Manage dine-in, takeaway, and delivery requests from one dashboard.", Store],
  ["Better operations", "Connect menu, table, payment, notification, and audit workflows.", Building2],
  ["More repeat guests", "Promotions, featured menus, and clear service keep customers returning.", HeartHandshake],
] as const;

export const howItWorks = [
  ["Discover", "Customers browse featured restaurants and menus."],
  ["Order", "They add meals to cart and submit a simple order."],
  ["Prepare", "Restaurant teams receive and manage the request."],
  ["Serve", "Customers collect, dine in, or receive delivery updates."],
] as const;

export const restaurants = [
  { name: "BiteNow Bistro", location: "Westlands", tag: "Fast lunch bowls", rating: "4.9", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=85" },
  { name: "Urban Flame Grill", location: "Kilimani", tag: "Grilled favourites", rating: "4.8", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85" },
  { name: "Coast & Curry", location: "Mombasa Road", tag: "Swahili specials", rating: "4.7", image: "https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=900&q=85" },
] as const;

export const promos = [
  { name: "Coastal Salmon", price: "$28", label: "Chef pick", discount: "Free drink today" },
  { name: "Truffle Tagliatelle", price: "$24", label: "Popular", discount: "10% off lunch" },
  { name: "Garden Burrata", price: "$16", label: "Fresh", discount: "Bundle with mains" },
] as const;

export const testimonials = [
  { quote: "Our lunch rush is calmer because orders arrive organized and easy to prioritize.", author: "Sarah K.", role: "Restaurant manager" },
  { quote: "I like seeing the menu, price, and status without waiting on the phone.", author: "Maya C.", role: "Customer" },
  { quote: "The dashboard wireframe shows exactly how our restaurant team wants to work.", author: "David O.", role: "Operations lead" },
] as const;

export const platformStats = [
  ["2.4k+", "guest orders"],
  ["48", "partner restaurants"],
  ["14 min", "average prep visibility"],
] as const;

export const featureIcons = [UtensilsCrossed, UsersRound, Megaphone, Star] as const;
