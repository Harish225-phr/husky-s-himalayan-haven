export const PHONE_PRIMARY = "+917301150001";
export const PHONE_SECONDARY = "+918278868107";
export const PHONE_PRIMARY_DISPLAY = "+91 73011 50001";
export const PHONE_SECONDARY_DISPLAY = "+91 82788 68107";

export const WHATSAPP_MESSAGE =
  "Hi, I would like to enquire about staying at The Husky's Lodge And Cafe, Manali. Please share room availability, rates and booking details.";

export const WHATSAPP_LINK = `https://wa.me/${PHONE_PRIMARY.replace("+", "")}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const CALL_LINK = `tel:${PHONE_PRIMARY}`;

export const DIRECTIONS_LINK =
  "https://www.google.com/maps/dir/?api=1&destination=The+Husky%27s+Lodge+And+Cafe%2C+Bahang%2C+Manali%2C+Himachal+Pradesh+175103";

export const ADDRESS_LINES = [
  "85, Bahang,",
  "Jogni Waterfall Road,",
  "Manali, Himachal Pradesh 175103",
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Stay", href: "#stay" },
  { label: "Cafe", href: "#cafe" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];
