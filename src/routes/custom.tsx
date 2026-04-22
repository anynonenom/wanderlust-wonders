import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Sparkles, MessageCircle, Plane, ArrowRight, ArrowLeft, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/marhaba/SectionHeading";

const HERO = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80";

const STEPS = [
  { n: "01", t: "Tell us your dream", d: "A 3-minute form — places, mood, budget." },
  { n: "02", t: "Get a draft in 48h", d: "A real human writes you a custom itinerary." },
  { n: "03", t: "Refine together", d: "Unlimited tweaks until it's perfectly yours." },
  { n: "04", t: "Pack & go", d: "We book everything. You just show up curious." },
];

const INSPO = [
  { t: "Hot-air balloon at dawn", img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=900&q=80" },
  { t: "Henna ateliers in the medina", img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80" },
  { t: "Calligraphy with a master", img: "https://images.unsplash.com/photo-1523568114750-b593de7df18f?auto=format&fit=crop&w=900&q=80" },
  { t: "Hammam & rose ritual", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80" },
  { t: "Surf in Taghazout", img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=900&q=80" },
  { t: "Stargazing in Erg Chebbi", img: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80" },
];

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: "Custom trips · Your Morocco, your way | Marhaba" },
      { name: "description", content: "Bespoke Moroccan itineraries crafted by local concierges. Tell us your dream — we draft it in 48 hours." },
      { property: "og:title", content: "Custom Morocco trips — Marhaba" },
      { property: "og:description", content: "Your Morocco, your way." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: CustomPage,
});

function CustomPage() {
  const [step, setStep] = useState(1);
  const total = 3;

  return (
    <div>
      {/* 1. HERO */}
      <section className="bg-paper px-6 pt-12 pb-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.32em] font-bold text-coral">Custom journeys</p>
            <h1 className="font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.95] mt-5 text-balance">
              Your Morocco,
              <br /><span className="font-script text-coral text-[1.15em]">your</span> way<span className="text-mustard">.</span>
            </h1>
            <p className="mt-6 text-lg text-ink/70 max-w-md leading-relaxed">No two travelers are alike. Tell us your story — we'll write the itinerary back.</p>
            <a href="#form" className="inline-flex items-center gap-2 mt-7 text-ink font-semibold underline-wave">Start your draft <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-full overflow-hidden border-8 border-mustard"><img src={HERO} alt="" className="h-full w-full object-cover kenburns" /></div>
            <span className="absolute -top-3 -right-3 bg-coral text-cream w-24 h-24 rounded-full flex items-center justify-center text-center font-script text-lg leading-tight stamp">48h<br />reply</span>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="bg-cream px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeading kicker="How it works" title="From whisper to" script="adventure" />
          <div className="mt-14 grid md:grid-cols-4 gap-6 relative">
            {STEPS.map((s, i) => (
              <div key={s.n} className="bg-paper rounded-2xl border border-border p-6 relative">
                <span className="font-display text-5xl text-mustard leading-none">{s.n}</span>
                <h3 className="font-display text-xl mt-4">{s.t}</h3>
                <p className="text-sm text-ink/65 mt-2 leading-relaxed">{s.d}</p>
                {i < STEPS.length - 1 && <ArrowRight className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 h-6 w-6 text-coral" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. INSPIRATION */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <SectionHeading kicker="Inspiration" title="A few rare" script="moments" description="Sparks for your itinerary — pick three, dream the rest." />
          <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-5">
            {INSPO.map((e, i) => (
              <figure key={e.t} className={`group relative overflow-hidden rounded-2xl ${i % 2 === 0 ? "aspect-[4/5]" : "aspect-square mt-8 md:mt-12"}`}>
                <img src={e.img} alt={e.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-ink/85 to-transparent text-cream font-display text-xl">{e.t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FORM */}
      <section id="form" className="bg-cream px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto bg-paper border border-border rounded-3xl shadow-paper p-8 md:p-12">
          <div className="flex items-center justify-between mb-8">
            <p className="font-script text-2xl text-coral">step {step} of {total}</p>
            <div className="flex gap-1.5">{Array.from({ length: total }).map((_, i) => <span key={i} className={`h-1.5 w-10 rounded-full ${i < step ? "bg-coral" : "bg-border"}`} />)}</div>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); if (step < total) { setStep(step + 1); return; } toast.success("Sent! Reply within 48h."); (e.target as HTMLFormElement).reset(); setStep(1); }} className="space-y-5">
            {step === 1 && (<>
              <h3 className="font-display text-3xl">First, the dream</h3>
              <div><label className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60">When are you traveling?</label><Input type="month" className="h-12 mt-2" required /></div>
              <div><label className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60">For how long?</label>
                <select className="mt-2 w-full h-12 rounded-md border border-input bg-paper px-3 text-sm"><option>3–5 days</option><option>1 week</option><option>10–14 days</option><option>3+ weeks</option></select>
              </div>
              <div><label className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60">How many travelers?</label><Input type="number" min={1} defaultValue={2} className="h-12 mt-2" /></div>
            </>)}
            {step === 2 && (<>
              <h3 className="font-display text-3xl">Then, the mood</h3>
              <div><label className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60">Pick your moods</label>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Slow & quiet","Adventurous","Cultural deep-dive","Family","Honeymoon","Foodie","Wellness","Photography"].map((tag) => (
                    <label key={tag} className="cursor-pointer"><input type="checkbox" className="peer sr-only" /><span className="px-4 py-2 rounded-full bg-cream text-sm text-ink/70 peer-checked:bg-ink peer-checked:text-cream transition">{tag}</span></label>
                  ))}
                </div>
              </div>
              <div><label className="text-[10px] uppercase tracking-[0.25em] font-bold text-ink/60">Budget per traveler (€)</label><Input type="number" min={500} defaultValue={2000} className="h-12 mt-2" /></div>
            </>)}
            {step === 3 && (<>
              <h3 className="font-display text-3xl">Finally, hello!</h3>
              <Input placeholder="Your name" required className="h-12" />
              <Input type="email" placeholder="Email" required className="h-12" />
              <textarea rows={4} placeholder="Anything else we should know?" className="w-full rounded-md border border-input bg-paper p-3 text-sm" />
            </>)}
            <div className="flex justify-between gap-3 pt-4">
              {step > 1 ? <Button type="button" variant="outline" onClick={() => setStep(step - 1)} className="rounded-full h-11 px-5 text-xs uppercase tracking-[0.2em] font-bold"><ArrowLeft className="mr-1.5 h-4 w-4" /> Back</Button> : <span />}
              <Button type="submit" className="bg-ink text-cream hover:bg-coral rounded-full h-11 px-6 text-xs uppercase tracking-[0.2em] font-bold ml-auto">{step < total ? "Next" : "Send my brief"} <ArrowRight className="ml-1.5 h-4 w-4" /></Button>
            </div>
          </form>
        </div>
      </section>

      {/* 5. CONCIERGE */}
      <section className="bg-ink text-cream px-6 py-20 md:py-28 grain relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5"><div className="aspect-[4/5] rounded-3xl overflow-hidden"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="" className="h-full w-full object-cover" /></div></div>
          <div className="lg:col-span-7">
            <p className="font-script text-3xl text-mustard">meet your concierge</p>
            <h2 className="font-display text-4xl md:text-5xl mt-2 leading-tight">Yasmine — born in Fez,<br />in love with every road.</h2>
            <div className="flex gap-0.5 mt-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-mustard text-mustard" />)}</div>
            <blockquote className="mt-6 font-display text-xl italic text-cream/85 leading-relaxed border-l-2 border-mustard pl-5">"Tell me your story — what made you fall for Morocco — and I'll show you the country I grew up in."</blockquote>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button asChild className="bg-mustard text-ink hover:bg-coral hover:text-cream rounded-full h-12 px-7 text-xs uppercase tracking-[0.22em] font-bold"><a href="#form"><Sparkles className="mr-2 h-4 w-4" /> Start a brief</a></Button>
              <a href="https://wa.me/212524000000" className="inline-flex items-center gap-2 text-cream hover:text-mustard"><MessageCircle className="h-4 w-4" /> Or WhatsApp now</a>
            </div>
            <p className="mt-6 text-xs text-cream/55 flex items-center gap-2"><Plane className="h-3 w-3 text-mustard" /> Free briefs · No commitment · Reply within 48h</p>
          </div>
        </div>
      </section>
    </div>
  );
}
