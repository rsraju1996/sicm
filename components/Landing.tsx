"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function CourtLogo({
  className = "",
  pixelSize = 96,
  priority = false,
}: {
  className?: string;
  pixelSize?: number;
  priority?: boolean;
}) {
  return (
    <Image
      src="/high-court-sikkim-logo.png"
      alt="Emblem of the High Court of Sikkim"
      width={pixelSize}
      height={pixelSize}
      className={className}
      priority={priority}
    />
  );
}

const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#workflow", label: "Workflow" },
  { href: "#faq", label: "FAQ" },
];

const capabilities = [
  {
    title: "Unified case registry",
    description:
      "One authoritative record across departments with clear ownership, timelines, and audit history.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "Secure role-based access",
    description:
      "Granular permissions for officers, courts, and partner agencies—without slowing legitimate work.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Hearings & scheduling",
    description:
      "Coordinate dates, notices, and appearances with reminders that reduce adjournments and delays.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Document intelligence",
    description:
      "Structured filings, version control, and quick retrieval—so evidence and orders are always at hand.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM13.5 10.5h-6" />
      </svg>
    ),
  },
  {
    title: "Analytics for leadership",
    description:
      "Dashboards for pendency, disposal rates, and bottlenecks—turning operational data into decisions.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: "Citizen-friendly touchpoints",
    description:
      "Clear status updates and guided steps that reduce repeat visits and build confidence in public service.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
];

const workflowSteps = [
  { step: "01", title: "Intake & classification", detail: "Capture essentials once and route to the right forum automatically." },
  { step: "02", title: "Assignment & progress", detail: "Track tasks, deadlines, and hand-offs without losing context." },
  { step: "03", title: "Resolution & reporting", detail: "Close loops with transparent outcomes and exportable records." },
];

const faqs = [
  {
    q: "What is SICM?",
    a: "Sikkim Integrated Case Management System (SICM) is a digital platform designed to streamline how cases are registered, managed, and monitored across participating departments—improving speed, accountability, and service quality.",
  },
  {
    q: "Who can use the system?",
    a: "Authorized government personnel and partner agencies receive credentials based on their role. Public-facing services, where available, are designed to be simple and accessible on common devices.",
  },
  {
    q: "How does SICM help reduce delays?",
    a: "By replacing fragmented processes with a shared workflow, automated reminders, and clear ownership, SICM reduces rework and makes bottlenecks visible early—so teams can intervene before timelines slip.",
  },
];

