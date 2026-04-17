import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Car, MapPin, Calendar, Users, Plane, ChevronDown, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/marhaba/SectionHeading";
import { useState } from "react";

const HERO = "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2000&q=80";

const FLEET = [
  { name: "Sedan", capacity: "1–3 pax", price: "from €30", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=80" },
  { name: "SUV 4x4", capacity: "1–4 pax", price: "from €55", img: "https://images.unsplash.com/photo-1519440432048-3f4e2e6c46d4?auto=format&fit=crop&w=900&q=80" },
  { name: "Van", capacity: "5–8 pax", price: "from €70", img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=900&q=80" },
  { name: "Luxury", capacity: "1–3 pax", price: "from €120", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80" },
];

const ROUTES = [
  { from: "Marrakech", to: "Sahara (Merzouga)", duration: "~9h", price: 250, type: "Long distance" },
  { from: "Casablanca", to: "Fez", duration: "~3h30", price: 130, type: "City to city" },
  { from: "Marrakech Airport", to: "Hotel / Riad", duration: "~30min", price: 25, type: "Airport" },
  { from: "Fez", to: "Chefchaouen", duration: "~4h", price: 140, type: "Long distance" },
  { from: "Casablanca Airport", to: "Marrakech", duration: "~2h30", price: 110, type: "Airport" },
  { from: "Marrakech", to: "Essaouira", duration: "~2h30", price: 90, type: "City to city" },
];

const FAQ = [
  { q: "Are drivers English-speaking?", a: "All Marhaba drivers speak English; many also speak French and Spanish. Arabic & Berber are native." },
  { q: "What if my flight is delayed?", a: "We track your flight in real time and adjust pickup automatically — no extra fee." },
  { q: "Can I make stops along the way?", a: "Yes — every long-distance transfer includes 2 stops at panoramic viewpoints." },
  { q: "How is payment handled?", a: "Pay 20% to confirm, balance in cash or card on the day. Free cancellation 24h prior." },
];

export const Route = createFileRoute("/transfers")({
  head: () => ({
    meta: [
      { title: "Morocco Private Transfers — Airport & City to City | Marhaba" },
      { name: "description", content: "Private transfers across Morocco: airport pickups, intercity routes, English-speaking drivers, fixed pricing." },
      { property: "og:title", content: "Private Morocco Transfers" },
      { property: "og:description", content: "Arrive in comfort, anywhere in Morocco." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: TransfersPage,
});

function TransfersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* 1. HERO */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <img src={HERO} alt="" className="absolute inset-0 h-full w-full object-cover kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/50 to-midnight/85" />
        <div className="relative h-full flex items-center justify-center px-6 text-center text-primary-foreground">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Transfers</p>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1] text-balance">Arrive in comfort, <em className="text-accent not-italic">anywhere in Morocco</em></h1>
          </div>
        </div>
      </section>

      {/* 2. BOOKING WIDGET */}
      <section className="relative -mt-12 z-20 px-6">
        <form
          onSubmit={(e) => { e.preventDefault(); toast.success("Transfer requested!", { description: "Confirmation in your inbox within minutes." }); }}
          className="mx-auto max-w-5xl bg-card shadow-elegant rounded-2xl p-6 md:p-8 border border-border"
        >
          <h2 className="font-display text-2xl mb-6">Book your transfer</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">From</label>
              <div className="relative mt-2"><MapPin className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" /><Input className="h-11 pl-9" placeholder="Marrakech Airport" required /></div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">To</label>
              <div className="relative mt-2"><MapPin className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" /><Input className="h-11 pl-9" placeholder="Riad in medina" required /></div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Date</label>
              <div className="relative mt-2"><Calendar className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" /><Input type="date" className="h-11 pl-9" required /></div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Passengers</label>
              <div className="relative mt-2"><Users className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" /><Input type="number" min={1} defaultValue={2} className="h-11 pl-9" /></div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Vehicle</label>
              <div className="relative mt-2"><Car className="absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" /><select className="h-11 pl-9 w-full rounded-md border border-input bg-background text-sm pr-3"><option>Sedan</option><option>SUV 4x4</option><option>Van</option><option>Luxury</option></select></div>
            </div>
          </div>
          <Button type="submit" className="w-full mt-5 h-12 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">Get instant quote</Button>
        </form>
      </section>

      {/* 3. FLEET */}
      <section className="px-6 py-24">
        <SectionHeading eyebrow="Our fleet" title="Choose your ride" description="All vehicles 2021 or newer, professionally maintained, fully insured." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {FLEET.map(v => (
            <div key={v.name} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elegant transition hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-muted"><img src={v.img} alt={v.name} loading="lazy" className="h-full w-full object-cover" /></div>
              <div className="p-5">
                <h3 className="font-display text-2xl">{v.name}</h3>
                <p className="text-sm text-muted-foreground">{v.capacity}</p>
                <p className="mt-3 text-accent font-semibold">{v.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. POPULAR ROUTES */}
      <section className="bg-secondary px-6 py-24">
        <SectionHeading eyebrow="Popular routes" title="Where travelers go" />
        <div className="mt-14 grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {ROUTES.map((r, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 flex items-center justify-between hover:border-accent transition group">
              <div className="flex items-center gap-4">
                {r.type === "Airport" ? <Plane className="h-6 w-6 text-clay" /> : <Car className="h-6 w-6 text-clay" />}
                <div>
                  <p className="font-display text-lg">{r.from} <ArrowRight className="inline h-4 w-4 mx-1 text-clay" /> {r.to}</p>
                  <p className="text-xs text-muted-foreground">{r.type} · {r.duration}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-display text-xl font-semibold">€{r.price}</p>
                <button onClick={() => toast.success(`${r.from} → ${r.to} booked!`)} className="text-xs text-accent font-semibold group-hover:underline">Book</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GUARANTEES */}
      <section className="bg-primary text-primary-foreground px-6 py-24">
        <SectionHeading eyebrow="Promises" title="What we guarantee" light />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "English-speaking drivers", text: "Trained, licensed, friendly." },
            { title: "Live flight tracking", text: "We adjust automatically — no missed pickups." },
            { title: "Fixed pricing", text: "What you see is what you pay. No surprises." },
            { title: "Free water & wifi", text: "Stay refreshed and connected." },
          ].map(g => (
            <div key={g.title} className="bg-primary-foreground/5 border border-primary-foreground/15 rounded-2xl p-6">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4"><Check className="h-5 w-5 text-accent-foreground" /></div>
              <h3 className="font-display text-xl">{g.title}</h3>
              <p className="text-sm text-primary-foreground/70 mt-2">{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ + CTA */}
      <section className="px-6 py-24">
        <SectionHeading eyebrow="Questions" title="Good to know" />
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
            <Button onClick={() => toast.info("Talk to our concierge — chat opening soon.")} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-12 px-8 font-semibold">Need a custom quote?</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
