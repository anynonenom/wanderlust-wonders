import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Star, Clock, Users, ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marhaba/SectionHeading";

const HERO = "https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&w=2000&q=80";

const CATEGORIES = [
  { name: "Desert", img: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=600&q=80", count: 12 },
  { name: "Mountains", img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80", count: 9 },
  { name: "Coast", img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=600&q=80", count: 7 },
  { name: "Medina", img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=600&q=80", count: 14 },
  { name: "Culinary", img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80", count: 8 },
  { name: "Wellness", img: "https://images.unsplash.com/photo-1545578630-d6e1f6f1bd2c?auto=format&fit=crop&w=600&q=80", count: 5 },
];

const EXCURSIONS = [
  { id: 1, title: "Ourika Valley & Berber Villages", duration: "Full day", price: 65, rating: 4.8, img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80" },
  { id: 2, title: "Agafay Desert Sunset & Dinner", duration: "Half day", price: 95, rating: 4.9, img: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80" },
  { id: 3, title: "Essaouira Coastal Escape", duration: "Full day", price: 75, rating: 4.7, img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80" },
  { id: 4, title: "Marrakech Medina Walking Tour", duration: "4 hours", price: 45, rating: 4.9, img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=900&q=80" },
  { id: 5, title: "Tagine Cooking Class", duration: "3 hours", price: 55, rating: 5.0, img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=900&q=80" },
  { id: 6, title: "Hammam & Argan Oil Ritual", duration: "2 hours", price: 70, rating: 4.8, img: "https://images.unsplash.com/photo-1545578630-d6e1f6f1bd2c?auto=format&fit=crop&w=900&q=80" },
  { id: 7, title: "Imlil Atlas Trek", duration: "Full day", price: 85, rating: 4.9, img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=900&q=80" },
  { id: 8, title: "Aït Benhaddou & Ouarzazate", duration: "Full day", price: 95, rating: 4.8, img: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=900&q=80" },
];

const REVIEWS = [
  { name: "Marie · France", text: "The Agafay sunset dinner was magic. Beautifully organized.", rating: 5 },
  { name: "Tom · Australia", text: "Cooking class made me a tagine convert. Best 3 hours of our trip.", rating: 5 },
  { name: "Lina · Germany", text: "Our guide in Imlil knew every flower, every Berber legend.", rating: 5 },
  { name: "Carlos · Spain", text: "Essaouira day trip was a dream. Highly recommend Marhaba.", rating: 5 },
];

export const Route = createFileRoute("/excursions")({
  head: () => ({
    meta: [
      { title: "Day Excursions in Morocco — Marhaba" },
      { name: "description", content: "Day-trip adventures across Morocco: desert sunsets, Atlas treks, medina walks, cooking classes and hammam rituals." },
      { property: "og:title", content: "Morocco Day Excursions" },
      { property: "og:description", content: "Day adventures, unforgettable memories." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: ExcursionsPage,
});

function ExcursionsPage() {
  return (
    <div>
      {/* 1. HERO */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <img src={HERO} alt="" className="absolute inset-0 h-full w-full object-cover kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/50 to-midnight/80" />
        <div className="relative h-full flex items-center justify-center px-6 text-center text-primary-foreground">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Excursions</p>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1] text-balance">Day adventures, <em className="text-accent not-italic">unforgettable memories</em></h1>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES */}
      <section className="px-6 py-24">
        <SectionHeading eyebrow="By theme" title="Choose your kind of day" />
        <div className="mt-14 grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-7xl mx-auto">
          {CATEGORIES.map((c) => (
            <button key={c.name} className="group relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground text-left">
                <h3 className="font-display text-xl font-medium">{c.name}</h3>
                <p className="text-xs text-accent">{c.count} excursions</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. CARDS */}
      <section className="bg-secondary px-6 py-24">
        <SectionHeading eyebrow="Browse all" title="Day excursions" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {EXCURSIONS.map((e) => (
            <article key={e.id} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-elegant transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={e.img} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-medium leading-snug">{e.title}</h3>
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {e.duration}</span>
                  <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-accent text-accent" /> {e.rating}</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-display text-xl font-semibold">€{e.price}</span>
                  <Button size="sm" onClick={() => toast.success(`${e.title} booked!`)} className="bg-accent text-accent-foreground hover:bg-accent/90 h-8">Quick book</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. MOST LOVED */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[5/4] rounded-2xl overflow-hidden shadow-elegant">
            <img src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80" alt="" className="absolute inset-0 h-full w-full object-cover kenburns" />
            <span className="absolute top-5 left-5 bg-accent text-accent-foreground text-xs font-bold uppercase px-3 py-1.5 rounded-full flex items-center gap-1"><Sparkles className="h-3 w-3" /> Most loved</span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-clay">This month</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Agafay Desert Sunset & Berber Dinner</h2>
            <p className="mt-5 text-muted-foreground text-lg">A 30-minute drive from Marrakech delivers you to a stone desert of impossible silence. Camels at golden hour, a Berber tent illuminated by lanterns, drums under a sky thick with stars.</p>
            <ul className="mt-6 space-y-3">
              {["Camel ride at sunset", "Three-course Moroccan feast", "Live Gnaoua music", "Hotel pickup included"].map(p => (
                <li key={p} className="flex gap-3 items-center"><Check className="h-5 w-5 text-accent" /> {p}</li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-6">
              <div><p className="text-xs text-muted-foreground">From</p><p className="font-display text-3xl font-semibold">€95</p></div>
              <Button size="lg" onClick={() => toast.success("Agafay sunset reserved!")} className="bg-primary hover:bg-primary/90">Book this experience <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GROUP VS PRIVATE */}
      <section className="bg-primary text-primary-foreground px-6 py-24">
        <SectionHeading eyebrow="How you travel" title="Group or private" description="Both come with a local English-speaking guide and full insurance." light />
        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Small group", price: "from €45", icon: Users, perks: ["Max 8 travelers", "Fixed departure days", "Meet fellow explorers", "Best value"] },
            { title: "Private", price: "from €120", icon: Star, perks: ["Just you & yours", "Departure any day", "Custom pace & stops", "VIP experience"] },
          ].map(({ title, price, icon: Icon, perks }) => (
            <div key={title} className="bg-primary-foreground/5 border border-primary-foreground/15 rounded-2xl p-8 backdrop-blur">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center"><Icon className="h-5 w-5 text-accent-foreground" /></div>
                <h3 className="font-display text-3xl">{title}</h3>
              </div>
              <p className="text-accent font-semibold">{price}</p>
              <ul className="mt-6 space-y-3">
                {perks.map(p => <li key={p} className="flex gap-2 items-center text-primary-foreground/90"><Check className="h-4 w-4 text-accent" /> {p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 6. REVIEWS + CTA */}
      <section className="px-6 py-24">
        <SectionHeading eyebrow="Loved by travelers" title="From our guests" />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {REVIEWS.map(r => (
            <div key={r.name} className="bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-0.5 mb-3">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />)}</div>
              <p className="text-sm leading-relaxed">"{r.text}"</p>
              <p className="mt-4 text-xs font-semibold text-clay">{r.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 font-semibold">
            <Link to="/custom">Plan a private excursion</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
