export const firm = {
  name: "Zucker Engineering & Design",
  short: "Zucker",
  tagline: "Water resources engineering, from first survey to final permit.",
  founded: 2009,
  teamSize: "48",
  phone: "(303) 555-0142",
  email: "studio@zuckerengineering.com",
  offices: [
    {
      city: "Denver",
      role: "Headquarters",
      address: ["1420 Wewatta Street, Suite 610", "Denver, CO 80202"],
      phone: "(303) 555-0142",
    },
    {
      city: "Boise",
      role: "Snake River office",
      address: ["850 W. Bannock Street, Suite 320", "Boise, ID 83702"],
      phone: "(208) 555-0177",
    },
  ],
  licensedIn: ["CO", "UT", "WY", "MT", "ID", "NM", "NE"],
  stats: [
    { value: "17", label: "Years in practice" },
    { value: "640+", label: "Projects delivered" },
    { value: "9", label: "States licensed" },
    { value: "48", label: "Engineers & scientists" },
  ],
};

export const nav = [
  { to: "/about", label: "About" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/projects", label: "Projects" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export const capabilities = [
  {
    slug: "flood-risk",
    title: "Flood Risk & Hazard Mitigation",
    lede: "Floodplain mapping, hazard mitigation planning, and levee and floodwall design that holds up under scrutiny.",
    items: [
      "FEMA CLOMR / DLOMR submittals",
      "Levee, floodwall & diversion design",
      "Floodplain management & mapping",
      "Hazard mitigation (HMGP, BRIC)",
      "Levee risk assessments (USACE ER 1105-2-8)",
    ],
    metric: "31 CLOMR/DLOMR packages accepted",
  },
  {
    slug: "drainage-stormwater",
    title: "Drainage & Stormwater",
    lede: "Master drainage plans, conveyance design, and regulatory permitting for growing jurisdictions and developers.",
    items: [
      "Drainage area & master planning",
      "Detention, retention & water quality",
      "MS4 & municipal separate storm programs",
      "Hydrologic & hydraulic modeling",
      "Erosion & sediment control",
    ],
    metric: "1,900 acres of drainage modeled",
  },
  {
    slug: "streams-habitat",
    title: "Streams, Rivers & Habitat",
    lede: "Geomorphology, channel stability, and restoration design that keeps a river where you want it.",
    items: [
      "Channel stability & grade control",
      "Stream restoration & bioengineering",
      "Instream flow & habitat assessment",
      "404 / 401 & Corps of Engineers permitting",
      "River engineering & scour analysis",
    ],
    metric: "22 miles of stream restored",
  },
  {
    slug: "water-supply",
    title: "Water Supply & Treatment",
    lede: "Source to tap: supply planning, raw-water conveyance, treatment sizing, and pump station design.",
    items: [
      "Water supply & demand modeling",
      "Intake, raw-water & pipeline design",
      "Treatment concept & facilities planning",
      "Pump station & lift station design",
      "Water loss & pressure zone studies",
    ],
    metric: "$140M in facilities planned",
  },
  {
    slug: "water-resources-planning",
    title: "Water Resources Planning",
    lede: "The long-horizon work: basin studies, drought contingency, and the data behind the decision.",
    items: [
      "Basin & watershed assessments",
      "Drought contingency planning",
      "Flood insurance studies & maps",
      "Climate & land-use sensitivity work",
      "GIS, remote sensing & data delivery",
    ],
    metric: "14 basin-wide studies",
  },
  {
    slug: "construction-services",
    title: "Construction & Field Services",
    lede: "We stay through construction. Observation, survey, and field decisions that protect the design intent.",
    items: [
      "Construction observation & representation",
      "Boundary, topographic & as-built survey",
      "Permit compliance & inspection",
      "Flow monitoring & gaging",
      "Post-construction performance reporting",
    ],
    metric: "96% on-budget change-order rate",
  },
] as const;

export const values = [
  {
    title: "Engineer the whole system",
    body: "A culvert is a hydrology question, a permitting question, and a budget question at the same time. We design for all three rather than the easiest one.",
  },
  {
    title: "Say the hard thing early",
    body: "If a channel will migrate or a detention pond will fail, you hear it in the concept review, not in the construction email.",
  },
  {
    title: "Own it through construction",
    body: "The team that draws it is in the field when it is built. Design intent survives the walk-down.",
  },
  {
    title: "Leave the water better",
    body: "Flood protection and habitat are one project, not two. We look for the alignment that serves both.",
  },
] as const;

export const differentiators = [
  {
    title: "Senior-led project teams",
    body: "A licensed engineer who knows your basin stays on the account from proposal through closeout. You will not meet the team only at the final meeting.",
  },
  {
    title: "Model, then defend",
    body: "Every design number is reproducible. We hand over the model, the assumptions, and the calibration notes with the stamped drawings.",
  },
  {
    title: "One firm, one package",
    body: "Hydrology, hydraulics, survey, civil design, and permitting under one roof, so nothing is lost between the disciplines.",
  },
] as const;
