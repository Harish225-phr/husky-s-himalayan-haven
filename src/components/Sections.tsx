import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Mountain,
  DoorOpen,
  Flame,
  UtensilsCrossed,
  Wifi,
  Car,
  Phone,
  MessageCircle,
  MapPin,
  Navigation,
  Star,
  Bed,
  Tv,
  Coffee,
  Droplets,
  Laptop,
  PawPrint,
  Clock,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  ADDRESS_LINES,
  CALL_LINK,
  DIRECTIONS_LINK,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY,
  PHONE_SECONDARY_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/site";

import lodgeSky from "@/assets/lodge-exterior-sky.png";
import lodgeFacade from "@/assets/lodge-facade.png";
import roomDeluxe from "@/assets/room-deluxe.png";
import roomTwin from "@/assets/room-twin.png";
import balcony from "@/assets/balcony-view.png";
import corridor from "@/assets/corridor.png";
import cafeInterior from "@/assets/cafe-interior.png";
import cafeNight from "@/assets/cafe-night.png";
import food from "@/assets/food-biryani.png";

/* ---------------- Highlights strip ---------------- */

const HIGHLIGHTS = [
  { icon: Mountain, label: "Mountain & Valley Views" },
  { icon: DoorOpen, label: "Private Balconies" },
  { icon: Flame, label: "Cozy Fireplaces" },
  { icon: UtensilsCrossed, label: "Multi-Cuisine Cafe" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Free Parking" },
];

export function Highlights() {
  return (
    <section className="border-y border-charcoal/10 bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-cream/10 sm:grid-cols-3 lg:grid-cols-6 lg:divide-y-0">
        {HIGHLIGHTS.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className="flex flex-col items-center gap-3 px-4 py-8 text-center"
          >
            <h.icon className="h-5 w-5 text-gold" strokeWidth={1.4} />
            <span className="eyebrow text-[0.58rem] text-cream/80">{h.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Brand story ---------------- */

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 40]);

  return (
    <section className="bg-cream py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div ref={ref} className="relative">
          <div className="img-zoom relative h-[420px] overflow-hidden sm:h-[560px]">
            <motion.img
              style={{ y }}
              src={lodgeSky}
              alt="The Husky's Lodge exterior under Himalayan skies in Bahang, Manali"
              loading="lazy"
              className="h-[120%] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden h-40 w-40 border border-gold/60 lg:block" />
        </div>

        <Reveal>
          <span className="eyebrow text-bark">Welcome to The Husky&apos;s</span>
          <h2 className="rule-gold mt-5 font-display text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
            A mountain stay
            <span className="block text-forest">shaped by the valley.</span>
          </h2>
          <p className="mt-8 text-base leading-relaxed text-charcoal/75">
            The Husky&apos;s Lodge And Cafe is a 3-star mountain stay at 85, Bahang on Jogni Waterfall
            Road, Manali. Comfortable rooms with private balconies open onto panoramic Himalayan
            surroundings, while the in-house cafe keeps the mornings slow and the evenings warm.
          </p>
          <p className="mt-5 text-base leading-relaxed text-charcoal/75">
            The location makes it an easy base for the places people come to Manali for.
          </p>
          <div className="mt-9 grid gap-px overflow-hidden border border-charcoal/10 bg-charcoal/10 sm:grid-cols-3">
            {["Jogini Waterfall", "Solang Valley", "Manali"].map((p) => (
              <div key={p} className="bg-cream px-5 py-6">
                <MapPin className="h-4 w-4 text-gold" strokeWidth={1.5} />
                <p className="mt-3 font-display text-lg text-charcoal">{p}</p>
              </div>
            ))}
          </div>
          <a href="#stay" className="btn-base btn-outline-dark mt-10">
            Discover More
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Stay ---------------- */

const ROOM_IMAGES = [
  {
    img: roomDeluxe,
    title: "Mountain View Room",
    desc: "Wood-warm interiors with a private balcony framing the valley, a seating corner and a full ensuite bathroom.",
    features: ["Private Balcony", "Mountain / Valley Views", "Extra-Long Beds", "Flat-Screen TV"],
    alt: "Spacious wooden room with king bed and balcony at The Husky's Lodge, Manali",
  },
  {
    img: roomTwin,
    title: "Cozy Comfort Room",
    desc: "A snug mountain room with coffee and tea maker, work desk and everything set for long, restful nights.",
    features: ["Coffee / Tea Maker", "Work Desk", "Cozy Fireplace", "24-Hour Hot & Cold Water"],
    alt: "Comfortable hotel room with tea maker and TV at The Husky's Lodge, Manali",
  },
];

const ROOM_AMENITIES = [
  { icon: DoorOpen, label: "Private Balcony" },
  { icon: Mountain, label: "Mountain / Valley Views" },
  { icon: Flame, label: "Cozy Fireplace" },
  { icon: Bed, label: "Extra-Long Beds" },
  { icon: Coffee, label: "Coffee / Tea Maker" },
  { icon: Tv, label: "Flat-Screen TV" },
  { icon: Laptop, label: "Work Desk" },
  { icon: Droplets, label: "24-Hour Hot & Cold Water" },
];

export function Stay() {
  return (
    <section id="stay" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow text-bark">Stay With Us</span>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-charcoal sm:text-5xl lg:text-6xl">
            Rooms made for mountain mornings
          </h2>
        </Reveal>

        <div className="mt-14 space-y-8">
          {ROOM_IMAGES.map((room, i) => (
            <Reveal key={room.title} delay={0.05 * i}>
              <article
                className={`grid overflow-hidden bg-cream lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="img-zoom h-[300px] lg:h-[480px]">
                  <img src={room.img} alt={room.alt} loading="lazy" className="h-full w-full object-cover" />
                </figure>
                <div className="flex flex-col justify-center p-8 lg:p-14">
                  <span className="eyebrow text-gold">0{i + 1}</span>
                  <h3 className="mt-4 font-display text-3xl text-charcoal lg:text-4xl">{room.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-charcoal/70">{room.desc}</p>
                  <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                    {room.features.map((f) => (
                      <li key={f} className="eyebrow flex items-center gap-2 text-[0.58rem] text-charcoal/70">
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-base btn-dark mt-9 self-start"
                  >
                    Check Availability
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 grid gap-px overflow-hidden border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
            {ROOM_AMENITIES.map((a) => (
              <div key={a.label} className="flex items-center gap-3 bg-cream px-5 py-6">
                <a.icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />
                <span className="eyebrow text-[0.56rem] text-charcoal/75">{a.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Cafe ---------------- */

export function Cafe() {
  return (
    <section id="cafe" className="bg-forest-deep py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow text-gold">The Husky&apos;s Cafe</span>
            <h2 className="mt-5 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Good Food.
              <span className="block">Great Views.</span>
              <span className="block text-gold">Mountain Vibes.</span>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/70">
              The Cafe Husky&apos;s-85 is a multi-cuisine kitchen at the heart of the lodge — North
              Indian classics, Chinese options, unhurried breakfasts and warm dinners, served in a
              bright, cozy dining room that fills with mountain light.
            </p>
            <ul className="mt-8 space-y-3">
              {["Multi-cuisine dining", "North Indian food", "Chinese options", "Breakfast and dinner", "Cozy cafe atmosphere"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-cream/80">
                    <span className="h-px w-6 bg-gold" />
                    {t}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#gallery" className="btn-base btn-gold">
                Explore the Cafe
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-outline-light">
                Enquire on WhatsApp
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Reveal className="col-span-2" delay={0.05}>
              <figure className="img-zoom h-[240px] sm:h-[320px]">
                <img src={cafeInterior} alt="Bright multi-cuisine cafe dining hall at The Husky's Lodge, Manali" loading="lazy" className="h-full w-full object-cover" />
              </figure>
            </Reveal>
            <Reveal delay={0.12}>
              <figure className="img-zoom h-[200px] sm:h-[260px]">
                <img src={cafeNight} alt="The Cafe Husky's-85 entrance lit up at night in Bahang, Manali" loading="lazy" className="h-full w-full object-cover" />
              </figure>
            </Reveal>
            <Reveal delay={0.18}>
              <figure className="img-zoom h-[200px] sm:h-[260px]">
                <img src={food} alt="Freshly prepared biryani served at The Husky's Cafe in Manali" loading="lazy" className="h-full w-full object-cover" />
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experience ---------------- */

const EXPERIENCES = [
  { n: "01", title: "Jogini Waterfall", text: "A short mountain trail from Bahang to the falls above the village." },
  { n: "02", title: "Solang Valley", text: "Open meadows and adventure sport, a comfortable drive up the valley." },
  { n: "03", title: "Manali", text: "Old Manali cafes, the Mall Road and the town below the lodge." },
  { n: "04", title: "Mountain Walks", text: "Quiet pine-lined routes straight from the property gate." },
  { n: "05", title: "Hiking & Walking Tours", text: "Guided walks through the surrounding Himalayan slopes." },
  { n: "06", title: "Bicycle Rentals", text: "Ride the valley roads at your own pace." },
];

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="experience" className="relative overflow-hidden bg-charcoal py-24 text-cream lg:py-36" ref={ref}>
      <motion.img
        style={{ y }}
        src={lodgeFacade}
        alt="The Husky's Lodge balconies facing the Himalayan mountains"
        loading="lazy"
        className="absolute inset-0 h-[116%] w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/80 to-charcoal" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow text-gold">Experience</span>
          <h2 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Your base for the Himalayas
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-cream/10 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((e, i) => (
            <motion.div
              key={e.n}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1 }}
              className="group bg-charcoal px-7 py-12 transition-colors duration-500 hover:bg-forest-deep"
            >
              <span className="font-display text-4xl text-gold/60 transition-colors group-hover:text-gold">{e.n}</span>
              <h3 className="mt-6 font-display text-2xl">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">{e.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why ---------------- */

const WHY = [
  { n: "01", title: "Himalayan Views", text: "Panoramic mountain and valley surroundings." },
  { n: "02", title: "Cozy Rooms", text: "Comfortable rooms designed for mountain stays." },
  { n: "03", title: "Cafe Experience", text: "Multi-cuisine food in a relaxed setting." },
  { n: "04", title: "Adventure Access", text: "Convenient base for exploring Jogini Waterfall and Solang Valley." },
  { n: "05", title: "Pet Friendly", text: "Pets are welcome." },
  { n: "06", title: "Easy Stay", text: "Free Wi-Fi, parking and room service." },
];

export function Why() {
  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow text-bark">Why The Husky&apos;s</span>
          <h2 className="mt-4 font-display text-4xl text-charcoal sm:text-5xl lg:text-6xl">Why stay with us?</h2>
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w.n} delay={(i % 3) * 0.08}>
              <div className="border-t border-charcoal/15 pt-6">
                <span className="eyebrow text-gold">{w.n}</span>
                <h3 className="mt-3 font-display text-2xl text-charcoal">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/70">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */

const THEMES = [
  { title: "Mountain Views", text: "Guests consistently mention the panoramic views from the rooms and balconies." },
  { title: "Comfortable Rooms", text: "Room comfort and cleanliness come up often in guest feedback." },
  { title: "Cafe & Food", text: "The in-house multi-cuisine cafe is a frequently appreciated part of the stay." },
  { title: "Hospitality", text: "Warm, attentive service from the team is a recurring theme." },
  { title: "Location", text: "The Bahang setting near Jogini Waterfall Road is regularly highlighted." },
];

export function Reviews() {
  return (
    <section className="bg-forest-deep py-24 text-cream lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow text-gold">Guest Rating</span>
            <p className="mt-6 font-display text-7xl leading-none text-cream lg:text-8xl">4.4</p>
            <p className="eyebrow mt-3 text-cream/60">out of 5</p>
            <div className="mt-5 flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-gold text-gold" : "text-gold/40"}`} />
              ))}
            </div>
            <p className="mt-5 text-sm text-cream/70">Based on 313 reviews</p>
          </Reveal>

          <div className="grid gap-px bg-cream/10 sm:grid-cols-2">
            {THEMES.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
                className="bg-forest-deep px-7 py-9"
              >
                <h3 className="font-display text-xl text-gold">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">{t.text}</p>
              </motion.div>
            ))}
            <div className="bg-forest-deep px-7 py-9">
              <p className="text-xs leading-relaxed text-cream/45">
                Themes summarised from publicly available guest ratings. No individual reviews are
                reproduced here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */

export function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow text-bark">About</span>
          <h2 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] text-charcoal sm:text-6xl lg:text-7xl">
            More than a stay.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <figure className="img-zoom h-[320px] lg:h-[520px]">
              <img src={balcony} alt="Seating by a window with Himalayan valley views at The Husky's Lodge, Manali" loading="lazy" className="h-full w-full object-cover" />
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base leading-relaxed text-charcoal/75">
              The Husky&apos;s Lodge And Cafe combines comfortable mountain accommodation with a
              relaxed cafe experience in the scenic Bahang area of Manali.
            </p>
            <div className="mt-9 space-y-6">
              {[
                ["Himalayan Surroundings", "Views of the mountains and valley from almost every angle of the property."],
                ["Cozy Hospitality", "Warm rooms, room service and a 24-hour front desk."],
                ["Mountain Experiences", "Walks, hikes and easy access to the valley's best-loved spots."],
                ["Cafe Culture", "Slow breakfasts and long dinners at The Cafe Husky's-85."],
                ["Convenient Location", "On Jogni Waterfall Road, minutes from Manali."],
              ].map(([t, d]) => (
                <div key={t} className="border-l border-gold/60 pl-5">
                  <h3 className="font-display text-lg text-charcoal">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-charcoal/65">{d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Location ---------------- */

export function Location() {
  return (
    <section id="location" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow text-bark">Location</span>
            <h2 className="rule-gold mt-5 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
              Find us in Bahang
            </h2>
            <address className="mt-9 not-italic">
              <p className="font-display text-2xl text-charcoal">The Husky Lodge and Cafe</p>
              {ADDRESS_LINES.map((l) => (
                <p key={l} className="mt-1 text-base text-charcoal/70">
                  {l}
                </p>
              ))}
            </address>
            <div className="mt-8 space-y-2">
              <a href={CALL_LINK} className="block text-base text-charcoal/80 transition-colors hover:text-gold">
                {PHONE_PRIMARY_DISPLAY}
              </a>
              <a href={`tel:${PHONE_SECONDARY}`} className="block text-base text-charcoal/80 transition-colors hover:text-gold">
                {PHONE_SECONDARY_DISPLAY}
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={DIRECTIONS_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-dark">
                <Navigation className="h-3.5 w-3.5" /> Get Directions
              </a>
              <a href={CALL_LINK} className="btn-base btn-outline-dark">
                <Phone className="h-3.5 w-3.5" /> Call Now
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-gold">
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Us
              </a>
            </div>
            <figure className="img-zoom mt-12 hidden h-56 lg:block">
              <img src={corridor} alt="Corridor inside The Husky's Lodge And Cafe, Manali" loading="lazy" className="h-full w-full object-cover" />
            </figure>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="h-[420px] w-full overflow-hidden border border-charcoal/10 lg:h-full lg:min-h-[560px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.3652277729498!2d77.17895191089487!3d32.27515720935587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390487840f587b0f%3A0x158815d0f4437465!2sThe%20Husky's%20Lodge%20And%20Cafe!5e0!3m2!1sen!2sin!4v1788765913405!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Map showing The Husky's Lodge And Cafe, Bahang, Manali"
                className="h-full w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact CTA ---------------- */

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal py-28 text-cream lg:py-36">
      <img src={lodgeFacade} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/95 via-charcoal/85 to-charcoal" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <span className="eyebrow text-gold">Direct Booking</span>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-6xl">
            Your Himalayan escape starts here.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-cream/70 sm:text-base">
            Planning a stay in Manali? Talk directly with The Husky&apos;s Lodge &amp; Cafe.
          </p>
          <div className="mt-8 flex flex-col items-center gap-2">
            <a href={CALL_LINK} className="font-display text-2xl text-cream transition-colors hover:text-gold">
              {PHONE_PRIMARY_DISPLAY}
            </a>
            <a href={`tel:${PHONE_SECONDARY}`} className="font-display text-2xl text-cream transition-colors hover:text-gold">
              {PHONE_SECONDARY_DISPLAY}
            </a>
          </div>
          <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-gold">
              Book Now
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-outline-light">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Us
            </a>
            <a href={CALL_LINK} className="btn-base btn-outline-light">
              <Phone className="h-3.5 w-3.5" /> Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Hotel information ---------------- */

const INFO = [
  { icon: Star, label: "3-Star Hotel" },
  { icon: Clock, label: "Check-in: 1:00 PM" },
  { icon: Clock, label: "Check-out: 11:00 AM" },
  { icon: Phone, label: "24-Hour Front Desk" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Free Parking" },
  { icon: PawPrint, label: "Pet Friendly" },
];

export function HotelInfo() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <span className="eyebrow text-bark">Hotel Information</span>
        </Reveal>
        <div className="mt-8 grid gap-px border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map((item) => (
            <div key={item.label} className="flex items-center gap-3 bg-cream px-6 py-7">
              <item.icon className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.4} />
              <span className="eyebrow text-[0.58rem] text-charcoal/75">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
