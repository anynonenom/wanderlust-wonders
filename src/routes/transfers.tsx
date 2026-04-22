import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Plane, ShieldCheck, Clock, Languages, Car, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/marhaba/SectionHeading";

const HERO = "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=2000&q=80";

const FLEET = [
  { type: "Sedan", seats: 3, bags: 2, img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80", price: 45 },
  { type: "SUV", seats: 5, bags: 5, img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80", price: 75 },
  { type: "Van", seats: 8, bags: 8, img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80", price: 110 },
  { type: "Luxury", seats: 4, bags: 4, img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80", price: 180 },
];

const ROUTES = [
  { from: "Marrakech Airport", to: "Medina", price: 18, hrs: "20 min" },
  { from: "Marrakech", to: "Sahara (Merzouga)", price: 320, hrs: "9 hrs" },
  { from: "Casablanca Airport", to: "Marrakech", price: 95, hrs: "3 hrs" },
  { from: "Fez", to: "Chefchaouen", price: 140, hrs: "4 hrs" },
  { from: "Marrakech", to: "Essaouira", price: 110, hrs: "2.5 hrs" },
  { from: "Tangier", to: "Chefchaouen", price: 85, hrs: "2 hrs" },
];

export const Route = createFileRoute("/transfers")({
  head: () => ({
    meta: [
      { title: "Transfers · Reliable rides across Morocco | Marhaba" },
      { name: "description", content: "Comfortable airport and intercity transfers across Morocco. English-speaking drivers, fixed pricing, flight tracking." },
      { property: "og:title", content: "Transfers — Marhaba" },
      { property: "og:description", content: "Arrive in comfort, anywhere in Morocco." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: TransfersPage,
});

function TransfersPage() {
  return (
    <div>
      {/* 1. HERO + booking */}
      <section className="relative bg-cream overflow-hidden">
        <div className="absolute inset-0"><img src={HERO} alt="" className="h-full w-full object-cover opacity-25" /></div>
        <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-coral">Transfers</p>
            <h1 className="font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-[0.95] mt-5 text-balance">
              Arrive in <em className="text-coral">comfort,</em>
              <br />anywhere in <span className="font-script text-mustard text-[1.1em]">Morocco</span>
            </h1>
            <p className="mt-6 text-lg text-ink/75 max-w-md leading-relaxed">English-speaking drivers, flight tracking, fixed pricing — never a surprise.</p>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); toast.success("Quote ready! We'll email shortly."); }} className="lg:col-span-6 bg-paper border border-border rounded-3xl p-7 shadow-polaroid space-y-4">
            <h3 className="font-display text-2xl">Book your ride</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div><label className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60">From</label><Input className="h-11 mt-1.5" placeholder="Marrakech Airport" required /></div>
              <div><label className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60">To</label><Input className="h-11 mt-1.5" placeholder="Medina riad" required /></div>
              <div><label className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60">Date & time</label><Input type="datetime-local" className="h-11 mt-1.5" required /></div>
              <div><label className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60">Passengers</label><Input type="number" min={1} defaultValue={2} className="h-11 mt-1.5" /></div>
              <div className="sm:col-span-2"><label className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60">Vehicle</label>
                <select className="mt-1.5 w-full h-11 rounded-md border border-input bg-paper px-3 text-sm">{FLEET.map((f) => <option key={f.type}>{f.type}</option>)}</select>
              </div>
            </div>
            <Button type="submit" className="w-full h-12 bg-ink text-cream hover:bg-coral rounded-full text-xs uppercase tracking-[0.22em] font-bold">Get my quote <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </form>
        </div>
      </section>

      {/* 2. FLEET */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeading kicker="Fleet" title="Choose your" script="ride" description="Spotless, modern, air-conditioned. Bottled water and Wi-Fi on board." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET.map((f) => (
              <div key={f.type} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-cream"><img src={f.img} alt={f.type} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="mt-4 flex items-center justify-between"><h3 className="font-display text-2xl">{f.type}</h3><span className="text-sm text-ink/60">{f.seats} pax · {f.bags} bags</span></div>
                <p className="text-sm mt-1"><span className="text-ink/50">from</span> <span className="font-semibold text-coral">€{f.price}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ROUTES */}
      <section className="bg-cream px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeading kicker="Popular routes" title="Where everyone is" script="going" align="left" />
          <div className="mt-12 grid md:grid-cols-2 gap-3">
            {ROUTES.map((r) => (
              <button key={`${r.from}-${r.to}`} onClick={() => toast.success(`Selected ${r.from} → ${r.to}`)} className="text-left group bg-paper p-5 rounded-2xl border border-border hover:border-coral hover:shadow-paper transition flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <span className="w-10 h-10 rounded-full bg-mustard/30 flex items-center justify-center shrink-0"><Car className="h-4 w-4 text-coral" /></span>
                  <div className="min-w-0">
                    <p className="font-display text-lg leading-tight truncate">{r.from} <span className="text-coral">→</span> {r.to}</p>
                    <p className="text-xs text-ink/55 uppercase tracking-[0.2em] mt-1">{r.hrs}</p>
                  </div>
                </div>
                <span className="font-display text-2xl shrink-0">€{r.price}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GUARANTEES */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeading kicker="Promises" title="Five reasons travelers" script="trust us" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { Icon: Languages, t: "English drivers", d: "Every driver fluent in EN, FR, AR." },
              { Icon: Plane, t: "Flight tracking", d: "We watch your flight. Delays are free." },
              { Icon: ShieldCheck, t: "Fixed pricing", d: "Quoted is paid. No meter, no surprise." },
              { Icon: Clock, t: "On time, always", d: "15 min buffer built into every booking." },
              { Icon: Car, t: "5★ vehicles", d: "Cleaned, sanitized, AC, water on board." },
            ].map(({ Icon, t, d }) => (
              <div key={t} className="text-center px-4 py-6 border-t-2 border-mustard">
                <Icon className="h-8 w-8 mx-auto text-coral" />
                <h3 className="font-display text-xl mt-4">{t}</h3>
                <p className="text-sm text-ink/65 mt-2 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ + CTA */}
      <section className="bg-ink text-cream px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <SectionHeading kicker="FAQ" title="Quick answers, no" script="fluff" light />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {[
              { q: "How do I pay?", a: "20% on booking, balance to driver in cash or card. Or pay in full online." },
              { q: "What if my flight is late?", a: "We watch your flight live. Driver waits — no extra charge under 90 min." },
              { q: "Are child seats available?", a: "Yes, free of charge. Just tell us ages when booking." },
              { q: "Can I make stops?", a: "Absolutely. Add scenic stops on long transfers — argan, kasbahs, viewpoints." },
            ].map((f) => (
              <div key={f.q} className="border-t border-cream/15 pt-5">
                <h3 className="font-display text-xl text-mustard">{f.q}</h3>
                <p className="text-cream/75 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Button asChild className="bg-mustard text-ink hover:bg-coral hover:text-cream rounded-full h-12 px-8 text-xs uppercase tracking-[0.22em] font-bold">
              <Link to="/custom">Need something special? Ask us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
