import { useState } from "react";
import emblem from "@/assets/ana-reve-emblem.png";
import hero from "@/assets/ana-reve-hero.jpg";

function Emblem({ className = "" }: { className?: string }) {
  return (
    <img
      src={emblem}
      alt="Ana Rêve emblem — a guiding north star above a circle of stars"
      width={120}
      height={120}
      className={className}
    />
  );
}

export default function App() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !consent) return;
    setSubmitting(true);
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "notify",
          email: email.trim(),
          firstName: firstName.trim(),
          consent: "yes",
        }),
      });
      if (!res.ok) throw new Error("Network error");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3 ar-fade">
            <Emblem className="h-9 w-9" />
            <span className="font-serif text-base tracking-wide text-primary">
              Ana Rêve Initiative
            </span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt=""
            width={1600}
            height={1200}
            className="h-full w-full object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory/70 via-ivory/85 to-background" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 md:px-10 pt-40 pb-28 md:pt-56 md:pb-40 text-center">
          <div className="ar-fade ar-delay-1 flex justify-center mb-10">
            <Emblem className="h-24 w-24 md:h-28 md:w-28 ar-glow" />
          </div>

          <p className="ar-fade-up ar-delay-1 text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
            A European Initiative
          </p>

          <h1 className="ar-fade-up ar-delay-2 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.08] text-primary">
            A European initiative for
            <span className="italic"> hope, dignity </span>
            and meaningful support.
          </h1>

          <p className="ar-fade-up ar-delay-3 mt-8 md:mt-10 mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-muted-foreground">
            We are building something deeply human — bringing together people,
            expertise and technology to help where it matters most.
          </p>

          <div className="ar-fade-up ar-delay-4 mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#stay-informed"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary/90 transition-colors min-w-[180px]"
            >
              Stay informed
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-primary/30 text-primary px-8 py-4 text-sm tracking-wide hover:border-primary hover:bg-primary/[0.03] transition-all min-w-[180px]"
            >
              Contact us
            </a>
          </div>
        </div>

        <div className="hairline mx-auto max-w-5xl" />
      </section>

      {/* BRAND STORY */}
      <section className="relative">
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-28 md:py-40 text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-gold mb-8">
            Why Ana Rêve
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.15] text-primary">
            No family should feel alone{" "}
            <br className="hidden md:block" />
            when facing complexity.
          </h2>
          <div className="hairline w-24 mx-auto my-10" />
          <p className="text-base md:text-lg leading-[1.85] text-muted-foreground max-w-2xl mx-auto">
            Ana Rêve Initiative is being designed to connect compassion,
            expertise and intelligent coordination — creating meaningful,
            lasting support for the moments that matter most in a human life.
          </p>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-left">
            {[
              {
                k: "Humanity",
                v: "Dignity and compassion at the centre of every decision.",
              },
              {
                k: "Expertise",
                v: "Coordinated specialists working with care and rigour.",
              },
              {
                k: "Technology",
                v: "Intelligent tools that serve people — never replace them.",
              },
            ].map((p) => (
              <div key={p.k} className="border-t border-border pt-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-gold mb-3">
                  {p.k}
                </p>
                <p className="text-sm md:text-[15px] leading-relaxed text-foreground/80">
                  {p.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section
        id="stay-informed"
        className="relative bg-primary text-primary-foreground"
      >
        <div className="mx-auto max-w-3xl px-6 md:px-10 py-28 md:py-40 text-center">
          <div className="flex justify-center mb-10 opacity-90">
            <Emblem className="h-16 w-16" />
          </div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-gold-soft mb-8">
            Coming Soon
          </p>
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.15]">
            Something meaningful
            <br />
            <span className="italic text-gold-soft">is taking shape.</span>
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-primary-foreground/75 max-w-xl mx-auto">
            We are carefully building the Ana Rêve Initiative platform and
            ecosystem. Please come back soon.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-14 max-w-md mx-auto"
            aria-label="Be informed when we launch"
          >
            <p className="text-[11px] uppercase tracking-[0.28em] text-gold-soft mb-5">
              Be informed when we launch
            </p>
            {submitted ? (
              <p className="font-serif italic text-xl text-gold-soft ar-fade">
                Thank you. We will be in touch.
              </p>
            ) : (
              <div className="flex flex-col sm:flex-row gap-px bg-primary-foreground/15">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-5 py-4 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:bg-primary-foreground/[0.04]"
                />
                <button
                  type="submit"
                  className="bg-gold text-primary px-6 py-4 text-sm tracking-wide hover:bg-gold-soft transition-colors"
                >
                  Notify me
                </button>
              </div>
            )}
            <p className="mt-4 text-xs text-primary-foreground/50">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-background">
        <div className="mx-auto max-w-5xl px-6 md:px-10 py-16 md:py-20">
          <div className="hairline mb-16" />
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Emblem className="h-10 w-10" />
              <div>
                <p className="font-serif text-lg text-primary">
                  Ana Rêve Initiative
                </p>
                <p className="mt-1 text-sm italic text-muted-foreground">
                  Built with hope, responsibility and care.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted-foreground">
              <a
                href="mailto:hello@anareve.org"
                className="gold-underline text-foreground"
              >
                hello@anareve.org
              </a>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
                Europe · {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
