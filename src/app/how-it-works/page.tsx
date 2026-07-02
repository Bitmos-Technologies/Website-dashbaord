import { PublicPageShell } from "@/components/PublicPageShell";
import { howItWorks } from "@/data/public-site";

export default function HowItWorksPage() {
  return (
    <PublicPageShell eyebrow="How it works" title="Four simple steps from discovery to service." description="This page explains the order journey without connecting to the backend.">
      <section className="process-grid page-process">{howItWorks.map(([title, text], index) => <article key={title}><b>0{index + 1}</b><h3>{title}</h3><p>{text}</p></article>)}</section>
    </PublicPageShell>
  );
}
