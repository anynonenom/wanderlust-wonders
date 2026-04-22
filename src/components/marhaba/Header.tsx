import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/tours", label: "Tours" },
  { to: "/excursions", label: "Excursions" },
  { to: "/transfers", label: "Transfers" },
  { to: "/custom", label: "Custom" },
  { to: "/destinations", label: "Destinations" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top thin announce strip */}
      <div className="hidden md:flex bg-ink text-cream text-[11px] tracking-[0.25em] uppercase">
        <div className="mx-auto max-w-7xl w-full px-6 py-1.5 flex items-center justify-between">
          <span>Atlas to Atlantic — handcrafted journeys</span>
          <span className="flex items-center gap-4">
            <a href="mailto:hello@marhaba.travel" className="hover:text-mustard">hello@marhaba.travel</a>
            <span className="opacity-50">·</span>
            <a href="tel:+212524000000" className="hover:text-mustard">+212 524 000 000</a>
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-paper/95 backdrop-blur-md border-b border-border shadow-paper" : "bg-paper border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-baseline gap-1.5">
            <span className="font-display text-3xl tracking-tight text-ink">Marhaba</span>
            <span className="font-script text-2xl text-coral -ml-1">.travel</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-[13px] uppercase tracking-[0.2em] font-semibold text-ink/75 hover:text-coral transition-colors relative group"
                activeProps={{ className: "text-coral" }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-coral transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button className="text-ink/70 hover:text-coral" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-1 text-xs text-ink/70 hover:text-coral" aria-label="Language">
              <Globe className="h-4 w-4" /> EN
            </button>
            <Button asChild className="bg-ink text-cream hover:bg-coral rounded-full px-5 text-xs uppercase tracking-[0.2em] font-bold h-10">
              <Link to="/custom">Plan a trip</Link>
            </Button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-ink"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-paper border-t border-border">
            <nav className="flex flex-col px-6 py-4 gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-base uppercase tracking-[0.2em] font-semibold text-ink hover:text-coral border-b border-border/60"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4 bg-ink text-cream hover:bg-coral rounded-full">
                <Link to="/custom" onClick={() => setOpen(false)}>Plan a trip</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
