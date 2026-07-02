"use client";

import { useState } from "react";
import { PublicPageShell } from "@/components/PublicPageShell";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <PublicPageShell eyebrow="Login" title="Access your BiteNow account." description="Sign in to order food or manage your restaurant.">
      <section className="signup-card">
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
          <label>Email<input required type="email" placeholder="you@example.com" /></label>
          <label>Password<input required type="password" placeholder="••••••••" /></label>
          <button className="btn-primary">Login</button>
        </form>
        {submitted && <p className="api-notice">Demo login successful. No API request was sent.</p>}
      </section>
    </PublicPageShell>
  );
}
