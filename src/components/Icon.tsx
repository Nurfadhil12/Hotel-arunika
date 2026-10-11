import type { ReactNode } from "react";

export type IconName =
  | "wifi"
  | "pool"
  | "spa"
  | "restaurant"
  | "library"
  | "parking"
  | "shuttle"
  | "breakfast"
  | "bed"
  | "guests"
  | "size"
  | "star"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "whatsapp"
  | "instagram"
  | "arrow-right"
  | "check"
  | "check-circle"
  | "menu"
  | "close"
  | "quote"
  | "leaf"
  | "snowflake"
  | "sun"
  | "sparkle"
  | "calendar"
  | "bell"
  | "car";

const paths: Record<IconName, ReactNode> = {
  wifi: (
    <>
      <path d="M2.5 8.8a15 15 0 0 1 19 0" />
      <path d="M5.8 12.3a10.5 10.5 0 0 1 12.4 0" />
      <path d="M9 15.8a5.6 5.6 0 0 1 6 0" />
      <circle cx="12" cy="19" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  pool: (
    <>
      <path d="M2 17.5c2 0 2.6-1.2 4.6-1.2s2.6 1.2 4.6 1.2 2.6-1.2 4.6-1.2 2.6 1.2 5.2 1.2" />
      <path d="M7 12.5V6.2a2 2 0 0 1 4 0M7 9.4h4M13.5 13V8a2 2 0 0 1 4 0M13.5 10.6h4" />
    </>
  ),
  spa: (
    <>
      <path d="M12 20.5c0-6.6 3.4-11 8.5-12.2 0 6.6-3.4 11-8.5 12.2Z" />
      <path d="M12 20.5C12 13.9 8.6 9.5 3.5 8.3c0 6.6 3.4 11 8.5 12.2Z" />
    </>
  ),
  restaurant: (
    <>
      <path d="M7 3v7.5a2 2 0 0 0 4 0V3M9 10.5V21" />
      <path d="M16.5 3c-1.4 2.1-1.4 4.9 0 6.6V21" />
    </>
  ),
  library: (
    <>
      <path d="M4.5 5.5A2 2 0 0 1 6.5 3.5H19v17H6.5a2 2 0 0 1-2-2z" />
      <path d="M8.5 3.5v17" />
    </>
  ),
  parking: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M10 17V7.5h3.2a3 3 0 0 1 0 6H10" />
    </>
  ),
  shuttle: (
    <>
      <path d="M4 17.5h16M4.5 17.5v-4.2l2.2-5h10.6l2.2 5v4.2" />
      <path d="M4.5 13.3h15" />
      <circle cx="8" cy="18.6" r="1.5" />
      <circle cx="16" cy="18.6" r="1.5" />
    </>
  ),
  breakfast: (
    <>
      <path d="M4 8.5h11v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M15 10h2.2a2.6 2.6 0 0 1 0 5.2H15" />
      <path d="M3.5 21.5h13" />
    </>
  ),
  bed: (
    <>
      <path d="M3 18.5v-7h14a4 4 0 0 1 4 4v3" />
      <path d="M3 11.5V6M21 18.5V21M3 18.5h18" />
      <path d="M6.5 11.5V9h5v2.5" />
    </>
  ),
  guests: (
    <>
      <path d="M15.5 19.5v-1.2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1.2" />
      <circle cx="9.2" cy="7.2" r="3.4" />
      <path d="M21 19.5v-1.2a4 4 0 0 0-3-3.8M16.2 4a3.4 3.4 0 0 1 0 6.5" />
    </>
  ),
  size: (
    <>
      <path d="M4 9.5V4h5.5M20 14.5V20h-5.5M14.5 4H20v5.5M9.5 20H4v-5.5" />
    </>
  ),
  star: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 3.6l2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.8-5.1 2.8 1-5.7-4.1-4 5.7-.8z"
    />
  ),
  phone: (
    <path d="M6.2 3.5h3.1l1.6 4.2-2.1 1.5a12.4 12.4 0 0 0 5.9 5.9l1.5-2.1 4.2 1.6v3.1a1.8 1.8 0 0 1-1.9 1.8A16.4 16.4 0 0 1 4.4 5.4a1.8 1.8 0 0 1 1.8-1.9Z" />
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 7.2l8 5.6 8-5.6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-5.6 7-11.2A7 7 0 0 0 5 10.3c0 5.6 7 11.2 7 11.2Z" />
      <circle cx="12" cy="10.2" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.5 20.5l4.4-1.2A8.4 8.4 0 1 0 12 3.5Z" />
      <path d="M9.3 8.6c.3 2.4 2.1 4.2 4.5 4.5l.9-1.2 2 .9v1.6c0 .6-.5 1-1.1 1-3.7-.4-6.4-3.2-6.7-6.8 0-.6.4-1.1 1-1.1h1.5z" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  "arrow-right": <path d="M4.5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.8l4.4 4.4L19 7.6" />,
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="8.7" />
      <path d="M8.3 12.4l2.6 2.6 4.8-5.4" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />,
  quote: (
    <path d="M9.5 6.5H4.5v5h5v6h-5M19.5 6.5h-5v5h5v6h-5" />
  ),
  leaf: (
    <>
      <path d="M4 20c0-8 5-13 16-13 0 8-5 13-16 13Z" />
      <path d="M4 20c3-5 6.5-8.5 11.5-11" />
    </>
  ),
  snowflake: <path d="M12 3v18M4.6 7.2l14.8 9.6M19.4 7.2L4.6 16.8" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.2 5.2l1.9 1.9M16.9 16.9l1.9 1.9M18.8 5.2l-1.9 1.9M7.1 16.9l-1.9 1.9" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.9 5.4L19.3 10l-5.4 1.6L12 17l-1.9-5.4L4.7 10l5.4-1.6z" />
      <path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  bell: (
    <>
      <path d="M3 18.5h18" />
      <path d="M5 18.5a7 7 0 0 1 14 0" />
      <path d="M12 11.5V8.8M9.5 8.8h5" />
    </>
  ),
  car: (
    <>
      <path d="M4 17.5h16M4.5 17.5v-4l2-5.5h11l2 5.5v4" />
      <circle cx="8" cy="18.6" r="1.5" />
      <circle cx="16" cy="18.6" r="1.5" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.4,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
