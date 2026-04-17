import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Search, Calendar, Users, MapPin, Star, ShieldCheck, Clock, HeartHandshake, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/marhaba/SectionHeading";
import { Zellige } from "@/components/marhaba/Zellige";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=2000&q=80",
];

const DESTINATIONS = [
  { name: "Marrakech", tag: "Imperial city", img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=900&q=80" },
  { name: "Fez", tag: "Spiritual heart", img: "https://images.unsplash.com/photo-1531219432768-9f540ce5c279?auto=format&fit=crop&w=900&q=80" },
  { name: "Chefchaouen", tag: "The blue pearl", img: "https://images.unsplash.com/photo-1553244221-4148f4ad8be4?auto=format&fit=crop&w=900&q=80" },
  { name: "Sahara", tag: "Endless dunes", img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=900&q=80" },
  { name: "Casablanca", tag: "Coastal modernity", img: "https://images.unsplash.com/photo-1577147443647-81856d5151af?auto=format&fit=crop&w=900&q=80" },
  { name: "Essaouira", tag: "Atlantic breeze", img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80" },
];

const EXPERIENCES = [
  { title: "Camel trek under the stars", img: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1000&q=80", desc: "Sleep beneath the Sahara sky in a luxury Berber camp." },
  { title: "Riad nights in Marrakech", img: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=80", desc: "Hidden courtyards, mint tea, lantern-lit dinners." },
  { title: "Tagine cooking ateliers", img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1000&q=80", desc: "Learn from grandmothers in the souk's secret kitchens." },
  { title: "Surf in Taghazout", img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1000&q=80", desc: "Atlantic swells, golden cliffs, fishermen at dawn." },
];

const STORIES = [
  { name: "Sofia · Italy", text: "Three weeks in Morocco changed me. Marhaba's guides made every village feel like home.", rating: 5 },
  { name: "James · UK", text: "From the Sahara to Chefchaouen — flawless logistics, unforgettable people.", rating: 5 },
  { name: "Yuki · Japan", text: "Their custom itinerary captured exactly what I dreamed of. Sublime.", rating: 5 },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marhaba — Where every alley tells a thousand years | Morocco travel & booking" },
      { name: "description", content: "Discover Morocco with Marhaba. Tours, excursions, transfers and bespoke journeys crafted by local experts since 1992." },
      { property: "og:title", content: "Marhaba — Morocco travel & booking" },
      { property: "og:description", content: "Cinematic journeys through Marrakech, Fez, the Sahara, Chefchaouen and beyond." },
      { property: "og:image", content: HERO_IMAGES[0] },
      { name: "twitter:image", content: HERO_IMAGES[0] },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [heroIdx, setHeroIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setHeroIdx((i) => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      {/* 1. HERO */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ${i === heroIdx ? "opacity-100" : "opacity-0"}`}
          >
            <img src={src} alt="Morocco" className="h-full w-full object-cover kenburns" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/30 to-midnight/80" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-primary-foreground">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6 animate-[fade-up_1s_ease-out]">Marhaba — Welcome</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium max-w-5xl leading-[0.95] text-balance drop-shadow-lg">
            Where every alley tells <em className="text-accent not-italic">a thousand years</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-primary-foreground/85 text-balance">
            Curated journeys through Morocco's medinas, dunes and riads — designed by locals, lived by you.
          </p>
          <Zellige className="mt-8 text-accent" />
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 px-8">
              <Link to="/tours">Explore tours <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8">
              <Link to="/custom">Design my trip</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. QUICK BOOKING BAR */}
      <section className="relative -mt-16 z-20 px-6">
        <form
          onSubmit={(e) => { e.preventDefault(); toast.success("Searching journeys...", { description: "Your perfect Morocco awaits." }); }}
          className="mx-auto max-w-6xl bg-card shadow-elegant rounded-2xl p-6 md:p-8 border border-border"
        >
          <div className="grid gap-4 md:grid-cols-5">
            <div className="md:col-span-1">
              <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Type</label>
              <select className="mt-2 w-full h-11 rounded-md border border-input bg-background px-3 text-sm">
                <option>Tours</option><option>Excursions</option><option>Transfers</option><option>Custom</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Destination</label>
              <div className="relative mt-2">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input className="h-11 pl-9" placeholder="Marrakech, Sahara..." />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Date</label>
              <div className="relative mt-2">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="date" className="h-11 pl-9" />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Travelers</label>
              <div className="relative mt-2">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input type="number" min={1} defaultValue={2} className="h-11 pl-9" />
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full mt-5 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <Search className="mr-2 h-4 w-4" /> Search journeys
          </Button>
        </form>
      </section>

      {/* 3. FEATURED DESTINATIONS */}
      <section className="px-6 py-24 md:py-32">
        <SectionHeading eyebrow="Destinations" title="Six cities, one Kingdom" description="From snow-capped Atlas peaks to Atlantic surf — choose where your story begins." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {DESTINATIONS.map((d) => (
            <Link key={d.name} to="/destinations" className="group relative h-80 overflow-hidden rounded-2xl block shadow-elegant">
              <img src={d.img} alt={d.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-primary-foreground">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">{d.tag}</p>
                <h3 className="font-display text-3xl font-medium mt-1">{d.name}</h3>
                <p className="text-sm flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Discover <ArrowRight className="h-3 w-3" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. SIGNATURE EXPERIENCES */}
      <section className="bg-secondary px-6 py-24 md:py-32">
        <SectionHeading eyebrow="Experiences" title="Signature moments" description="Hand-picked rituals that turn a trip into a memory you'll tell forever." />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {EXPERIENCES.map((e, i) => (
            <article key={e.title} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-elegant transition-all duration-500 hover:-translate-y-1" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={e.img} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-medium">{e.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{e.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. WHY US */}
      <section className="px-6 py-24 md:py-32">
        <SectionHeading eyebrow="Why Marhaba" title="Three decades. One devotion." description="We're not a booking platform. We're Moroccans who fell in love with our country and built a life sharing it." />
        <div className="mt-14 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            { Icon: ShieldCheck, title: "30+ years of expertise", text: "Founded in 1992 — the first Moroccan agency to certify all guides locally." },
            { Icon: Clock, title: "Instant confirmed booking", text: "Real availability, transparent pricing, free cancellation up to 48h." },
            { Icon: HeartHandshake, title: "24/7 local support", text: "A real human in Marrakech is one WhatsApp away — every hour, every day." },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="text-center px-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-gradient-saffron flex items-center justify-center shadow-glow">
                <Icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-medium mt-5">{title}</h3>
              <p className="text-muted-foreground mt-3">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. STORIES + NEWSLETTER */}
      <section className="bg-primary text-primary-foreground px-6 py-24 md:py-32">
        <SectionHeading eyebrow="Stories" title="Letters from our travelers" light />
        <div className="mt-14 grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {STORIES.map((s) => (
            <figure key={s.name} className="bg-primary-foreground/5 backdrop-blur rounded-2xl p-6 border border-primary-foreground/10">
              <Quote className="h-6 w-6 text-accent" />
              <blockquote className="mt-4 text-primary-foreground/90 italic font-display text-lg leading-relaxed">"{s.text}"</blockquote>
              <figcaption className="mt-5 flex items-center justify-between">
                <span className="text-sm font-semibold">{s.name}</span>
                <span className="flex gap-0.5">{Array.from({ length: s.rating }).map((_, i) => <Star key={i} className="h-3 w-3 fill-accent text-accent" />)}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 max-w-2xl mx-auto text-center">
          <h3 className="font-display text-3xl md:text-4xl">Letters from Morocco</h3>
          <p className="mt-3 text-primary-foreground/70">Once a month. Stories, hidden gems, and travel offers — never spam.</p>
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Welcome! Our first letter arrives soon."); (e.target as HTMLFormElement).reset(); }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <Input type="email" required placeholder="your@email.com" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 h-12" />
            <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 font-semibold">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
