import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/tours", label: "Tours" },
  { to: "/excursions", label: "Excursions" },
  { to: "/transfers", label: "Transfers" },
  { to: "/custom", label: "Custom Activities" },
  { to: "/destinations", label: "Destinations" },
  { to: "/about", label: "About" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span
            className={`font-display text-2xl font-bold tracking-tight transition-colors ${
              scrolled ? "text-primary" : "text-primary-foreground drop-shadow"
            }`}
          >
            Marhaba<span className="text-accent">.</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-primary hover:bg-accent/20"
                  : "text-primary-foreground/90 hover:text-accent drop-shadow"
              }`}
              activeProps={{
                className: "text-accent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            className={`flex items-center gap-1 text-sm transition-colors ${
              scrolled ? "text-foreground/70 hover:text-primary" : "text-primary-foreground/90"
            }`}
            aria-label="Language"
          >
            <Globe className="h-4 w-4" /> EN
          </button>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link to="/tours">Book now</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground hover:text-accent border-b border-border/50"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/tours" onClick={() => setOpen(false)}>Book now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
