

## Marhaba — A Morocco Travel & Booking Experience

A cinematic, soul-stirring travel website that makes the world fall in love with Morocco — its medinas, dunes, riads, and rituals — while functioning as a real booking platform. Menu mirrors BO Voyages: **Tours · Excursions · Transfers · Custom Activities**, plus **Destinations** and **About**.

### Design language
- **Palette** (warm Moroccan + your branding): deep midnight blue (primary), saffron/amber yellow (accent — CTAs & highlights), terracotta clay, sand cream backgrounds, ink black text. All defined as oklch tokens in `styles.css`.
- **Typography**: serif display (Fraunces) for poetic headlines + clean sans (Inter) for body. Arabic-style decorative dividers (zellige motif SVG) used sparingly.
- **Motion**: soft parallax hero, fade-in-on-scroll, hover lifts on cards, kenburns on imagery.
- **Imagery**: high-res Unsplash photography of Hassan II Mosque, Chefchaouen blue alleys, Sahara dunes, Aït Benhaddou, Marrakech souks, Atlas Mountains, riad courtyards.

### Pages — every page has exactly **6 sections**

**1. Home (`/`)**
1. Cinematic hero with rotating Morocco imagery + tagline "Where every alley tells a thousand years"
2. Quick-search booking bar (Tours / Excursions / Transfers / Custom · destination · date · travelers)
3. Featured Destinations grid (Marrakech, Fez, Chefchaouen, Sahara, Casablanca, Essaouira)
4. Signature Experiences carousel (camel trek, riad nights, tagine cooking, surf in Taghazout)
5. Why Travel With Us (3 trust pillars — 30+ yrs expertise, instant booking, 24/7 local support)
6. Traveler stories + Newsletter "Letters from Morocco"

**2. Tours (`/tours`)**
1. Hero: "Curated journeys through the Kingdom"
2. Filter bar (duration, region, theme: cultural / desert / coastal / luxury)
3. Tour grid (8–12 multi-day itineraries with price, duration, rating)
4. Featured Itinerary spotlight (day-by-day "Imperial Cities 7-day" preview)
5. Map of Morocco with tour routes traced
6. FAQ + booking CTA

**3. Excursions (`/excursions`)**
1. Hero: "Day adventures, unforgettable memories"
2. Category tiles (Desert · Mountains · Coast · Medina · Culinary · Wellness)
3. Excursion cards with quick-book
4. "Most loved this month" feature
5. Group vs private booking comparison
6. Reviews wall + CTA

**4. Transfers (`/transfers`)**
1. Hero: "Arrive in comfort, anywhere in Morocco"
2. Booking widget (from / to / date / passengers / vehicle class)
3. Vehicle fleet showcase (sedan, SUV, van, luxury)
4. Popular routes (Marrakech↔Sahara, Casablanca↔Fez, airport transfers)
5. Service guarantees (English-speaking drivers, flight tracking, fixed pricing)
6. FAQ + CTA

**5. Custom Activities (`/custom`)**
1. Hero: "Your Morocco, your way"
2. How-it-works 4-step process
3. Activity inspiration gallery (hot-air balloon, henna ateliers, calligraphy, hammam)
4. Custom-trip request form (multi-step)
5. Travel concierge profile / testimonials
6. CTA — talk to a Morocco expert

**6. Destinations (`/destinations`)**
1. Hero: interactive Morocco map
2. Region grid (Imperial Cities, Atlantic Coast, Sahara, Atlas, Blue Pearl)
3. City spotlight cards
4. Cultural calendar (festivals, moussems, best seasons)
5. Traditions & etiquette quick guide
6. "Plan a trip here" CTA

**7. About (`/about`)**
1. Hero — story of the agency
2. Our Moroccan roots & values
3. Team (local guides & concierges)
4. Sustainability & community impact
5. Press / partners / awards
6. Contact + newsletter

### Shared elements
- **Header**: logo, menu (Tours · Excursions · Transfers · Custom Activities · Destinations · About), language/currency switcher, "Book now" CTA
- **Footer**: 4 columns + zellige motif divider, social, payment icons, trust badges
- Per-route SSR `head()` metadata (title, description, og:image using the page's hero) for shareable previews

### Tech
- TanStack Start file routes (one file per page above)
- Tailwind v4 tokens for the Moroccan palette
- shadcn/ui components (Button, Card, Tabs, Form, Carousel, Dialog) styled to brand
- All imagery from Unsplash CDN (no uploads needed)
- Booking forms are front-end only in v1 (toast confirmation); Lovable Cloud + real bookings can be added later