export function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navElevated, setNavElevated] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const onScroll = () => setNavElevated(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-hcs-page text-zinc-900 dark:bg-[#050a18] dark:text-zinc-50">
      <div
        className="pointer-events-none fixed inset-0 -z-10 sicm-aurora opacity-90 dark:opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(111,163,209,0.28),transparent),radial-gradient(ellipse_55%_40%_at_100%_0%,rgba(0,0,75,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(111,163,209,0.14),transparent)]"
        aria-hidden
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-hcs-navy text-white transition-shadow duration-300 ${
          navElevated ? "shadow-lg shadow-black/30" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6 lg:px-8">
          <a
            href="#top"
            className="group flex min-w-0 items-center gap-3 rounded-lg outline-none ring-hcs-sky/50 focus-visible:ring-2"
            onClick={() => setMenuOpen(false)}
          >
            <CourtLogo
              pixelSize={112}
              priority
              className="h-10 w-10 shrink-0 rounded-full bg-white object-contain p-0.5 shadow-md ring-2 ring-white/25 transition group-hover:ring-hcs-sky/80 sm:h-11 sm:w-11"
            />
            <span className="min-w-0 flex flex-col leading-tight">
              <span className="truncate text-[11px] font-medium uppercase tracking-wider text-hcs-sky/95 sm:text-xs">
                High Court of Sikkim
              </span>
              <span className="truncate text-sm font-semibold tracking-tight text-white">SICM</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#contact"
              className="rounded-full border border-white/35 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact
            </a>
            <a
              href="#access"
              className="rounded-full bg-hcs-sky px-4 py-2 text-sm font-semibold text-hcs-navy shadow-md shadow-black/20 transition hover:bg-hcs-sky-light"
            >
              Request access
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white shadow-sm backdrop-blur md:hidden hover:bg-white/15"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`fixed inset-0 top-16 z-40 bg-hcs-navy/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden={!menuOpen}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute left-0 right-0 top-full z-50 border-b border-zinc-200 bg-white/98 shadow-lg backdrop-blur-md transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950/98 md:hidden ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex max-h-[min(70vh,calc(100dvh-5rem))] flex-col gap-1 overflow-y-auto px-4 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-zinc-800 hover:bg-hcs-sky/15 hover:text-hcs-navy dark:text-zinc-100 dark:hover:bg-hcs-navy/30 dark:hover:text-hcs-sky-light"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="my-2 border-zinc-200 dark:border-zinc-800" />
            <a
              href="#contact"
              className="rounded-xl px-4 py-3 text-base font-semibold text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-900"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="#access"
              className="mx-1 mt-1 rounded-xl bg-hcs-sky px-4 py-3 text-center text-base font-semibold text-hcs-navy shadow-md hover:bg-hcs-sky-light"
              onClick={() => setMenuOpen(false)}
            >
              Request access
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pt-36">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div className="sicm-fade-up">
              <div className="flex flex-col gap-8 sm:grid sm:grid-cols-[auto,1fr] sm:items-start sm:gap-10">
                <CourtLogo
                  pixelSize={200}
                  className="mx-auto h-28 w-28 shrink-0 rounded-full bg-white object-contain p-1 shadow-xl ring-2 ring-hcs-navy/15 sm:mx-0 sm:h-32 sm:w-32 dark:bg-white dark:ring-hcs-sky/25"
                />
                <div className="min-w-0 space-y-8 text-center sm:text-left">
                  <p className="inline-flex items-center gap-2 rounded-full border border-hcs-sky/45 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-hcs-navy shadow-sm dark:border-hcs-sky/35 dark:bg-hcs-navy-soft/60 dark:text-hcs-sky-light">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hcs-sky opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-hcs-navy dark:bg-hcs-sky" />
                    </span>
                    High Court of Sikkim
                  </p>
                  <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                    Integrated Case Management for a{" "}
                    <span className="bg-gradient-to-r from-hcs-navy via-hcs-sky to-hcs-navy-deep bg-clip-text text-transparent dark:from-hcs-sky-light dark:via-white dark:to-hcs-sky">
                      faster, fairer
                    </span>{" "}
                    justice journey
                  </h1>
                  <p className="max-w-xl text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
                    SICM connects people, processes, and proof on one trusted platform—so teams spend less time
                    coordinating and more time resolving cases with clarity.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                    <a
                      href="#capabilities"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-hcs-navy px-8 text-sm font-semibold text-white shadow-lg shadow-hcs-navy/25 transition hover:bg-hcs-navy-soft active:scale-[0.98] dark:hover:bg-hcs-navy-deep"
                    >
                      Explore capabilities
                    </a>
                    <a
                      href="#workflow"
                      className="inline-flex h-12 items-center justify-center rounded-full border border-hcs-navy/20 bg-white/90 px-8 text-sm font-semibold text-hcs-navy backdrop-blur transition hover:border-hcs-sky hover:bg-white dark:border-zinc-600 dark:bg-zinc-900/50 dark:text-zinc-100 dark:hover:border-hcs-sky dark:hover:text-hcs-sky-light"
                    >
                      See how it works
                    </a>
                  </div>
                  <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
                    {[
                      { k: "Single source of truth", v: "One case, many stakeholders" },
                      { k: "Built for scale", v: "From district hubs to state view" },
                      { k: "Privacy by design", v: "Role-based, audited access" },
                    ].map((item) => (
                      <div
                        key={item.k}
                        className="rounded-2xl border border-zinc-200/80 bg-white/60 p-4 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-hcs-sky/60 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-hcs-sky/40"
                      >
                        <dt className="text-xs font-semibold uppercase tracking-wide text-hcs-navy dark:text-hcs-sky-light">{item.k}</dt>
                        <dd className="mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-200">{item.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            <div className="sicm-fade-up relative" style={{ animationDelay: "120ms" }}>
              <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-hcs-sky/25 blur-3xl dark:bg-hcs-sky/15" aria-hidden />
              <div className="absolute -bottom-12 -right-8 h-44 w-44 rounded-full bg-hcs-navy/10 blur-3xl dark:bg-hcs-navy/30" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:shadow-black/40 sm:p-8">
                <div className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-4 dark:border-zinc-700">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Live snapshot</p>
                    <p className="text-lg font-semibold text-zinc-900 dark:text-white">Case operations desk</p>
                  </div>
                  <span className="rounded-full bg-hcs-sky/25 px-2.5 py-1 text-xs font-semibold text-hcs-navy dark:bg-hcs-navy-soft/80 dark:text-hcs-sky-light">
                    Stable
                  </span>
                </div>
                <ul className="mt-5 space-y-3">
                  {[
                    { label: "New intakes today", value: "128", trend: "+12%" },
                    { label: "Avg. resolution window", value: "18 days", trend: "↓ 9%" },
                    { label: "Officer SLA adherence", value: "94%", trend: "+3%" },
                  ].map((row, i) => (
                    <li
                      key={row.label}
                      className="group flex items-center justify-between rounded-2xl border border-zinc-100 bg-zinc-50/80 px-4 py-3 transition hover:border-hcs-sky/50 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/40 dark:hover:border-hcs-sky/35 dark:hover:bg-zinc-900/80"
                      style={{ animationDelay: `${200 + i * 80}ms` }}
                    >
                      <div>
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{row.label}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">Illustrative metrics</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold tabular-nums text-zinc-900 dark:text-white">{row.value}</p>
                        <p className="text-xs font-semibold text-hcs-navy dark:text-hcs-sky">{row.trend}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-center text-[11px] text-zinc-500 dark:text-zinc-400">
                  Figures shown for demonstration; replace with official statistics when available.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="scroll-mt-24 border-y border-zinc-200/80 bg-white/60 px-4 py-16 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/30 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for the realities on the ground</h2>
              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
                SICM is designed around the daily work of registries, investigators, legal teams, and administrators—
                reducing friction without compromising control.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Fewer hand-offs",
                  body: "Shared timelines mean less chasing files between rooms, desks, and departments.",
                },
                {
                  title: "Clear accountability",
                  body: "Every action leaves a trail—supporting audits, appeals, and continuous improvement.",
                },
                {
                  title: "Citizen confidence",
                  body: "Predictable updates and respectful design help people understand what happens next.",
                },
              ].map((card) => (
                <article
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-b from-white to-zinc-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-hcs-sky/55 hover:shadow-lg dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900 dark:hover:border-hcs-sky/40"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-hcs-navy via-hcs-sky to-hcs-navy-deep opacity-0 transition group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Capabilities that compound</h2>
                <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-300">
                  Modular features you can adopt in phases—each one strengthens the next as your digital maturity grows.
                </p>
              </div>
              <a
                href="#faq"
                className="text-sm font-semibold text-hcs-navy underline-offset-4 hover:underline dark:text-hcs-sky-light"
              >
                Read common questions →
              </a>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => (
                <article
                  key={item.title}
                  className="group flex flex-col rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-hcs-sky/55 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-hcs-sky/45"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-hcs-sky/20 text-hcs-navy transition group-hover:scale-105 group-hover:bg-hcs-sky/30 dark:bg-hcs-navy-soft/80 dark:text-hcs-sky-light dark:group-hover:bg-hcs-navy/90">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.description}</p>
                  <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-wide text-hcs-navy opacity-0 transition group-hover:opacity-100 dark:text-hcs-sky-light">
                    Learn more
                    <svg className="ml-1 h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="workflow" className="scroll-mt-24 px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">A workflow teams can actually follow</h2>
            <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-300">
              Tap a step to highlight the journey—useful for onboarding workshops and leadership walkthroughs.
            </p>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
              <div className="flex flex-col gap-3">
                {workflowSteps.map((s, i) => {
                  const active = activeStep === i;
                  return (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => setActiveStep(i)}
                      className={`flex w-full items-start gap-4 rounded-2xl border px-4 py-4 text-left transition ${
                        active
                          ? "border-hcs-sky bg-hcs-sky/15 shadow-md dark:border-hcs-sky dark:bg-hcs-navy-soft/50"
                          : "border-zinc-200 bg-white/70 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-600"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold tabular-nums ${
                          active
                            ? "bg-gradient-to-br from-hcs-navy to-hcs-navy-deep text-white"
                            : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                        }`}
                      >
                        {s.step}
                      </span>
                      <span>
                        <span className="block font-semibold text-zinc-900 dark:text-white">{s.title}</span>
                        <span className="mt-1 block text-sm text-zinc-600 dark:text-zinc-300">{s.detail}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-hcs-navy via-hcs-navy-soft to-hcs-navy-deep p-8 text-white shadow-xl dark:border-zinc-700">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-hcs-sky/25 blur-2xl" aria-hidden />
                <p className="text-sm font-medium uppercase tracking-wider text-hcs-sky-light/95">Selected stage</p>
                <h3 className="mt-2 text-2xl font-semibold">{workflowSteps[activeStep].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-200">{workflowSteps[activeStep].detail}</p>
                <ul className="mt-6 space-y-2 text-sm text-zinc-200">
                  {(activeStep === 0
                    ? ["Validated intake forms", "Auto-triage by category", "Instant stakeholder alerts"]
                    : activeStep === 1
                      ? ["Task boards per officer", "SLA nudges before breach", "Secure internal notes"]
                      : ["Signed orders archived", "Citizen notifications", "Executive dashboards"]
                  ).map((line) => (
                    <li key={line} className="flex items-center gap-2">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-hcs-sky/30 text-hcs-sky-light">
                        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 border-t border-zinc-200/80 bg-white/50 px-4 py-16 dark:border-zinc-800 dark:bg-zinc-900/25 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Questions, answered</h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">
              Straightforward explanations you can share with staff and partners.
            </p>
            <div className="mt-8 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white/90 dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950/50">
              {faqs.map((item, i) => {
                const open = openFaq === i;
                return (
                  <div key={item.q} className="px-4 sm:px-6">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={open}
                      onClick={() => setOpenFaq(open ? null : i)}
                    >
                      <span className="text-base font-semibold text-zinc-900 dark:text-white">{item.q}</span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-600 transition dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 ${
                          open ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{item.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="access" className="scroll-mt-24 px-4 pb-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-hcs-navy via-hcs-navy-soft to-hcs-navy-deep px-6 py-12 text-center shadow-xl shadow-hcs-navy/35 sm:px-10 sm:py-16">
            <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">Ready to modernize case handling?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-hcs-sky-light/95">
              Partner with your IT cell and program office to plan rollout, training, and data migration. We will help you
              stage adoption so teams stay productive from day one.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-hcs-navy shadow-md transition hover:bg-hcs-sky-light active:scale-[0.98]"
              >
                Plan a briefing
              </a>
              <a
                href="#overview"
                className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Review overview
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-mt-24 border-t border-white/10 bg-hcs-navy px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-start gap-3">
              <CourtLogo
                pixelSize={96}
                className="h-14 w-14 shrink-0 rounded-full bg-white object-contain p-0.5 shadow-lg ring-2 ring-white/20"
              />
              <div>
                <p className="font-semibold">Sikkim Integrated Case Management System</p>
                <p className="text-sm text-hcs-sky-light/90">High Court of Sikkim · Digital initiative for transparent public service</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-white/80">
              For official correspondence, please use your department&apos;s designated channels. This landing page is a
              presentation layer for the program and may be updated as rollout milestones are announced.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:text-right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-hcs-sky-light/80">On this page</p>
              <ul className="mt-3 space-y-2 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a className="text-white/90 hover:text-hcs-sky-light hover:underline" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-hcs-sky-light/80">Contact placeholder</p>
              <p className="mt-3 text-sm text-white/75">
                Replace with helpline, NIC nodal officer, or support email when finalized.
              </p>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-white/15 pt-8 text-center text-xs text-white/55">
          © {new Date().getFullYear()} Sikkim Integrated Case Management System. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
