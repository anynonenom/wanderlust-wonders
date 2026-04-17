import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { useState } from "react";
import { MessageSquare, Sparkles, ClipboardList, Plane, Quote, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/marhaba/SectionHeading";

const HERO = "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=2000&q=80";

const STEPS = [
  { Icon: MessageSquare, title: "Tell us your dream", text: "Share inspiration, budget, must-sees and dates — anything goes." },
  { Icon: Sparkles, title: "We craft a draft", text: "Within 48h, your dedicated concierge sends a hand-built itinerary." },
  { Icon: ClipboardList, title: "Refine together", text: "Tweak as much as you want until every day feels right." },
  { Icon: Plane, title: "Live your trip", text: "Land in Morocco — we handle every detail from pickup to farewell." },
];

const GALLERY = [
  { title: "Hot-air balloon over Atlas", img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=900&q=80" },
  { title: "Henna ateliers in Fez", img: "https://images.unsplash.com/photo-1610018556010-6a11691bc905?auto=format&fit=crop&w=900&q=80" },
  { title: "Calligraphy with a master", img: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=900&q=80" },
  { title: "Hammam & spa rituals", img: "https://images.unsplash.com/photo-1545578630-d6e1f6f1bd2c?auto=format&fit=crop&w=900&q=80" },
  { title: "Private medina dinner", img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=900&q=80" },
  { title: "Sahara overnight glamping", img: "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=900&q=80" },
];

const TESTIMONIALS = [
  { name: "Aisha, NYC", text: "I asked for 'authentic but luxurious' and Yasmine built me 12 days of pure magic." },
  { name: "David, Berlin", text: "From a wedding-anniversary surprise to private chef nights — every detail nailed." },
];

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: "Custom Morocco Trips — Bespoke itineraries | Marhaba" },
      { name: "description", content: "A Morocco trip designed around you. Tell us your dream, your concierge crafts the rest. Hot-air balloons, hammam, calligraphy, private dinners." },
      { property: "og:title", content: "Custom Morocco Itineraries" },
      { property: "og:description", content: "Your Morocco, your way." },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: CustomPage,
});

function CustomPage() {
  const [step, setStep] = useState(1);

  return (
    <div>
      {/* 1. HERO */}
      <section className="relative h-[60vh] min-h-[450px] overflow-hidden">
        <img src={HERO} alt="" className="absolute inset-0 h-full w-full object-cover kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 to-midnight/85" />
        <div className="relative h-full flex items-center justify-center px-6 text-center text-primary-foreground">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Custom Activities</p>
            <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1] text-balance">Your Morocco, <em className="text-accent not-italic">your way</em></h1>
          </div>
        </div>
      </section>

      {/* 2. HOW IT WORKS */}
      <section className="px-6 py-24">
        <SectionHeading eyebrow="The process" title="Four steps to your perfect trip" />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {STEPS.map(({ Icon, title, text }, i) => (
            <div key={title} className="relative bg-card border border-border rounded-2xl p-6 hover:border-accent transition">
              <span className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-saffron flex items-center justify-center font-display font-bold text-accent-foreground shadow-glow">{i + 1}</span>
              <Icon className="h-7 w-7 text-clay" />
              <h3 className="font-display text-xl mt-4">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INSPIRATION */}
      <section className="bg-secondary px-6 py-24">
        <SectionHeading eyebrow="Inspiration" title="Beyond the guidebook" description="Some of the rare experiences past travelers have asked us to craft." />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {GALLERY.map(g => (
            <div key={g.title} className="group relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={g.img} alt={g.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent" />
              <h3 className="absolute bottom-5 left-5 right-5 font-display text-2xl text-primary-foreground">{g.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FORM */}
      <section className="px-6 py-24">
        <SectionHeading eyebrow="Tell us your dream" title="Start designing your trip" />
        <form
          onSubmit={(e) => { e.preventDefault(); toast.success("Request sent!", { description: "Your concierge replies within 24h." }); }}
          className="mt-14 max-w-2xl mx-auto bg-card border border-border rounded-2xl p-8 shadow-elegant"
        >
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map(n => (
              <div key={n} className="flex-1 flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${n <= step ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>{n}</div>
                {n < 3 && <div className={`flex-1 h-0.5 mx-2 ${n < step ? "bg-accent" : "bg-muted"}`} />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-5">
              <h3 className="font-display text-2xl">Who's traveling?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="text-xs uppercase font-semibold text-muted-foreground">Travelers</label><Input type="number" min={1} defaultValue={2} className="mt-1.5 h-11" /></div>
                <div><label className="text-xs uppercase font-semibold text-muted-foreground">Trip length</label><Input placeholder="e.g. 10 days" className="mt-1.5 h-11" /></div>
              </div>
              <div><label className="text-xs uppercase font-semibold text-muted-foreground">Approx. dates</label><Input type="month" className="mt-1.5 h-11" /></div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-5">
              <h3 className="font-display text-2xl">Your style</h3>
              <div><label className="text-xs uppercase font-semibold text-muted-foreground">Budget per person</label>
                <select className="mt-1.5 h-11 w-full rounded-md border border-input bg-background px-3 text-sm"><option>€500–€1500</option><option>€1500–€3000</option><option>€3000–€6000</option><option>€6000+</option></select>
              </div>
              <div><label className="text-xs uppercase font-semibold text-muted-foreground">Vibe</label>
                <div className="flex flex-wrap gap-2 mt-2">{["Cultural", "Adventure", "Luxury", "Family", "Romantic", "Wellness"].map(t => <button key={t} type="button" className="px-4 py-2 text-sm rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition">{t}</button>)}</div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-5">
              <h3 className="font-display text-2xl">Anything special?</h3>
              <div><label className="text-xs uppercase font-semibold text-muted-foreground">Your name</label><Input placeholder="Full name" required className="mt-1.5 h-11" /></div>
              <div><label className="text-xs uppercase font-semibold text-muted-foreground">Email</label><Input type="email" placeholder="you@example.com" required className="mt-1.5 h-11" /></div>
              <div><label className="text-xs uppercase font-semibold text-muted-foreground">Tell us anything</label><textarea rows={4} placeholder="Bucket-list moments, dietary needs, anniversaries..." className="mt-1.5 w-full rounded-md border border-input bg-background p-3 text-sm" /></div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <Button type="button" variant="ghost" onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}>Back</Button>
            {step < 3 ? (
              <Button type="button" onClick={() => setStep(step + 1)} className="bg-primary hover:bg-primary/90">Next <ArrowRight className="ml-1 h-4 w-4" /></Button>
            ) : (
              <Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">Send my request</Button>
            )}
          </div>
        </form>
      </section>

      {/* 5. CONCIERGE */}
      <section className="bg-primary text-primary-foreground px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md rounded-2xl overflow-hidden shadow-elegant">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80" alt="Concierge Yasmine" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Meet your concierge</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Yasmine, born in Marrakech</h2>
            <p className="mt-5 text-primary-foreground/80 text-lg leading-relaxed">"Twelve years designing trips, a thousand happy travelers. My job is simple: turn your three-line dream into a journey you'll talk about forever."</p>
            <div className="mt-8 space-y-4">
              {TESTIMONIALS.map(t => (
                <figure key={t.name} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5">
                  <Quote className="h-5 w-5 text-accent" />
                  <blockquote className="font-display italic text-lg mt-2">"{t.text}"</blockquote>
                  <figcaption className="text-xs text-primary-foreground/60 mt-3">— {t.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="px-6 py-24 bg-gradient-saffron text-accent-foreground text-center">
        <SectionHeading title="Talk to a Morocco expert" description="Free, no commitment. Reply guaranteed within one business day." />
        <Button onClick={() => toast.success("Concierge contacted!", { description: "We'll reply within 24h." })} size="lg" className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-10 font-semibold">Start the conversation</Button>
      </section>
    </div>
  );
}
