import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marhaba/SectionHeading";

const HERO = "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=2000&q=80";

const REGIONS = [
  { name: "Imperial Cities", desc: "Marrakech, Fez, Meknes, Rabat — a thousand years of dynasties.", img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=900&q=80" },
  { name: "Atlantic Coast", desc: "Essaouira windswept, Casablanca art-deco, Taghazout surf.", img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80" },
  { name: "Sahara", desc: "Erg Chebbi & Erg Chigaga — the dunes you've dreamed of.", img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80" },
  { name: "Atlas Mountains", desc: "Berber villages, snow peaks, hidden waterfalls.", img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80" },
  { name: "Blue Pearl", desc: "Chefchaouen — a town painted entirely in indigo.", img: "https://images.unsplash.com/photo-1553244221-4148f4ad8be4?auto=format&fit=crop&w=900&q=80" },
];

const CITIES = [
  { name: "Marrakech", text: "The red city — Jemaa el-Fnaa, Majorelle gardens, souks of a thousand crafts.", img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=900&q=80" },
  { name: "Fez", text: "Spiritual heart — the world's oldest university and a UNESCO medina untouched by cars.", img: "https://images.unsplash.com/photo-1531219432768-9f540ce5c279?auto=format&fit=crop&w=900&q=80" },
  { name: "Chefchaouen", text: "Painted blue alleys nestled in the Rif Mountains. Pure poetry.", img: "https://images.unsplash.com/photo-1553244221-4148f4ad8be4?auto=format&fit=crop&w=900&q=80" },
  { name: "Essaouira", text: "Atlantic fortress town — fresh sardines, gnaoua music, endless wind.", img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80" },
];

const CALENDAR = [
  { month: "March", event: "Almond Blossom Festival, Tafraoute", region: "Anti-Atlas" },
  { month: "May", event: "Rose Festival, Kalaat M'Gouna", region: "Dades Valley" },
  { month: "June", event: "Gnaoua World Music Festival, Essaouira", region: "Atlantic" },
  { month: "September", event: "Imilchil Marriage Festival", region: "High Atlas" },
  { month: "October", event: "Erfoud Date Festival", region: "Sahara" },
  { month: "December", event: "International Marrakech Film Festival", region: "Marrakech" },
];

const ETIQUETTE = [
  { title: "Greetings", text: "'Salam alaikum' is met with 'Wa alaikum salam'. A hand on the heart adds warmth." },
  { title: "Dress", text: "Modesty is appreciated, especially in religious sites. Cover shoulders and knees in medinas." },
  { title: "Bargaining", text: "Expected in souks — keep it playful. Start at 30% of the asking price." },
  { title: "Tea ritual", text: "Mint tea is poured from a height. Accepting a glass is a sign of friendship." },
];

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Morocco Destinations & Cultural Guide | Marhaba" },
      { name: "description", content: "Explore Morocco's regions: Imperial Cities, Sahara, Atlas, Atlantic Coast, the Blue Pearl. Cultural calendar and travel etiquette inside." },
      { property: "og:title", content: "Morocco Destinations" },
      { property: "og:description", content: "From Marrakech to Chefchaouen — discover where to go in Morocco." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <div>
      {/* 1. HERO */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img src={HERO} alt="" className="absolute inset-0 h-full w-full object-cover kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 to-midnight/85" />
        <div className="relative h-full flex items-center justify-center px-6 text-center text-primary-foreground">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Destinations</p>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1] text-balance">A Kingdom of <em className="text-accent not-italic">infinite landscapes</em></h1>
            <p className="mt-6 text-lg text-primary-foreground/85 max-w-2xl mx-auto">Five regions, a hundred stories. Choose where Morocco speaks loudest to you.</p>
          </div>
        </div>
      </section>

      {/* 2. REGIONS */}
      <section className="px-6 py-24">
        <SectionHeading eyebrow="By region" title="Five worlds, one country" />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {REGIONS.map((r) => (
            <article key={r.name} className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-elegant">
              <img src={r.img} alt={r.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground">
                <h3 className="font-display text-3xl">{r.name}</h3>
                <p className="text-sm text-primary-foreground/80 mt-2 max-w-sm">{r.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. CITY SPOTLIGHTS */}
      <section className="bg-secondary px-6 py-24">
        <SectionHeading eyebrow="Cities" title="Where to start" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {CITIES.map(c => (
            <div key={c.name} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden"><img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover" /></div>
              <div className="p-5">
                <h3 className="font-display text-2xl flex items-center gap-2"><MapPin className="h-4 w-4 text-clay" />{c.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CULTURAL CALENDAR */}
      <section className="px-6 py-24">
        <SectionHeading eyebrow="When to come" title="Cultural calendar" description="Festivals & moussems that turn a trip into something rare." />
        <div className="mt-14 max-w-4xl mx-auto space-y-3">
          {CALENDAR.map((c, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 flex items-center gap-5 hover:border-accent transition">
              <div className="shrink-0 w-20 text-center">
                <Calendar className="h-5 w-5 mx-auto text-clay" />
                <p className="text-xs uppercase tracking-wider font-semibold mt-1">{c.month}</p>
              </div>
              <div className="flex-1 border-l border-border pl-5">
                <h4 className="font-display text-lg">{c.event}</h4>
                <p className="text-xs text-muted-foreground mt-1">{c.region}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ETIQUETTE */}
      <section className="bg-primary text-primary-foreground px-6 py-24">
        <SectionHeading eyebrow="Travel wisely" title="Traditions & etiquette" light />
        <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {ETIQUETTE.map(e => (
            <div key={e.title} className="bg-primary-foreground/5 border border-primary-foreground/15 rounded-2xl p-6">
              <h3 className="font-display text-2xl text-accent">{e.title}</h3>
              <p className="text-primary-foreground/80 mt-3">{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA */}
      <section className="bg-gradient-saffron text-accent-foreground text-center px-6 py-24">
        <SectionHeading title="Ready to plan a trip here?" description="Pick a region, pick a season — we'll do the rest." />
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 font-semibold"><Link to="/tours">Browse tours <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-8"><Link to="/custom">Design my trip</Link></Button>
        </div>
      </section>
    </div>
  );
}
