export const firm = {
  name: "Zucker Engineering & Design",
  short: "Zucker",
  tagline: "Company tagline placeholder — one sentence describing what the firm does.",
  founded: 2018,
  principal: {
    name: "Adam Zucker, PE",
    role: "Founder & Principal Engineer",
    bio: "Bio placeholder — a short paragraph about Adam's background, experience, and the kinds of projects the firm takes on.",
    focus: [
      "Focus area one",
      "Focus area two",
      "Focus area three",
      "Focus area four",
      "Focus area five",
    ],
  },
  phone: "(000) 000-0000",
  email: "email@example.com",
  office: {
    city: "Portland",
    region: "Oregon",
    role: "Principal office",
    serviceArea: "Service area placeholder — e.g. Serving the Pacific Northwest from Portland",
    phone: "(000) 000-0000",
  },
  licensedIn: ["OR", "WA"],
  stats: [
    { value: "8", label: "Years in practice" },
    { value: "0", label: "States licensed" },
    { value: "1", label: "Principal on every project" },
  ],
} as const;

export const nav = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

/** Options for the "What do you need?" field on the contact form. */
export const needs = [
  "Service category one",
  "Service category two",
  "Service category three",
  "Service category four",
  "Service category five",
  "Service category six",
] as const;

export const values = [
  {
    title: "Value one",
    body: "Value description placeholder — one or two sentences about how the firm works or what it believes.",
  },
  {
    title: "Value two",
    body: "Value description placeholder — one or two sentences about how the firm works or what it believes.",
  },
  {
    title: "Value three",
    body: "Value description placeholder — one or two sentences about how the firm works or what it believes.",
  },
  {
    title: "Value four",
    body: "Value description placeholder — one or two sentences about how the firm works or what it believes.",
  },
] as const;

export const differentiators = [
  {
    title: "Differentiator one",
    body: "Differentiator placeholder — one or two sentences about what sets the firm apart.",
  },
  {
    title: "Differentiator two",
    body: "Differentiator placeholder — one or two sentences about what sets the firm apart.",
  },
  {
    title: "Differentiator three",
    body: "Differentiator placeholder — one or two sentences about what sets the firm apart.",
  },
] as const;
