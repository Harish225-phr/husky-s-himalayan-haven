import { MessageCircle, Phone } from "lucide-react";
import {
  ADDRESS_LINES,
  CALL_LINK,
  NAV_LINKS,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY,
  PHONE_SECONDARY_DISPLAY,
  WHATSAPP_LINK,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-forest-deep pb-28 pt-20 text-cream lg:pb-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <span className="block font-display text-2xl tracking-[0.24em]">THE HUSKY&apos;S</span>
            <span className="eyebrow mt-2 block text-[0.6rem] text-gold">Lodge &amp; Cafe</span>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/60">
              A 3-star Himalayan lodge and multi-cuisine cafe in Bahang, Manali.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-y-3">
            {NAV_LINKS.filter((l) => l.label !== "About").map((l) => (
              <a key={l.href} href={l.href} className="eyebrow text-[0.6rem] text-cream/70 transition-colors hover:text-gold">
                {l.label}
              </a>
            ))}
          </nav>

          <div>
            <address className="not-italic text-sm leading-relaxed text-cream/60">
              {ADDRESS_LINES.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <div className="mt-5 space-y-1 text-sm">
              <a href={CALL_LINK} className="block text-cream/80 hover:text-gold">
                {PHONE_PRIMARY_DISPLAY}
              </a>
              <a href={`tel:${PHONE_SECONDARY}`} className="block text-cream/80 hover:text-gold">
                {PHONE_SECONDARY_DISPLAY}
              </a>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-gold mt-6">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Booking
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm italic text-cream/55">Made for mountain mornings &amp; cozy nights.</p>
          <p className="eyebrow text-[0.55rem] text-cream/40">
            © {new Date().getFullYear()} The Husky&apos;s Lodge And Cafe, Manali
          </p>
        </div>
      </div>
    </footer>
  );
}

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-cream/10 lg:hidden">
      <a href={CALL_LINK} className="btn-base !rounded-none bg-charcoal !py-4 text-cream">
        <Phone className="h-3.5 w-3.5" /> Call
      </a>
      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-base btn-gold !rounded-none !py-4">
        <MessageCircle className="h-3.5 w-3.5" /> Book Now
      </a>
    </div>
  );
}
