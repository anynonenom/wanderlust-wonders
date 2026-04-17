import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Heart, Leaf, Award, Users, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/marhaba/SectionHeading";

const HERO = "https://images.unsplash.com/photo-1531219432768-9f540ce5c279?auto=format&fit=crop&w=2000&q=80";

const VALUES = [
  { Icon: Heart, title: "Hospitality first", text: "Diyafa — the Moroccan word for hospitality — runs through every detail we craft." },
  { Icon: Leaf, title: "Slow travel, deep impact", text: "Smaller groups, longer stays, fairer wages. We measure success in stories, not volume." },
  { Icon: Award, title: "Local mastery", text: "All our guides are Morocco-born, certified, and chosen for their soul as much as their expertise." },
];

const TEAM = [
  { name: "Karim El Idrissi", role: "Founder · Marrakech", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
  { name: "Yasmine Bennani", role: "Head Concierge", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
  { name: "Hassan Amazigh", role: "Atlas guide · Imlil", img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80" },
  { name: "Layla Tahiri", role: "Cultural curator · Fez", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80" },
];

const PRESS = ["Condé Nast Traveler", "National Geographic", "The New York Times", "Travel + Leisure", "Le Monde", "Lonely Planet"];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Marhaba — 30 years crafting Moroccan journeys" },
      { name: "description", content: "Meet Marhaba: a Moroccan-owned travel company guiding the world through our Kingdom since 1992. Local guides, slow travel, deep impact." },
      { property: "og:title", content: "About Marhaba" },
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
      {/* 1. HERO */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <img src={HERO} alt="" className="absolute inset-0 h-full w-full object-cover kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/50 to-midnight/85" />
        <div className="relative h-full flex items-center justify-center px-6 text-center text-primary-foreground">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">About</p>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1] text-balance">A love letter to Morocco, <em className="text-accent not-italic">written by Moroccans</em></h1>
          </div>
        </div>
      </section>

      {/* 2. STORY */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Our story" title="Born in Marrakech, 1992" align="left" />
          <div className="mt-10 prose prose-lg max-w-none text-foreground/90 space-y-5 leading-relaxed">
            <p>Marhaba began with a single Renault 4 and a man who refused to let his country be reduced to a postcard. <strong>Karim El Idrissi</strong> was 28, a Marrakchi guide tired of mass tourism that skimmed the surface of his world.</p>
            <p>He built Marhaba on a single belief: that travelers who taste real Morocco — sleep in real homes, eat with real families, walk with real guides — leave changed. And they tell others.</p>
            <p>Three decades later, that promise still holds. We've grown to 47 local guides across every Moroccan region, and welcomed over 60,000 travelers — but we still answer every email personally, and we still drink mint tea before every itinerary begins.</p>
          </div>
        </div>
      </section>

      {/* 3. VALUES */}
      <section className="bg-secondary px-6 py-24">
        <SectionHeading eyebrow="What we believe" title="Our Moroccan roots" />
        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {VALUES.map(({ Icon, title, text }) => (
            <div key={title} className="bg-card border border-border rounded-2xl p-7 text-center">
              <div className="mx-auto w-14 h-14 rounded-full bg-gradient-saffron flex items-center justify-center shadow-glow"><Icon className="h-6 w-6 text-accent-foreground" /></div>
              <h3 className="font-display text-2xl mt-5">{title}</h3>
              <p className="text-muted-foreground mt-3">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TEAM */}
      <section className="px-6 py-24">
        <SectionHeading eyebrow="The faces" title="Meet your guides" description="The humans who'll make your trip extraordinary." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {TEAM.map(t => (
            <div key={t.name} className="text-center group">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-sm group-hover:shadow-elegant transition">
                <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="font-display text-xl mt-4">{t.name}</h3>
              <p className="text-sm text-clay">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SUSTAINABILITY */}
      <section className="bg-primary text-primary-foreground px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Impact</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Travel that gives back</h2>
            <p className="mt-5 text-primary-foreground/80 text-lg leading-relaxed">2% of every booking funds the <strong className="text-accent">Atlas Schools Project</strong>, building libraries in Berber villages. Our guides earn 4× the regional average. We carbon-offset every long-distance transfer.</p>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div><p className="font-display text-4xl text-accent">12</p><p className="text-xs text-primary-foreground/70 mt-1">Schools supported</p></div>
              <div><p className="font-display text-4xl text-accent">47</p><p className="text-xs text-primary-foreground/70 mt-1">Local guides</p></div>
              <div><p className="font-display text-4xl text-accent">100%</p><p className="text-xs text-primary-foreground/70 mt-1">Moroccan-owned</p></div>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-elegant">
            <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80" alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* 6. PRESS + CONTACT */}
      <section className="px-6 py-24">
        <SectionHeading eyebrow="Recognized by" title="Press & partners" />
        <div className="mt-10 flex flex-wrap justify-center gap-x-10 gap-y-4 text-muted-foreground max-w-4xl mx-auto">
          {PRESS.map(p => <span key={p} className="font-display italic text-lg">{p}</span>)}
        </div>

        <div className="mt-20 max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start bg-card border border-border rounded-2xl p-8 md:p-12 shadow-elegant">
          <div>
            <h3 className="font-display text-3xl">Get in touch</h3>
            <p className="text-muted-foreground mt-3">Questions, dreams, hellos — we read every message.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" /> Avenue Mohammed V, Marrakech</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> +212 524 000 000</li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> hello@marhaba.travel</li>
              <li className="flex items-center gap-3"><Users className="h-4 w-4 text-accent" /> Reply within 24h</li>
            </ul>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Message sent! We'll reply within 24h."); (e.target as HTMLFormElement).reset(); }}
            className="space-y-4"
          >
            <Input placeholder="Your name" required className="h-11" />
            <Input type="email" placeholder="Email" required className="h-11" />
            <textarea rows={4} placeholder="Tell us anything..." required className="w-full rounded-md border border-input bg-background p-3 text-sm" />
            <Button type="submit" className="w-full h-11 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">Send message</Button>
          </form>
        </div>

        <div className="text-center mt-14">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 font-semibold">
            <Link to="/tours">Start your Morocco journey</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
