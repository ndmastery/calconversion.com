import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import "./not-found-base.css";
import "./not-found-hero.css";
import "./not-found-content.css";
import "./not-found-responsive.css";
import "./not-found-theme.css";

const CATEGORIES = [
  { name: "Currency",      count: "260+ units",    color: "#66BB6A", href: "/#categories" },
  { name: "Distance",      count: "144 units",     color: "#42A5F5", href: "/#categories" },
  { name: "Apparel Sizes", count: "18+ countries", color: "#AB47BC", href: "/#categories" },
  { name: "Data Storage",  count: "60 units",      color: "#26C6DA", href: "/#categories" },
  { name: "Weight & Mass", count: "122 units",     color: "#FFA726", href: "/#categories" },
] as const;

export const NotFound = component$(() => {
  const loc = useLocation();

  return (
    <section class="nf" id="not-found-page">
      <div class="nf__hero">
        <div class="nf__hero-mesh" aria-hidden="true" />
        <div class="nf__hero-dots" aria-hidden="true" />
        <div class="nf__scan nf__scan--1" aria-hidden="true" />
        <div class="nf__scan nf__scan--2" aria-hidden="true" />
        <div class="nf__scan nf__scan--3" aria-hidden="true" />
        <span class="nf__hero-num" aria-hidden="true">
          404
        </span>
        <span class="nf__hero-label" aria-hidden="true">
          Error · Not Found
        </span>
        <span class="nf__hero-coord" aria-hidden="true">
          HTTP/1.1 404
        </span>
      </div>

      <div class="nf__content">
        <div class="nf__badge">
          <span class="nf__badge-indicator" />
          Page Not Found
        </div>

        <h1 class="nf__title">
          We couldn't find{" "}
          <span class="nf__title-accent">that page</span>
        </h1>

        <p class="nf__desc">
          The URL you entered doesn't match any page in CalConversion.
          Our app converts 500+ units across 5 categories — from currencies
          and distances to apparel sizes and data storage. Let's get you
          somewhere useful.
        </p>

        <div class="nf__divider" aria-hidden="true" />

        <div class="nf__url">
          <span class="nf__url-tag">404</span>
          <code class="nf__url-path">{loc.url.pathname}</code>
        </div>

        <nav class="nf__bars" aria-label="Explore conversion categories">
          {CATEGORIES.map((cat) => (
            <a key={cat.name} href={cat.href} class="nf__bar" style={{ "--bar-c": cat.color }}>
              <span class="nf__bar-name">{cat.name}</span>
              <span class="nf__bar-count">{cat.count}</span>
              <svg class="nf__bar-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          ))}
        </nav>

        <div class="nf__actions">
          <a href="/" class="nf__btn nf__btn--primary" id="not-found-go-home">
            <svg class="nf__btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            Go to Homepage
          </a>
          <button
            class="nf__btn nf__btn--secondary"
            id="not-found-go-back"
            onClick$={() => history.back()}
          >
            <svg class="nf__btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
            Go Back
          </button>
        </div>

        <p class="nf__footnote">
          <strong>CalConversion</strong> — Convert Anything. Everywhere. Instantly.
          Available on iOS, Android, Web, and Desktop with full offline support.
        </p>
      </div>
    </section>
  );
});
