import { PublicPageShell } from "@/components/PublicPageShell";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <PublicPageShell eyebrow="Contact" title="Talk to BiteNow." description="Reach out to us or connect on social media.">
      <section className="contact-page-card">
        <ul><li><Mail /> hello@bitenow.example</li><li><Phone /> +254 700 123 456</li><li><MapPin /> Nairobi, Kenya</li></ul>
        <form><label>Name<input placeholder="Your name" /></label><label>Email<input placeholder="you@example.com" /></label><label>Message<textarea placeholder="Tell us what you need" /></label><button type="button" className="btn-primary">Send message</button></form>
      </section>
    </PublicPageShell>
  );
}
