import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Star, Clock, Users, ArrowUpRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/marhaba/SectionHeading";

const HERO = "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=2000&q=80";

const CATEGORIES = [
  { name: "Desert", count: 14, img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=700&q=80", color: "bg-coral" },
  { name: "Mountains", count: 9, img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=700&q=80", color: "bg-teal" },
  { name: "Coast", count: 11, img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=700&q=80", color: "bg-mustard" },
  { name: "Medina", count: 18, img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=700&q=80", color: "bg-rose" },
  { name: "Culinary", count: 8, img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=700&q=80", color: "bg-coral" },
  { name: "Wellness", count: 6, img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80", color: "bg-teal" },
];

const EXCURSIONS = [
  { name: "Agafay desert dinner", price: 79, hrs: 6, group: "8 max", img: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80", tag: "Desert" },
  { name: "Ourika Valley & waterfalls", price: 55, hrs: 8, group: "10 max", img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=900&q=80", tag: "Mountains" },
  { name: "Essaouira day escape", price: 89, hrs: 10, group: "12 max", img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80", tag: "Coast" },
  { name: "Tagine cooking atelier", price: 69, hrs: 4, group: "6 max", img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=900&q=80", tag: "Culinary" },
  { name: "Hammam & rose ritual", price: 110, hrs: 3, group: "Private", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80", tag: "Wellness" },
  { name: "Marrakech medina by night", price: 39, hrs: 3, group: "8 max", img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=900&q=80", tag: "Medina" },
];

const REVIEWS = [
  { name: "Alex · USA", text: "The Agafay dinner was pure magic — silence, stars, mint tea. Best night of the trip.", trip: "Agafay desert dinner" },
  { name: "Marie · France", text: "Fatima taught us tagine like a grandmother. We still cook it every Sunday.", trip: "Tagine atelier" },
  { name: "Tom · Australia", text: "Loved every minute in Ourika. Our guide knew every flower by name.", trip: "Ourika Valley" },
];

export const Route = createFileRoute("/excursions")({
  head: () => ({
    meta: [
      { title: "Excursions · Day adventures across Morocco | Marhaba" },
      { name: "description", content: "Half-day and full-day Moroccan adventures: desert dinners, mountain treks, coastal escapes, cooking ateliers." },
      { property: "og:title", content: "Excursions — Marhaba" },
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
      <section className="bg-paper px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-coral">Excursions</p>
            <h1 className="font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] mt-5 text-balance">
              One day, one
              <br /><span className="font-script text-mustard text-[1.15em]">memory</span>
              <br />for keeps.
            </h1>
            <p className="mt-6 text-lg text-ink/70 max-w-md leading-relaxed">Short adventures that feel like full chapters — desert, mountain, coast and souk.</p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-muted -rotate-1"><img src={HERO} alt="" className="h-full w-full object-cover" /></div>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-muted rotate-2 mt-10"><img src="https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=600&q=80" alt="" className="h-full w-full object-cover" /></div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES */}
      <section className="px-6 py-20 bg-cream">
        <div className="max-w-7xl mx-auto">
          <SectionHeading kicker="By mood" title="Pick your kind of" script="adventure" />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5">
            {CATEGORIES.map((c) => (
              <Link to="/excursions" key={c.name} className="group relative aspect-[5/4] rounded-2xl overflow-hidden">
                <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className={`absolute inset-0 ${c.color} opacity-40 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 text-cream">
                  <h3 className="font-display text-3xl">{c.name}</h3>
                  <p className="text-xs uppercase tracking-[0.22em] mt-1 text-mustard font-bold">{c.count} experiences →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CARDS */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
            <SectionHeading kicker="Most loved" title="This month's" script="favorites" align="left" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-coral flex items-center gap-2"><Heart className="h-4 w-4 fill-coral" /> Editor's picks</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXCURSIONS.map((e) => (
              <article key={e.name} className="group bg-paper rounded-2xl overflow-hidden border border-border shadow-paper hover:shadow-coral transition-all duration-500 hover:-translate-y-1">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <img src={e.img} alt={e.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-3 left-3 bg-paper/95 text-ink text-[10px] uppercase tracking-[0.22em] font-bold px-2.5 py-1 rounded-full">{e.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl group-hover:text-coral transition">{e.name}</h3>
                  <div className="flex items-center gap-4 text-xs text-ink/55 mt-3">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {e.hrs}h</span>
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {e.group}</span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3 fill-mustard text-mustard" /> 4.9</span>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <span><span className="text-xs text-ink/50">from</span> <span className="font-display text-2xl">€{e.price}</span></span>
                    <Button onClick={() => toast.success(`${e.name} reserved!`)} size="sm" className="bg-ink text-cream hover:bg-coral rounded-full text-[10px] uppercase tracking-[0.2em] font-bold h-9 px-4">Book</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRIVATE vs GROUP */}
      <section className="bg-ink text-cream px-6 py-20 md:py-28 grain relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeading kicker="Two ways to go" title="Private or in" script="good company" description="Both wonderful — pick what matches your trip." light />
          <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { name: "In a small group", price: "from €39", color: "bg-mustard text-ink", perks: ["Up to 12 travelers", "Set departure dates", "Meet curious souls", "Best value"] },
              { name: "Private experience", price: "from €110", color: "bg-coral text-cream", perks: ["Just you & yours", "Any date, any pace", "Personal guide", "Bespoke route"] },
            ].map((p) => (
              <div key={p.name} className="bg-cream/5 backdrop-blur border border-cream/15 rounded-3xl p-8">
                <span className={`inline-block ${p.color} text-[10px] uppercase tracking-[0.25em] font-bold px-3 py-1.5 rounded-full`}>{p.name}</span>
                <p className="font-display text-5xl mt-6">{p.price}</p>
                <ul className="mt-6 space-y-2.5">
                  {p.perks.map((perk) => <li key={perk} className="flex items-center gap-3 text-cream/85"><span className="w-1.5 h-1.5 rounded-full bg-mustard" /> {perk}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REVIEWS + CTA */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeading kicker="Reviews wall" title="Words from the" script="people" />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <figure key={r.name} className={`bg-cream p-6 rounded-2xl border border-border ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}>
                <div className="flex gap-0.5 mb-3">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-coral text-coral" />)}</div>
                <blockquote className="font-display text-lg italic leading-snug">"{r.text}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <p className="font-semibold">{r.name}</p>
                  <p className="text-xs text-ink/55 uppercase tracking-[0.2em] mt-0.5">{r.trip}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button asChild className="bg-ink text-cream hover:bg-coral rounded-full h-12 px-8 text-xs uppercase tracking-[0.22em] font-bold">
              <Link to="/custom">Plan a custom day <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
