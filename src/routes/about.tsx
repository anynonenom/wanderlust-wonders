import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Heart, Leaf, Award, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/marhaba/SectionHeading";

const HERO = "https://images.unsplash.com/photo-1531219432768-9f540ce5c279?auto=format&fit=crop&w=2000&q=80";

const VALUES = [
  { Icon: Heart, t: "Hospitality first", d: "Diyafa — the Moroccan word for hospitality — runs through every detail." },
  { Icon: Leaf, t: "Slow & deep", d: "Smaller groups, longer stays, fairer wages. Stories over volume." },
  { Icon: Award, t: "Local mastery", d: "Moroccan-born guides chosen for their soul as much as their expertise." },
];

const TEAM = [
  { name: "Karim El Idrissi", role: "Founder · Marrakech", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
  { name: "Yasmine Bennani", role: "Head Concierge · Fez", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Hassan Amazigh", role: "Atlas guide · Imlil", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80" },
  { name: "Layla Tahiri", role: "Cultural curator · Fez", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80" },
];

const PRESS = ["Condé Nast Traveler", "National Geographic", "The New York Times", "Travel + Leisure", "Le Monde", "Lonely Planet"];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Moroccan-owned travel since 1992 | Marhaba" },
      { name: "description", content: "Marhaba: a Moroccan-owned travel house guiding the world through our Kingdom since 1992. Local guides, slow travel, deep impact." },
      { property: "og:title", content: "About — Marhaba" },
      { property: "og:description", content: "Moroccan-owned travel since 1992 — our story, our team, our values." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      {/* 1. HERO + STORY */}
      <section className="bg-paper px-6 pt-12 pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-coral text-center">About Marhaba</p>
          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] text-center mt-5 text-balance">
            A love letter <em className="text-coral">to Morocco,</em>
            <br />
            written by <span className="font-script text-mustard text-[1.15em]">Moroccans</span>
          </h1>
        </div>
        <div className="max-w-3xl mx-auto mt-16 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden -rotate-2 shadow-polaroid">
              <img src={HERO} alt="" className="h-full w-full object-cover kenburns" />
            </div>
            <p className="font-script text-2xl text-coral text-center mt-4">est. 1992</p>
          </div>
          <div className="lg:col-span-2 space-y-5 text-ink/80 leading-relaxed text-lg">
            <p className="font-display text-3xl text-ink leading-snug">It started with one Renault 4 and a refusal to let a country be reduced to a postcard.</p>
            <p><strong>Karim El Idrissi</strong> was 28, a Marrakchi guide tired of mass tourism that skimmed the surface of his world. He built Marhaba on a single belief: travelers who taste real Morocco — sleep in real homes, eat with real families, walk with real guides — leave changed.</p>
            <p>Three decades later, we've grown to 47 local guides across every region and welcomed over 60,000 travelers. We still answer every email personally. We still drink mint tea before every itinerary begins.</p>
          </div>
        </div>
      </section>

      {/* 2. VALUES */}
      <section className="bg-cream px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeading kicker="What we believe" title="Our Moroccan" script="roots" />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {VALUES.map(({ Icon, t, d }) => (
              <div key={t} className="bg-paper border border-border rounded-2xl p-7">
                <span className="inline-flex w-12 h-12 rounded-full bg-mustard items-center justify-center"><Icon className="h-5 w-5 text-ink" /></span>
                <h3 className="font-display text-2xl mt-5">{t}</h3>
                <p className="text-ink/65 mt-3 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TEAM + IMPACT */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeading kicker="The faces" title="Meet your" script="guides" description="The humans who make every trip extraordinary." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((t, i) => (
              <figure key={t.name} className={`group ${i % 2 === 0 ? "" : "mt-8"}`}>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-paper group-hover:shadow-coral transition">
                  <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <figcaption className="mt-4">
                  <h3 className="font-display text-xl">{t.name}</h3>
                  <p className="font-script text-lg text-coral">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6 text-center bg-ink text-cream rounded-3xl p-10 grain relative overflow-hidden">
            <div className="relative z-10"><p className="font-display text-6xl text-mustard">12</p><p className="text-xs uppercase tracking-[0.25em] mt-2 text-cream/70">Schools supported</p></div>
            <div className="relative z-10"><p className="font-display text-6xl text-mustard">47</p><p className="text-xs uppercase tracking-[0.25em] mt-2 text-cream/70">Local guides</p></div>
            <div className="relative z-10"><p className="font-display text-6xl text-mustard">100%</p><p className="text-xs uppercase tracking-[0.25em] mt-2 text-cream/70">Moroccan-owned</p></div>
          </div>
        </div>
      </section>

      {/* 4. PRESS */}
      <section className="bg-cream px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-coral">As seen in</p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-5">
            {PRESS.map((p) => <span key={p} className="font-display italic text-2xl text-ink/55">{p}</span>)}
          </div>
        </div>
      </section>

      {/* 5. CONTACT */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start bg-paper border border-border rounded-3xl p-8 md:p-12 shadow-paper">
          <div>
            <p className="font-script text-3xl text-coral">say hello</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2 leading-tight">Get in touch.</h2>
            <p className="text-ink/65 mt-4">Questions, dreams, hellos — we read every message.</p>
            <ul className="mt-7 space-y-3 text-sm">
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-coral" /> Avenue Mohammed V, Marrakech</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-coral" /> +212 524 000 000</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-coral" /> hello@marhaba.travel</li>
            </ul>
            <div className="mt-8">
              <Button asChild className="bg-ink text-cream hover:bg-coral rounded-full h-11 px-6 text-xs uppercase tracking-[0.2em] font-bold">
                <Link to="/custom">Plan a trip with us</Link>
              </Button>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Message sent! We'll reply within 24h."); (e.target as HTMLFormElement).reset(); }}
            className="space-y-4"
          >
            <Input placeholder="Your name" required className="h-12" />
            <Input type="email" placeholder="Email" required className="h-12" />
            <textarea rows={5} placeholder="Tell us anything..." required className="w-full rounded-md border border-input bg-paper p-3 text-sm" />
            <Button type="submit" className="w-full h-12 bg-coral text-cream hover:bg-ink rounded-full text-xs uppercase tracking-[0.22em] font-bold">
              Send message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
