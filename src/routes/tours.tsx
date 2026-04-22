import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Star, Clock, MapPin, Filter, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marhaba/SectionHeading";

const HERO = "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=80";

const TOURS = [
  { name: "Imperial Cities", days: 7, from: 1290, theme: "Cultural", rating: 4.9, img: "https://images.unsplash.com/photo-1531219432768-9f540ce5c279?auto=format&fit=crop&w=900&q=80" },
  { name: "Sahara Soul", days: 5, from: 890, theme: "Desert", rating: 4.95, img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80" },
  { name: "Atlas High Trek", days: 6, from: 1050, theme: "Mountains", rating: 4.8, img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=900&q=80" },
  { name: "Atlantic Drift", days: 8, from: 1480, theme: "Coastal", rating: 4.85, img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80" },
  { name: "Blue Pearl & Rif", days: 4, from: 720, theme: "Cultural", rating: 4.9, img: "https://images.unsplash.com/photo-1553244221-4148f4ad8be4?auto=format&fit=crop&w=900&q=80" },
  { name: "Luxury Riads", days: 7, from: 2890, theme: "Luxury", rating: 5, img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80" },
  { name: "Berber Villages", days: 5, from: 980, theme: "Cultural", rating: 4.85, img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80" },
  { name: "Grand Tour 12d", days: 12, from: 2490, theme: "Cultural", rating: 4.92, img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=900&q=80" },
];

const ITINERARY = [
  { day: "Day 1", title: "Casablanca → Rabat", text: "Arrival, white-walled coast, evening medina walk." },
  { day: "Day 2", title: "Rabat → Chefchaouen", text: "The Blue Pearl unfolds in the Rif mountains." },
  { day: "Day 3", title: "Chefchaouen → Fez", text: "Volubilis Roman ruins en route to Fez." },
  { day: "Day 4", title: "Fez el-Bali", text: "Tannery, madrasas, lunch with a local family." },
  { day: "Day 5", title: "Fez → Merzouga", text: "Cedar forests, then dunes by camelback at dusk." },
  { day: "Day 6", title: "Merzouga → Marrakech", text: "Aït Benhaddou kasbah, Atlas pass, Marrakech night." },
  { day: "Day 7", title: "Marrakech", text: "Jemaa el-Fnaa, Majorelle gardens, farewell dinner." },
];

const THEMES = ["All", "Cultural", "Desert", "Mountains", "Coastal", "Luxury"] as const;

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tours · Curated Moroccan journeys | Marhaba" },
      { name: "description", content: "Multi-day Morocco tours: Imperial Cities, Sahara, Atlas, coast and luxury riads. Designed by locals." },
      { property: "og:title", content: "Tours — Marhaba" },
      { property: "og:description", content: "Curated multi-day journeys through Morocco." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: ToursPage,
});

function ToursPage() {
  const [theme, setTheme] = useState<(typeof THEMES)[number]>("All");
  const filtered = theme === "All" ? TOURS : TOURS.filter((t) => t.theme === theme);

  return (
    <div>
      {/* 1. HERO */}
      <section className="bg-cream px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-coral">Tours · Volume I</p>
            <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] mt-5 text-balance">
              Curated <em className="text-coral">journeys</em>
              <br />through the <span className="font-script text-mustard text-[1.1em]">Kingdom</span>
            </h1>
            <p className="mt-6 text-lg text-ink/70 max-w-xl leading-relaxed">Eight multi-day stories — written with local guides, served at your pace.</p>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-[5/4] overflow-hidden rounded-3xl shadow-polaroid">
              <img src={HERO} alt="" className="h-full w-full object-cover kenburns" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FILTER + GRID */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-3"><Filter className="h-4 w-4 text-coral" /><span className="text-[11px] uppercase tracking-[0.25em] font-bold">Theme</span></div>
            <div className="flex flex-wrap gap-2">
              {THEMES.map((t) => (
                <button key={t} onClick={() => setTheme(t)} className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition ${theme === t ? "bg-ink text-cream" : "bg-cream text-ink/70 hover:bg-mustard hover:text-ink"}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((t) => (
              <article key={t.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                  <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-3 left-3 bg-paper/95 text-ink text-[10px] uppercase tracking-[0.22em] font-bold px-2.5 py-1 rounded-full">{t.theme}</span>
                  <span className="absolute top-3 right-3 bg-coral text-cream text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1"><Star className="h-3 w-3 fill-cream" /> {t.rating}</span>
                </div>
                <div className="mt-4">
                  <h3 className="font-display text-xl group-hover:text-coral transition">{t.name}</h3>
                  <div className="flex items-center justify-between mt-2 text-sm">
                    <span className="text-ink/60 flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {t.days} days</span>
                    <span><span className="text-ink/50 text-xs">from</span> €{t.from}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ITINERARY SPOTLIGHT */}
      <section className="bg-cream px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-coral">Featured itinerary</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3 leading-tight">Imperial Cities,<br /><span className="font-script text-coral text-[1.2em]">seven days</span></h2>
            <p className="mt-5 text-ink/70 leading-relaxed">From Atlantic to Sahara, four imperial capitals, two mountain passes, one perfect tagine.</p>
            <div className="mt-7 flex items-baseline gap-3"><span className="font-display text-5xl">€1,290</span><span className="text-sm text-ink/60">per traveler · all in</span></div>
            <Button asChild className="mt-7 bg-ink text-cream hover:bg-coral rounded-full h-12 px-7 text-xs uppercase tracking-[0.22em] font-bold">
              <Link to="/custom">Book this journey <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="lg:col-span-7">
            <ol className="relative border-l-2 border-mustard pl-8 space-y-8">
              {ITINERARY.map((d, i) => (
                <li key={d.day} className="relative">
                  <span className="absolute -left-[42px] flex items-center justify-center w-8 h-8 rounded-full bg-mustard text-ink font-display text-sm">{i + 1}</span>
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-coral">{d.day}</p>
                  <h3 className="font-display text-2xl mt-1">{d.title}</h3>
                  <p className="text-ink/70 mt-1.5">{d.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 4. WHAT'S INCLUDED */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl">
              <img src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1000&q=80" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-coral text-cream rounded-full w-32 h-32 flex items-center justify-center text-center font-script text-2xl leading-tight stamp">Loved<br />by 60k+</div>
          </div>
          <div>
            <SectionHeading kicker="Every tour includes" title="What's tucked into" script="your bag" align="left" />
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {["Local English-speaking guide","Boutique riad accommodations","Private 4×4 with driver","All transfers & entrances","Daily breakfast + 3 dinners","24/7 WhatsApp concierge","Carbon offset included","Free cancellation 48h"].map((f) => (
                <li key={f} className="flex items-start gap-3"><span className="mt-1 w-5 h-5 rounded-full bg-mustard flex items-center justify-center shrink-0"><Check className="h-3 w-3 text-ink" strokeWidth={3} /></span><span className="text-ink/80">{f}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. FAQ + CTA */}
      <section className="bg-ink text-cream px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <SectionHeading kicker="Good to know" title="Questions, gently" script="answered" light />
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {[
              { q: "When is the best time to travel?", a: "Spring (March–May) and autumn (Sept–Nov). The Sahara is magical Oct–April." },
              { q: "Are tours private or group?", a: "All tours are private by default — your itinerary, your pace. Small groups on request." },
              { q: "What about visas?", a: "Most EU/US/UK passports get 90 days visa-free. We send a checklist after booking." },
              { q: "Can you tailor any itinerary?", a: "Yes. Every tour is a starting point — see the Custom page." },
            ].map((f) => (
              <div key={f.q} className="border-t border-cream/15 pt-5">
                <h3 className="font-display text-xl text-mustard">{f.q}</h3>
                <p className="text-cream/75 mt-2 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="font-script text-3xl text-mustard">ready when you are</p>
            <Button asChild onClick={() => toast.success("Let's plan your trip!")} className="mt-4 bg-mustard text-ink hover:bg-coral hover:text-cream rounded-full h-12 px-8 text-xs uppercase tracking-[0.22em] font-bold">
              <Link to="/custom">Talk to a Morocco expert <MapPin className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
