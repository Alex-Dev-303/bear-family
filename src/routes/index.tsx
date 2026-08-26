import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bot,
  Boxes,
  Camera,
  CheckCircle2,
  Cpu,
  LineChart,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import logo from "@/assets/bearfamily-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bear Family LLC — AI-Native Product Studio" },
      {
        name: "description",
        content:
          "Bear Family LLC builds AI-native web, mobile, and computer-vision products for startups — from first prototype to production scale.",
      },
      { property: "og:title", content: "Bear Family LLC — AI-Native Product Studio" },
      {
        property: "og:description",
        content:
          "We design, build, and launch intelligent products that give founders an unfair advantage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const nav = [
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    icon: Sparkles,
    title: "AI-Native MVPs",
    body: "Launch startup-ready web and mobile products with AI built into the core experience from day one.",
  },
  {
    icon: Boxes,
    title: "Full-Stack Product Development",
    body: "From product strategy and UX to backend systems and mobile apps, we build end-to-end.",
  },
  {
    icon: Camera,
    title: "Computer Vision & Automation",
    body: "Deploy AI for CCTV monitoring, detection workflows, operational visibility, and smart alerts.",
  },
  {
    icon: Cpu,
    title: "Generative AI Platforms",
    body: "Image, content, and workflow generation products that open new revenue and product lines.",
  },
];

const useCases = [
  {
    icon: Bot,
    title: "AI SaaS copilots",
    body: "Assistant-driven workflows, smart search, recommendations, and automation inside SaaS products.",
  },
  {
    icon: LineChart,
    title: "Healthcare intelligence",
    body: "Patient-facing and internal healthcare tools powered by AI-assisted analysis and workflows.",
  },
  {
    icon: Camera,
    title: "CCTV monitoring & detection",
    body: "Turn live video streams into real-time monitoring, anomaly detection, and operational insight.",
  },
  {
    icon: Sparkles,
    title: "Image & content generation",
    body: "Platforms for AI image generation, content creation, prompt workflows, and creative automation.",
  },
  {
    icon: Workflow,
    title: "Internal business automation",
    body: "Replace manual processes with AI-driven dashboards, approvals, data extraction, and reporting.",
  },
  {
    icon: ArrowRight,
    title: "Founder MVP acceleration",
    body: "Concept to launch-ready product fast, with architecture built for iteration and growth.",
  },
];

const industries = [
  "AI SaaS",
  "Healthcare",
  "Security & Surveillance",
  "Computer Vision",
  "Generative AI",
  "Content Platforms",
  "Mobile Products",
  "Web Applications",
];

const process = [
  {
    step: "01",
    title: "Discovery",
    body: "We map the business model, the user, and where AI creates real leverage — not decoration.",
  },
  {
    step: "02",
    title: "Product blueprint",
    body: "Scope, architecture, and UX flows defined so the first build is the right build.",
  },
  {
    step: "03",
    title: "Build sprints",
    body: "Weekly shipping cadence across frontend, backend, models, and infrastructure.",
  },
  {
    step: "04",
    title: "Launch & scale",
    body: "Hardening, monitoring, and iteration once real users are in the product.",
  },
];

const proof = [
  "Built AI SaaS tools with automated workflows and intelligent search",
  "Developed healthcare systems with AI-assisted analysis and decision support",
  "Delivered real-time CCTV monitoring with anomaly detection and alerting",
  "Launched scalable AI image and content generation platforms",
];

const compliance = [
  "Secure development practices",
  "Privacy-first architecture",
  "Scalable cloud infrastructure",
  "Compliance-aware product design",
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={logo.url} alt="Bear Family LLC logo" className="h-11 w-11 object-contain" />
            <span className="font-display text-base font-semibold tracking-tight">
              Bear Family <span className="text-muted-foreground">LLC</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a Call
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="grid-lines absolute inset-0 opacity-60" aria-hidden />
          <div className="hero-glow absolute inset-x-0 top-0 h-[560px]" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-24 text-center md:pt-32">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              AI-Native Product Studio
            </span>
            <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-[1.05] md:text-6xl">
              We build AI-native products that give startups an{" "}
              <span className="text-gradient">unfair advantage</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From idea to scale, Bear Family LLC helps founders design, build, and launch
              intelligent web and mobile products that rethink what is possible with AI.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-opacity hover:opacity-90"
              >
                Start Your Product <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#use-cases"
                className="rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60"
              >
                Explore Use Cases
              </a>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-2">
              {industries.slice(0, 6).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-surface/50 px-4 py-1.5 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border text-left sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Positioning", "AI-native, not AI-added"],
                ["Promise", "Move faster. Build smarter."],
                ["Ideal Clients", "Founders & early-stage teams"],
                ["Core Offer", "Web, mobile, AI, product execution"],
              ].map(([k, v]) => (
                <div key={k} className="bg-surface p-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{k}</p>
                  <p className="mt-2 text-sm font-medium">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Services"
          title="Built for startups that want more than a normal app."
          lede="We combine product thinking, full-stack engineering, and AI execution to launch products that create real business leverage."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((s) => (
              <article key={s.title} className="surface-card p-7">
                <s.icon className="h-6 w-6 text-accent" />
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Use cases */}
        <Section
          id="use-cases"
          eyebrow="Use Cases"
          title="Real startup use cases where AI changes the business model."
          lede="We help founders apply AI in ways that create new workflows, better products, and stronger operational leverage."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <article key={u.title} className="surface-card p-6">
                <u.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-4 text-base font-semibold">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Industries */}
        <Section
          id="industries"
          eyebrow="Industries"
          title="Built across high-impact AI product categories."
          lede="Our experience spans startup environments where product speed, intelligence, and scalability matter most."
        >
          <div className="flex flex-wrap gap-3">
            {industries.map((i) => (
              <span
                key={i}
                className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-muted-foreground"
              >
                {i}
              </span>
            ))}
          </div>
        </Section>

        {/* Security + Why us */}
        <Section
          eyebrow="Why us"
          title="A technical partner for founders building AI-first companies."
          lede="Bear Family LLC turns ambitious ideas into intelligent products with the speed, clarity, and technical depth needed to launch and scale."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="surface-card p-7">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <h3 className="mt-5 text-lg font-semibold">
                Built with security, privacy, and compliance in mind
              </h3>
              <ul className="mt-5 space-y-3">
                {compliance.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-7">
              <Sparkles className="h-6 w-6 text-accent" />
              <h3 className="mt-5 text-lg font-semibold">What we have shipped</h3>
              <ul className="mt-5 space-y-3">
                {proof.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section
          id="process"
          eyebrow="Process"
          title="A clear path from idea to launched product."
          lede="Four focused phases, weekly shipping, and no ambiguity about what happens next."
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <article key={p.step} className="surface-card p-6">
                <span className="text-gradient font-display text-3xl font-bold">{p.step}</span>
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center">
            <div className="hero-glow absolute inset-0" aria-hidden />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl font-bold md:text-4xl">
                Let&apos;s reimagine your product with AI.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Tell us where you are today — an idea, a prototype, or a product that needs to move
                faster. We will map the fastest path to launch.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:contact@bearfamily.llc"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Mail className="h-4 w-4" /> contact@bearfamily.llc
                </a>
                <a
                  href="tel:+15107039930"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60"
                >
                  <Phone className="h-4 w-4" /> Book a call
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" className="h-9 w-9 object-contain" />
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bear Family LLC. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            {nav.slice(0, 4).map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <p className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight md:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        {lede}
      </p>
      <div className="mt-12">{children}</div>
    </section>
  );
}
