import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Star, Clock, MapPin, Filter, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marhaba/SectionHeading";

const HERO = "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=2000&q=80";

const TOURS = [
  { id: 1, name: "Imperial Cities Grand Tour", days: 7, region: "Imperial", theme: "Cultural", price: 1290, rating: 4.9, img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=900&q=80" },
  { id: 2, name: "Sahara & Berber Villages", days: 5, region: "Desert", theme: "Desert", price: 890, rating: 4.8, img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80" },
  { id: 3, name: "Atlantic Coast Discovery", days: 6, region: "Coast", theme: "Coastal", price: 1090, rating: 4.7, img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80" },
  { id: 4, name: "Atlas Mountains Trek", days: 4, region: "Atlas", theme: "Cultural", price: 690, rating: 4.9, img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80" },
  { id: 5, name: "Luxury Riad Escape", days: 5, region: "Imperial", theme: "Luxury", price: 2490, rating: 5.0, img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80" },
  { id: 6, name: "Blue Pearl & North", days: 4, region: "North", theme: "Cultural", price: 790, rating: 4.8, img: "https://images.unsplash.com/photo-1553244221-4148f4ad8be4?auto=format&fit=crop&w=900&q=80" },
  { id: 7, name: "Morocco in 14 Days", days: 14, region: "All", theme: "Cultural", price: 2890, rating: 4.9, img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=900&q=80" },
  { id: 8, name: "Desert Luxury Camp", days: 3, region: "Desert", theme: "Luxury", price: 1490, rating: 5.0, img: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80" },
  { id: 9, name: "Surf & Souk Combo", days: 6, region: "Coast", theme: "Coastal", price: 990, rating: 4.7, img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=80" },
];

const ITINERARY = [
  { day: "Day 1", title: "Casablanca → Rabat", text: "Hassan II Mosque, royal mausoleum, kasbah of the Udayas." },
  { day: "Day 2", title: "Rabat → Meknes → Fez", text: "Roman ruins of Volubilis, Bab Mansour, dinner in a riad." },
  { day: "Day 3", title: "Fez medina deep-dive", text: "Tanneries, Al-Qarawiyyin, artisan ateliers with locals." },
  { day: "Day 4", title: "Fez → Ifrane → Marrakech", text: "Cedar forests of the Middle Atlas, Barbary macaques." },
  { day: "Day 5", title: "Marrakech medina", text: "Bahia Palace, Saadian tombs, Jemaa el-Fnaa at sunset." },
  { day: "Day 6", title: "Atlas day trip", text: "Berber villages, waterfalls of Ourika, traditional lunch." },
  { day: "Day 7", title: "Departure", text: "Optional hammam morning before your transfer." },
];

const FAQ = [
  { q: "When is the best time to visit Morocco?", a: "March–May and September–November offer perfect weather across all regions. Sahara visits are best October–April." },
  { q: "Do I need a visa?", a: "Most EU, UK, US, Canadian, and Australian passport holders enter visa-free for 90 days." },
  { q: "Is Morocco safe for solo travelers?", a: "Absolutely. Our guides accompany you throughout, and we've hosted thousands of solo travelers — including women — for 30+ years." },
  { q: "What's included in the price?", a: "Accommodation, transport, English-speaking guide, all listed activities, and most meals. International flights are not included." },
];

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Curated Morocco Tours — Multi-day journeys | Marhaba" },
      { name: "description", content: "8+ multi-day Morocco itineraries: Imperial Cities, Sahara, Atlas, Coast and Luxury. Designed by locals, bookable instantly." },
      { property: "og:title", content: "Morocco Tours by Marhaba" },
      { property: "og:description", content: "Curated journeys through the Kingdom — 3 to 14 days." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: ToursPage,
});

function ToursPage() {
  const [region, setRegion] = useState("All");
  const [theme, setTheme] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filtered = TOURS.filter(t => (region === "All" || t.region === region) && (theme === "All" || t.theme === theme));

  return (
    <div>
      {/* 1. HERO */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={HERO} alt="" className="absolute inset-0 h-full w-full object-cover kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/50 to-midnight/85" />
        <div className="relative h-full flex items-center justify-center px-6 text-center text-primary-foreground">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Tours</p>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1] text-balance">
              Curated journeys <em className="text-accent not-italic">through the Kingdom</em>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl mx-auto">From 3-day desert escapes to 14-day grand tours — every itinerary handcrafted by Moroccan locals.</p>
          </div>
        </div>
      </section>

      {/* 2. FILTERS */}
      <section className="sticky top-[72px] z-30 bg-background/95 backdrop-blur border-b border-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <div className="flex flex-wrap gap-2">
            {["All", "1-5 days", "6-10 days", "10+ days"].map((d) => (
              <button key={d} className="px-4 py-2 text-sm rounded-full border border-border hover:border-accent hover:bg-accent/10 transition">{d}</button>
            ))}
          </div>
          <select value={region} onChange={(e) => setRegion(e.target.value)} className="h-10 rounded-md border border-input bg-background px-3 text-sm">
            <option>All</option><option>Imperial</option><option>Desert</option><option>Coast</option><option>Atlas</option><option>North</option>
          </select>
          <select value={theme} onChange={(e) => setTheme(e.target.value)} className="h-10 rounded-md border border-input bg-background px-3 text-sm">
            <option>All</option><option>Cultural</option><option>Desert</option><option>Coastal</option><option>Luxury</option>
          </select>
          <span className="text-sm text-muted-foreground ml-auto">{filtered.length} tours</span>
        </div>
      </section>

      {/* 3. TOUR GRID */}
      <section className="px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {filtered.map((t) => (
            <article key={t.id} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">{t.theme}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start gap-3">
                  <h3 className="font-display text-2xl font-medium leading-tight">{t.name}</h3>
                  <span className="flex items-center gap-1 text-sm font-semibold whitespace-nowrap"><Star className="h-4 w-4 fill-accent text-accent" />{t.rating}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {t.days} days</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {t.region}</span>
                </div>
                <div className="flex justify-between items-end mt-5 pt-5 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground">From</p>
                    <p className="font-display text-2xl font-semibold">€{t.price}</p>
                  </div>
                  <Button onClick={() => toast.success(`${t.name} reserved!`, { description: "We'll be in touch within 2h." })} className="bg-primary hover:bg-primary/90">
                    Book <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. FEATURED ITINERARY */}
      <section className="bg-secondary px-6 py-24">
        <SectionHeading eyebrow="Featured itinerary" title="Imperial Cities — 7 days" description="A day-by-day taste of our most-loved tour." />
        <div className="mt-14 max-w-4xl mx-auto space-y-3">
          {ITINERARY.map((step, i) => (
            <div key={i} className="bg-card rounded-xl p-6 border border-border flex gap-5 hover:border-accent transition">
              <div className="shrink-0 w-14 h-14 rounded-full bg-gradient-saffron flex items-center justify-center text-accent-foreground font-display font-semibold">
                {i + 1}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-clay font-semibold">{step.day}</p>
                <h4 className="font-display text-xl mt-1">{step.title}</h4>
                <p className="text-muted-foreground text-sm mt-2">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MAP */}
      <section className="px-6 py-24 bg-primary text-primary-foreground">
        <SectionHeading eyebrow="On the map" title="Routes across Morocco" description="From the Atlantic shore to the Saharan dunes — our journeys span the Kingdom." light />
        <div className="mt-12 max-w-5xl mx-auto aspect-[16/10] rounded-2xl overflow-hidden border border-primary-foreground/20 shadow-elegant">
          <iframe
            title="Morocco map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-13.5%2C27.5%2C-1.0%2C36.0&layer=mapnik"
            className="w-full h-full grayscale"
          />
        </div>
      </section>

      {/* 6. FAQ + CTA */}
      <section className="px-6 py-24">
        <SectionHeading eyebrow="Questions" title="Things to know before you go" />
        <div className="mt-14 max-w-3xl mx-auto space-y-3">
          {FAQ.map((f, i) => (
            <button key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left bg-card rounded-xl border border-border overflow-hidden">
              <div className="flex justify-between items-center p-5">
                <h4 className="font-display text-lg pr-4">{f.q}</h4>
                <ChevronDown className={`h-5 w-5 shrink-0 text-clay transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </div>
              {openFaq === i && <p className="px-5 pb-5 text-muted-foreground text-sm">{f.a}</p>}
            </button>
          ))}
          <div className="text-center pt-10">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 font-semibold">
              <Link to="/custom">Build my own journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
