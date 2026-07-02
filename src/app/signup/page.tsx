"use client";

import { useState } from "react";
import { PublicPageShell } from "@/components/PublicPageShell";

export default function SignUpPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <PublicPageShell eyebrow="Sign up" title="Create a demo BiteNow account." description="This is a non-API wireframe form for customers or restaurant onboarding.">
      <section className="signup-card">
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
          <label>Account type<select><option>Customer</option><option>Restaurant owner</option><option>Hotel manager</option></select></label>
          <label>Full name<input required placeholder="Your name" /></label>
          <label>Email<input required type="email" placeholder="you@example.com" /></label>
          <label>Business / restaurant name<input placeholder="Optional" /></label>
          <button className="btn-primary">Create wireframe account</button>
        </form>
        {submitted && <p className="api-notice">Demo sign-up captured locally. No API request was sent.</p>}
      </section>
    </PublicPageShell>
  );
}
