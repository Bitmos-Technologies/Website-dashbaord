import { PublicPageShell } from "@/components/PublicPageShell";
import { customerBenefits, restaurantBenefits } from "@/data/public-site";

export default function ServicesPage() {
  return (
    <PublicPageShell eyebrow="Services" title="One platform for customers and restaurants." description="BiteNow brings ordering, checkout, operations, and customer communication into one clear experience.">
      <section className="split-benefits page-services">
        <article>
          <span>For customers</span>
          {customerBenefits.map(([title, text, Icon]) => <div className="benefit-line" key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></div>)}
        </article>
        <article>
          <span>For restaurants</span>
          {restaurantBenefits.map(([title, text, Icon]) => <div className="benefit-line" key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></div>)}
        </article>
      </section>
    </PublicPageShell>
  );
}
