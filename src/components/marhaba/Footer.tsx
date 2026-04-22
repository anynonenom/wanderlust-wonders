import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Squiggle } from "./Squiggle";

const TAGS = ["Marrakech", "Sahara", "Chefchaouen", "Atlas", "Riad", "Tagine", "Souk", "Medina", "Dunes", "Surf", "Hammam", "Berber"];

export function Footer() {
  return (
    <footer className="bg-cream border-t border-border">
      {/* Marquee tag strip */}
      <div className="overflow-hidden border-b border-border py-5 marquee-mask">
        <div className="flex ticker whitespace-nowrap gap-10 font-display text-3xl text-ink/40">
          {[...TAGS, ...TAGS].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="italic">{t}</span>
              <span className="text-coral">✶</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-4xl text-ink">Marhaba</span>
              <span className="font-script text-3xl text-coral -ml-1">.travel</span>
            </div>
            <p className="mt-5 text-ink/70 max-w-sm leading-relaxed">
              An editorial travel house crafting <em className="font-script text-coral text-xl not-italic">unforgettable</em> Moroccan stories since 1992.
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="p-2.5 rounded-full bg-paper border border-border text-ink hover:bg-ink hover:text-cream transition">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-coral mb-5">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/tours" className="text-ink/75 hover:text-coral">Tours</Link></li>
              <li><Link to="/excursions" className="text-ink/75 hover:text-coral">Excursions</Link></li>
              <li><Link to="/transfers" className="text-ink/75 hover:text-coral">Transfers</Link></li>
              <li><Link to="/custom" className="text-ink/75 hover:text-coral">Custom</Link></li>
              <li><Link to="/destinations" className="text-ink/75 hover:text-coral">Destinations</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-coral mb-5">House</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-ink/75 hover:text-coral">About</Link></li>
              <li><a href="#" className="text-ink/75 hover:text-coral">Journal</a></li>
              <li><a href="#" className="text-ink/75 hover:text-coral">Press</a></li>
              <li><a href="#" className="text-ink/75 hover:text-coral">Careers</a></li>
              <li><a href="#" className="text-ink/75 hover:text-coral">Privacy</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] font-bold text-coral mb-5">Studio</h4>
            <ul className="space-y-3 text-sm text-ink/75">
              <li className="flex gap-2 items-start"><MapPin className="h-4 w-4 mt-0.5 text-teal" /> Avenue Mohammed V, Marrakech 40000</li>
              <li className="flex gap-2 items-center"><Mail className="h-4 w-4 text-teal" /> hello@marhaba.travel</li>
            </ul>
            <a href="#" className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-ink hover:text-coral group">
              Open in Maps <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink/55">
          <Squiggle className="w-16 h-2 text-mustard" />
          <p>© {new Date().getFullYear()} Marhaba. Made with mint tea in Morocco.</p>
          <p className="font-script text-base text-coral">Bslama, traveler ✿</p>
        </div>
      </div>
    </footer>
  );
}
