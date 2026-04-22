import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marhaba/SectionHeading";

const HERO = "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=2000&q=80";

const REGIONS = [
  { name: "Imperial Cities", desc: "Marrakech, Fez, Meknes, Rabat", img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=900&q=80", color: "text-coral" },
  { name: "Atlantic Coast", desc: "Essaouira, Taghazout, Asilah", img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80", color: "text-teal" },
  { name: "Sahara", desc: "Merzouga, Zagora, Erg Chebbi", img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80", color: "text-mustard" },
  { name: "Atlas Mountains", desc: "Imlil, Toubkal, Ourika", img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=900&q=80", color: "text-coral" },
  { name: "Blue Pearl & Rif", desc: "Chefchaouen, Tetouan, Tangier", img: "https://images.unsplash.com/photo-1553244221-4148f4ad8be4?auto=format&fit=crop&w=900&q=80", color: "text-teal" },
];

const CITIES = [
  { name: "Marrakech", quote: "The red city, eternal soul.", img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=900&q=80", best: "Mar–May, Sept–Nov" },
  { name: "Fez", quote: "A medieval medina, alive.", img: "https://images.unsplash.com/photo-1531219432768-9f540ce5c279?auto=format&fit=crop&w=900&q=80", best: "Apr–Jun, Sept–Oct" },
  { name: "Chefchaouen", quote: "Painted in 1,000 blues.", img: "https://images.unsplash.com/photo-1553244221-4148f4ad8be4?auto=format&fit=crop&w=900&q=80", best: "Year round" },
  { name: "Essaouira", quote: "Atlantic wind, white walls.", img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80", best: "May–Sept" },
];

const FESTIVALS = [
  { month: "May", name: "Festival of Roses", place: "Kelaat M'Gouna", color: "bg-rose" },
  { month: "June", name: "Sacred Music Festival", place: "Fez", color: "bg-mustard" },
  { month: "July", name: "Gnaoua Music Festival", place: "Essaouira", color: "bg-teal" },
  { month: "Sept", name: "Imilchil Marriage Moussem", place: "Atlas", color: "bg-coral" },
];

const ETIQUETTE = [
  { t: "Greet warmly", d: "'Salam alaikum' goes a long way. Right hand for handshakes." },
  { t: "Dress soft", d: "Cover shoulders & knees in medinas, mosques and rural villages." },
  { t: "Tea is yes", d: "Refusing mint tea three times is polite. Then accept happily." },
  { t: "Photos with care", d: "Always ask before photographing people, especially women." },
  { t: "Tip kindly", d: "10–15% in restaurants, 10 dh per bag for porters." },
  { t: "Ramadan respect", d: "Avoid eating in public during fasting hours." },
];

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations · The Morocco map | Marhaba" },
      { name: "description", content: "Five regions, four city spotlights, festivals and travel etiquette — your map of Morocco from Marhaba." },
      { property: "og:title", content: "Destinations — Marhaba" },
      { property: "og:description", content: "From Atlas to Atlantic, Sahara to Sea." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <div>
      {/* 1. HERO + map */}
      <section className="relative bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-coral">Destinations</p>
            <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] mt-5 text-balance">
              From Atlas to <em className="text-coral">Atlantic,</em>
              <br />Sahara to <span className="font-script text-mustard text-[1.15em]">Sea</span>
            </h1>
            <p className="mt-6 text-lg text-ink/70 max-w-lg leading-relaxed">Five regions, twelve cities, one Kingdom. Where will you wander?</p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-paper p-6 shadow-polaroid -rotate-2">
              <svg viewBox="0 0 400 400" className="w-full h-full text-ink" aria-label="Morocco map">
                <defs><pattern id="dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="0.8" fill="currentColor" opacity="0.18" /></pattern></defs>
                <rect width="400" height="400" fill="url(#dots)" />
                <path d="M70 180 Q 100 100, 180 95 L 250 70 Q 320 90, 340 160 L 320 240 Q 290 320, 220 340 L 130 320 Q 60 280, 70 180 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <g fontSize="14" className="font-script">
                  <circle cx="180" cy="160" r="5" fill="oklch(0.72 0.15 30)" /><text x="190" y="155" fill="currentColor">Marrakech</text>
                  <circle cx="240" cy="120" r="5" fill="oklch(0.62 0.10 195)" /><text x="250" y="115" fill="currentColor">Fez</text>
                  <circle cx="220" cy="80" r="5" fill="oklch(0.83 0.14 88)" /><text x="230" y="75" fill="currentColor">Chefchaouen</text>
                  <circle cx="100" cy="170" r="5" fill="oklch(0.72 0.15 30)" /><text x="20" y="165" fill="currentColor">Essaouira</text>
                  <circle cx="290" cy="240" r="5" fill="oklch(0.83 0.14 88)" /><text x="300" y="235" fill="currentColor">Sahara</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REGIONS */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeading kicker="The five regions" title="Pick a corner of the" script="Kingdom" />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONS.map((r, i) => (
              <Link to="/destinations" key={r.name} className={`group relative overflow-hidden rounded-2xl ${i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-[16/12]" : "aspect-[5/4]"}`}>
                <img src={r.img} alt={r.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-cream">
                  <p className={`text-[10px] uppercase tracking-[0.25em] font-bold ${r.color}`}>Region</p>
                  <h3 className="font-display text-3xl md:text-4xl mt-1">{r.name}</h3>
                  <p className="text-cream/80 mt-1">{r.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CITIES */}
      <section className="bg-cream px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeading kicker="Spotlight" title="Four cities, four" script="characters" align="left" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CITIES.map((c, i) => (
              <article key={c.name} className={`group bg-paper rounded-2xl overflow-hidden border border-border shadow-paper hover:shadow-coral transition ${i % 2 ? "lg:mt-12" : ""}`}>
                <div className="aspect-[4/5] overflow-hidden"><img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                <div className="p-5">
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <p className="font-script text-lg text-coral mt-1 leading-tight">{c.quote}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/55 mt-3 flex items-center gap-1.5"><Calendar className="h-3 w-3" /> {c.best}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FESTIVALS + ETIQUETTE */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeading kicker="The calendar" title="Moments worth a" script="detour" align="left" description="Time your trip with festivals & moussems that turn cities into stories." />
            <ul className="mt-8 space-y-3">
              {FESTIVALS.map((f) => (
                <li key={f.name} className="flex items-center gap-4 bg-cream p-4 rounded-2xl border border-border">
                  <span className={`${f.color} text-ink w-14 h-14 rounded-full flex flex-col items-center justify-center font-display text-sm leading-none`}><span className="text-xs uppercase tracking-wider opacity-80">{f.month}</span></span>
                  <div><p className="font-display text-lg">{f.name}</p><p className="text-xs uppercase tracking-[0.2em] text-ink/55 mt-0.5">{f.place}</p></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <SectionHeading kicker="Etiquette" title="Travel like a" script="local" align="left" />
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              {ETIQUETTE.map((e, i) => (
                <div key={e.t} className="flex gap-4">
                  <span className="font-display text-3xl text-mustard leading-none">{String(i + 1).padStart(2, "0")}</span>
                  <div><h4 className="font-display text-lg">{e.t}</h4><p className="text-sm text-ink/65 mt-1 leading-relaxed">{e.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-ink text-cream px-6 py-20 md:py-28 grain relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-script text-3xl text-mustard">found your place?</p>
          <h2 className="font-display text-4xl md:text-6xl mt-3 leading-[1.05] text-balance">Let's draw your <em className="text-coral">map</em> together.</h2>
          <p className="mt-5 text-cream/75 max-w-xl mx-auto">Pick a region, pick a season — we'll handle the rest. Free brief, 48-hour reply.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild className="bg-mustard text-ink hover:bg-coral hover:text-cream rounded-full h-12 px-7 text-xs uppercase tracking-[0.22em] font-bold"><Link to="/custom"><MapPin className="mr-2 h-4 w-4" /> Plan a trip here</Link></Button>
            <Link to="/tours" className="inline-flex items-center gap-2 text-cream hover:text-mustard text-sm font-semibold">Or browse curated tours <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
