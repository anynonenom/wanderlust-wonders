import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Zellige } from "./Zellige";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <Zellige className="text-accent mb-12" />

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">
              Marhaba<span className="text-accent">.</span>
            </h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Crafting unforgettable Moroccan journeys since 1992. Local expertise, world-class care.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tours" className="text-primary-foreground/70 hover:text-accent">Tours</Link></li>
              <li><Link to="/excursions" className="text-primary-foreground/70 hover:text-accent">Excursions</Link></li>
              <li><Link to="/transfers" className="text-primary-foreground/70 hover:text-accent">Transfers</Link></li>
              <li><Link to="/custom" className="text-primary-foreground/70 hover:text-accent">Custom Activities</Link></li>
              <li><Link to="/destinations" className="text-primary-foreground/70 hover:text-accent">Destinations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-primary-foreground/70 hover:text-accent">About us</Link></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent">Sustainability</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent">Press</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-accent">Travel insurance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-accent mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex gap-2 items-start"><MapPin className="h-4 w-4 mt-0.5 text-accent" /> Avenue Mohammed V, Marrakech 40000, Morocco</li>
              <li className="flex gap-2 items-center"><Phone className="h-4 w-4 text-accent" /> +212 524 000 000</li>
              <li className="flex gap-2 items-center"><Mail className="h-4 w-4 text-accent" /> hello@marhaba.travel</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Marhaba Travel. Crafted with care in Morocco.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
            <a href="#" className="hover:text-accent">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
