export const firm = {
  name: "Zucker Engineering & Design",
  short: "Zucker",
  tagline: "Water resources engineering, from first survey to final permit.",
  founded: 2018,
  principal: {
    name: "Adam Zucker, PE",
    role: "Founder & Principal Engineer",
    bio: "Licensed professional engineer with years of water resources practice across Oregon and the Pacific Northwest, working floodplain, drainage, stream, and water supply projects for cities, counties, districts, and state agencies.",
    focus: [
      "Floodplain management & levee design",
      "Drainage & stormwater planning",
      "Stream restoration & geomorphology",
      "Water supply, intake & pump station design",
      "Regulatory strategy & permitting",
    ],
  },
  phone: "(503) 555-0142",
  email: "studio@zuckerengineering.com",
  office: {
    city: "Portland",
    region: "Oregon",
    role: "Principal office",
    serviceArea: "Serving the Pacific Northwest from Portland",
    phone: "(503) 555-0142",
  },
  licensedIn: ["OR", "WA"],
  stats: [
    { value: "8", label: "Years in practice" },
    { value: "2", label: "States licensed" },
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
  "Flood risk & hazard mitigation",
  "Drainage & stormwater",
  "Streams, rivers & habitat",
  "Water supply & treatment",
  "Water resources planning",
  "Construction & field services",
] as const;

export const values = [
  {
    title: "Engineer the whole system",
    body: "A culvert is a hydrology question, a permitting question, and a budget question at the same time. The design has to answer all three, not just the easiest one.",
  },
  {
    title: "Say the hard thing early",
    body: "If a channel will migrate or a detention pond will fail, you hear it in the concept review, not in the construction email.",
  },
  {
    title: "Own it through construction",
    body: "The person who drew it is the person standing on the bank when it is built. Design intent survives the walk-down.",
  },
  {
    title: "Leave the water better",
    body: "Flood protection and habitat are one project, not two. The best alignment is the one that serves both.",
  },
] as const;

export const differentiators = [
  {
    title: "One principal, one point of contact",
    body: "The engineer who walks the site is the engineer who runs the model, draws the plan, and answers the reviewer. No handoff to a project manager you never met.",
  },
  {
    title: "Model, then defend",
    body: "Every design number is reproducible. The model, the assumptions, and the calibration notes come over with the stamped drawings.",
  },
  {
    title: "Small enough to be accountable",
    body: "There is no queue to fall into and no junior team learning on your schedule. When something needs a decision the same week, it gets one.",
  },
] as const;
