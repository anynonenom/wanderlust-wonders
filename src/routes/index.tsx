import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Search, MapPin, ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/marhaba/SectionHeading";
import { Squiggle, HandArrow } from "@/components/marhaba/Squiggle";

const HERO = "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=2000&q=80";

const POLAROIDS = [
  { img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=700&q=80", caption: "Marrakech, 06:42", rotate: "-rotate-3" },
  { img: "https://images.unsplash.com/photo-1553244221-4148f4ad8be4?auto=format&fit=crop&w=700&q=80", caption: "Chefchaouen blues", rotate: "rotate-2" },
  { img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=700&q=80", caption: "Sahara nights", rotate: "-rotate-2" },
];

const STORIES = [
  { tag: "Desert", title: "Three nights under the Erg Chebbi sky", img: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80", read: "8 min read", author: "Yasmine B." },
  { tag: "Coast", title: "Why Essaouira is the soul of Atlantic Morocco", img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80", read: "6 min read", author: "Karim E." },
  { tag: "Cities", title: "A walking diary through Fez el-Bali", img: "https://images.unsplash.com/photo-1531219432768-9f540ce5c279?auto=format&fit=crop&w=900&q=80", read: "11 min read", author: "Layla T." },
  { tag: "Atlas", title: "Sleeping in a Berber village above the clouds", img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=900&q=80", read: "7 min read", author: "Hassan A." },
];

const VOICES = [
  { name: "Sofia · Italy", text: "Marhaba designed three weeks I'll talk about for the rest of my life. Every detail — every meal — was thoughtful." },
  { name: "James · UK", text: "From the dunes of Merzouga to a riad in Fez, this was the most well-crafted trip of my life." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marhaba — A travel house from Morocco" },
      { name: "description", content: "An editorial travel house crafting unforgettable Moroccan journeys since 1992. Tours, excursions, transfers, and bespoke trips." },
      { property: "og:title", content: "Marhaba — A travel house from Morocco" },
      { property: "og:description", content: "Stories, journeys and bespoke trips through Marrakech, Fez, the Sahara and beyond." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* 1. EDITORIAL HERO — magazine cover */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto max-w-7xl px-6 pt-10 md:pt-16 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[11px] uppercase tracking-[0.32em] font-bold text-coral">Issue 32 · Spring '26</span>
              <Squiggle className="w-12 h-2 text-mustard" />
            </div>
            <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] text-ink text-balance">
              Wander <em className="text-coral">slowly,</em>
              <br />
              feel <span className="font-script text-mustard text-[1.1em] leading-none">everything</span>
              <br />
              in Morocco.
            </h1>
            <p className="mt-7 text-lg text-ink/70 max-w-lg leading-relaxed">
              An editorial travel house guiding curious souls through medinas, dunes, riads and rituals — since 1992.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild className="bg-ink text-cream hover:bg-coral rounded-full h-12 px-7 text-xs uppercase tracking-[0.22em] font-bold">
                <Link to="/tours">Browse journeys <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Link to="/custom" className="group inline-flex items-center gap-2 text-ink font-semibold underline-wave">
                Or design your own <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </Link>
            </div>

            <div className="mt-12 hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-ink/50">
              <span>30+ years</span>
              <span className="h-px w-8 bg-ink/20" />
              <span>47 local guides</span>
              <span className="h-px w-8 bg-ink/20" />
              <span>60,000 travelers</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[460px] md:h-[560px]">
            {POLAROIDS.map((p, i) => (
              <figure
                key={i}
                className={`absolute bg-paper p-3 pb-12 shadow-polaroid ${p.rotate}`}
                style={{
                  width: "260px",
                  top: `${i * 70}px`,
                  left: `${i * 80}px`,
                  zIndex: i,
                }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img src={p.img} alt={p.caption} className="h-full w-full object-cover kenburns" />
                </div>
                <figcaption className="absolute bottom-2 left-0 right-0 text-center font-script text-xl text-ink">{p.caption}</figcaption>
              </figure>
            ))}
            <div className="absolute -bottom-2 -left-4 hidden md:flex flex-col items-start text-coral">
              <HandArrow className="w-20 h-10" />
              <span className="font-script text-xl ml-2 -mt-1">snapshots from the road</span>
            </div>
          </div>
        </div>
        <div className="border-y border-border bg-cream py-3 overflow-hidden marquee-mask">
          <div className="flex ticker whitespace-nowrap gap-12 text-sm uppercase tracking-[0.3em] text-ink/60 font-semibold">
            {Array.from({ length: 2 }).map((_, k) => (
              <span key={k} className="flex items-center gap-12">
                <span>Marrakech ✦</span><span>Fez ✦</span><span>Sahara ✦</span><span>Chefchaouen ✦</span><span>Atlas ✦</span><span>Essaouira ✦</span><span>Casablanca ✦</span><span>Tangier ✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SEARCH + DESTINATION CARDS */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading kicker="Begin here" title="Where to next," script="dreamer?" align="left" description="Pick a place that's been calling you. We'll do the rest." />
            <form
              onSubmit={(e) => { e.preventDefault(); toast.success("Searching journeys..."); }}
              className="mt-8 bg-cream p-5 rounded-2xl border border-border space-y-3"
            >
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-coral" />
                <Input className="h-11 pl-9 bg-paper" placeholder="Marrakech, Sahara, Fez..." />
              </div>
              <Input type="date" className="h-11 bg-paper" />
              <Button type="submit" className="w-full h-11 bg-ink text-cream hover:bg-coral rounded-full text-xs uppercase tracking-[0.2em] font-bold">
                <Search className="mr-2 h-4 w-4" /> Find a journey
              </Button>
            </form>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Marrakech", img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=600&q=80", trips: 24 },
              { name: "Fez", img: "https://images.unsplash.com/photo-1531219432768-9f540ce5c279?auto=format&fit=crop&w=600&q=80", trips: 18 },
              { name: "Chefchaouen", img: "https://images.unsplash.com/photo-1553244221-4148f4ad8be4?auto=format&fit=crop&w=600&q=80", trips: 12 },
              { name: "Sahara", img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=600&q=80", trips: 31 },
              { name: "Essaouira", img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=600&q=80", trips: 9 },
              { name: "Atlas", img: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=600&q=80", trips: 16 },
            ].map((d, i) => (
              <Link to="/destinations" key={d.name} className={`group relative overflow-hidden rounded-2xl block ${i % 4 === 0 ? "aspect-[4/5] row-span-2" : "aspect-square"}`}>
                <img src={d.img} alt={d.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-cream">
                  <p className="font-display text-2xl">{d.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-mustard mt-1">{d.trips} journeys</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE JOURNAL — editorial story grid */}
      <section className="bg-cream px-6 py-20 md:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            <SectionHeading kicker="The journal" title="Field notes from" script="our travelers" align="left" />
            <Link to="/destinations" className="text-xs uppercase tracking-[0.25em] font-bold text-coral hover:text-ink flex items-center gap-2">
              View all stories <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid lg:grid-cols-12 gap-8">
            <article className="lg:col-span-7 group">
              <div className="aspect-[16/11] overflow-hidden rounded-2xl bg-muted relative">
                <img src={STORIES[0].img} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 bg-coral text-cream text-[10px] uppercase tracking-[0.25em] font-bold px-3 py-1.5 rounded-full">{STORIES[0].tag}</span>
              </div>
              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.2em] text-ink/50 mb-2">{STORIES[0].read} · by {STORIES[0].author}</p>
                <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight group-hover:text-coral transition">{STORIES[0].title}</h3>
              </div>
            </article>
            <div className="lg:col-span-5 grid gap-6">
              {STORIES.slice(1).map((s) => (
                <article key={s.title} className="group flex gap-4 items-start">
                  <div className="w-32 h-32 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <img src={s.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-coral">{s.tag}</span>
                    <h4 className="font-display text-xl text-ink leading-tight mt-1.5 group-hover:text-coral transition">{s.title}</h4>
                    <p className="text-xs uppercase tracking-[0.18em] text-ink/45 mt-2">{s.read} · {s.author}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY US — bold 3 column with numbers */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeading kicker="Why Marhaba" title="Three decades. One" script="devotion." description="We're not a booking platform. We're Moroccans who built a life sharing the country we love." />
          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              { n: "01", title: "Locally owned", text: "100% Moroccan-owned. Our guides earn 4× the regional average." },
              { n: "02", title: "Slow & deep", text: "Smaller groups. Longer stays. Real homes, real meals, real people." },
              { n: "03", title: "Always on call", text: "A real human in Marrakech, one WhatsApp away — 24 hours a day." },
            ].map((c) => (
              <div key={c.n} className="border-t-2 border-ink pt-6">
                <p className="font-display text-7xl text-coral leading-none">{c.n}</p>
                <h3 className="font-display text-2xl mt-4">{c.title}</h3>
                <p className="text-ink/70 mt-3 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VOICES + NEWSLETTER */}
      <section className="bg-ink text-cream px-6 py-20 md:py-28 relative overflow-hidden grain">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-mustard">Voices from the road</p>
              <h2 className="font-display text-4xl md:text-5xl mt-3 leading-[1.05] text-balance">
                "The most well-crafted trip <em className="text-mustard">of our lives.</em>"
              </h2>
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {VOICES.map((v) => (
                  <figure key={v.name} className="border-l-2 border-mustard pl-5">
                    <div className="flex gap-0.5 mb-3">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-mustard text-mustard" />)}</div>
                    <blockquote className="text-cream/85 leading-relaxed font-display text-lg italic">"{v.text}"</blockquote>
                    <figcaption className="mt-3 text-xs uppercase tracking-[0.22em] text-mustard font-semibold">{v.name}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:pl-8 lg:border-l border-cream/15">
              <p className="font-script text-3xl text-mustard">letters from morocco</p>
              <h3 className="font-display text-3xl mt-2">A monthly note. Stories, hidden corners, soft offers.</h3>
              <form
                onSubmit={(e) => { e.preventDefault(); toast.success("Welcome aboard!"); (e.target as HTMLFormElement).reset(); }}
                className="mt-7 space-y-3"
              >
                <Input type="email" required placeholder="your@email.com" className="h-12 bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40" />
                <Button type="submit" className="w-full h-12 bg-mustard text-ink hover:bg-coral hover:text-cream rounded-full text-xs uppercase tracking-[0.22em] font-bold">
                  Send me letters
                </Button>
              </form>
              <p className="text-xs text-cream/50 mt-4">No spam. Unsubscribe anytime. By subscribing you agree to our terms.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
