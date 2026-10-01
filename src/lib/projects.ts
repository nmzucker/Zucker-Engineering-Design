import basin from "@/assets/project-basin.jpg";
import bridge from "@/assets/project-bridge.jpg";
import levee from "@/assets/project-levee.jpg";
import pumpstation from "@/assets/project-pumpstation.jpg";
import stream from "@/assets/project-stream.jpg";
import wetland from "@/assets/project-wetland.jpg";

export type Project = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  location: string;
  year: number;
  budget: string;
  role: string;
  summary: string;
  situation: string;
  approach: string;
  outcome: string;
  services: string[];
  stats: { value: string; label: string }[];
  image: string;
  imageAlt: string;
  featured: boolean;
};

export const sectors = [
  "Flood Risk",
  "Drainage & Stormwater",
  "Streams & Habitat",
  "Water Supply & Treatment",
  "Wetlands & Mitigation",
] as const;

export const projects: Project[] = [
  {
    slug: "south-platte-levee",
    title: "South Platte Levee & Floodwall District Upgrade",
    client: "Metro Flood & Water District",
    sector: "Flood Risk",
    location: "Adams County, CO",
    year: 2024,
    budget: "$24.5M",
    role: "Design engineer of record, construction observation",
    summary:
      "Design and permitting for 4.2 miles of levee and floodwall improvements protecting 11,400 residents and a regional wastewater plant.",
    situation:
      "Aging levee reaches had never been certified to current criteria, and two segments sat in a FEMA-identified floodway with no documented freeboard. The district faced rising insurance costs and an unresolved federal hazard-mitigation grant.",
    approach:
      "I ran a two-dimensional HEC-RAS model of the study reach, then paired it with 4.2 miles of boundary and topographic survey to reconstruct the existing ground line. Levee stability, seepage, and freeboard were evaluated reach by reach, and the design was split into a floodwall segment through the urban core and a raised-earth alignment through the park system.",
    outcome:
      "The package supported a DLOMR that the district carried through to a CLOMR and a final federal grant award. Construction is complete through the two highest-priority reaches, with the remaining segments designed and phased for future funding.",
    services: [
      "Floodplain management",
      "Levee design",
      "Two-dimensional hydraulic modeling",
      "Survey",
      "Construction observation",
    ],
    stats: [
      { value: "4.2", label: "miles designed" },
      { value: "11,400", label: "residents protected" },
      { value: "3.5 ft", label: "minimum freeboard" },
    ],
    image: levee,
    imageAlt: "Aerial view of a stone riprap levee running alongside a wide river through a city",
    featured: true,
  },
  {
    slug: "cottonwood-creek-restoration",
    title: "Cottonwood Creek Channel Stability & Restoration",
    client: "County Open Space & Water Quality",
    sector: "Streams & Habitat",
    location: "Boulder County, CO",
    year: 2023,
    budget: "$6.8M",
    role: "Lead designer, permitting lead",
    summary:
      "Grade control, bank stabilization, and habitat restoration across 2.4 miles of an incised urban creek that was migrating laterally into trail infrastructure.",
    situation:
      "Decades of upstream urbanization pushed peak flows higher and faster. The creek responded by incising five feet and then failing banks into a county trail, two irrigation diversions, and a residential edge.",
    approach:
      "A sediment transport and geomorphic assessment set the target grade. I designed a series of rock vanes, root-wad toe protectors, and three constricted habitat pools keyed to that grade, then specified live-stake plantings so the banks would hold while the vegetation established.",
    outcome:
      "The restored reach held a two-year event within six weeks of planting and a five-year event the following spring. Bank retreat has stopped at the three critical sites and the county's trail maintenance costs dropped by roughly a third.",
    services: [
      "Stream restoration",
      "Geomorphology",
      "Instream flow assessment",
      "404/401 permitting",
      "Bioengineering",
    ],
    stats: [
      { value: "2.4", label: "miles restored" },
      { value: "5 ft", label: "grade stabilized" },
      { value: "3", label: "habitat pools" },
    ],
    image: stream,
    imageAlt: "Rock vanes and cobble grade control in a restored shallow mountain stream",
    featured: true,
  },
  {
    slug: "raptor-ridge-drainage",
    title: "Raptor Ridge Master Drainage & Detention",
    client: "Raptor Ridge Metropolitan District",
    sector: "Drainage & Stormwater",
    location: "Fort Collins, CO",
    year: 2025,
    budget: "$11.2M",
    role: "Master drainage plan, design, NPDES coordination",
    summary:
      "A 480-acre master drainage plan and staged conveyance design that let a district build out in three phases without redoing the hydrology.",
    situation:
      "The district's preliminary plat predated the current detention criteria, and the downstream receiving channel had a documented capacity shortfall that would have stalled phase two.",
    approach:
      "I built a single HEC-HMS / HEC-RAS framework covering all three phases with agreed-upon imperviousness endpoints, so every future submittal reused the same model. Water quality was met with a treatment train of bioswales feeding a dual-cell detention basin rather than a single large pond.",
    outcome:
      "Phase one permitted in a single review cycle. The framework was accepted by the city and the state as the reference model for the remaining phases, removing an estimated nine months of re-analysis from the district's schedule.",
    services: [
      "Drainage master planning",
      "Detention & water quality design",
      "Hydrologic modeling",
      "Erosion & sediment control",
      "Regulatory coordination",
    ],
    stats: [
      { value: "480", label: "acres planned" },
      { value: "3", label: "build phases" },
      { value: "0", label: "model re-runs" },
    ],
    image: basin,
    imageAlt:
      "Vegetated stormwater detention basin with sculpted native grass swales and a concrete outlet structure",
    featured: true,
  },
  {
    slug: "silver-creek-intake",
    title: "Silver Creek Raw Water Intake & Pump Station",
    client: "Regional Water Authority",
    sector: "Water Supply & Treatment",
    location: "Salt Lake County, UT",
    year: 2022,
    budget: "$18.9M",
    role: "Civil/structural design, hydraulic design support",
    summary:
      "A screened raw-water intake, 36-inch transmission main, and 22 MGD pump station replacing a flood-damaged diversion.",
    situation:
      "A spring high-water event took out the authority's legacy diversion weir and left the system on a single unverified pipeline while a new treatment train was under design.",
    approach:
      "The intake was sited against scour and drift-transport analysis, then designed as a buried-screen configuration with a low-profile headwall so it would read as a river feature rather than a structure. Pump station layout was fixed against future treatment expansion, with clearwell phasing and a redundant electrical service.",
    outcome:
      "The station energized on schedule and passed its performance test at 22 MGD with headroom. The intake has now carried three high-water events without debris damage or lost service days.",
    services: [
      "Pump station design",
      "Pipeline design",
      "Scour analysis",
      "Facilities planning",
      "Permitting",
    ],
    stats: [
      { value: "22", label: "MGD capacity" },
      { value: "36 in", label: "transmission main" },
      { value: "3", label: "floods carried" },
    ],
    image: pumpstation,
    imageAlt:
      "Stainless steel pipework and valve assemblies at a water pump and treatment station exterior",
    featured: true,
  },
  {
    slug: "bitterroot-bridge-scour",
    title: "Bitterroot River Bridge Hydraulics & Scour",
    client: "State Department of Transportation",
    sector: "Streams & Habitat",
    location: "Missoula County, MT",
    year: 2024,
    budget: "$2.1M",
    role: "Hydraulic & scour report, permitting support",
    summary:
      "River hydraulics, scour analysis, and permitting for a 620-foot bridge replacement on a braided, gravel-bed river.",
    situation:
      "The river moves. The existing structure was hydraulically inefficient, the channel had migrated roughly 140 feet since the original survey, and the project had to clear state and federal review on a fixed schedule.",
    approach:
      "I reconstructed thalweg position from thirty years of aerial imagery, built a one-dimensional model checked against a localized two-dimensional mesh, and ran the full scour suite. The report recommended a longer span with armored toe protection keyed into the downstream alignment.",
    outcome:
      "The design was permitted without a compensatory-mitigation condition, and the recommended span was adopted by the transportation department's replacement program.",
    services: [
      "River hydraulics",
      "Scour analysis",
      "Channel migration study",
      "Regulatory permitting",
    ],
    stats: [
      { value: "620 ft", label: "structure length" },
      { value: "30 yr", label: "of thalweg data" },
      { value: "0", label: "mitigation required" },
    ],
    image: bridge,
    imageAlt: "Steel girder bridge under construction over a wide braided river",
    featured: false,
  },
  {
    slug: "willow-flats-mitigation",
    title: "Willow Flats Wetland Mitigation Bank",
    client: "Western Wetland Mitigation Bank",
    sector: "Wetlands & Mitigation",
    location: "Treasure Valley, ID",
    year: 2021,
    budget: "$4.4M",
    role: "Design, instrumentation, performance reporting",
    summary:
      "Design and long-term instrumentation for a 96-acre freshwater mitigation bank serving corridor projects across the valley.",
    situation:
      "The bank needed to produce durable, defensible credits on ground that had been farmed for eighty years, with a water budget that could not rely on a single source.",
    approach:
      "I re-graded the field into a mosaic of shallow cells with controlled inlet and outlet structures, then instrumented the site with monitoring wells, staff gauges, and a flow-control regime that could be adjusted seasonally. Vegetation was specified as native emergent mixes with an establishment-year water management plan.",
    outcome:
      "The bank reached its final performance criteria two years early, and the monitoring record became the reference dataset for the sponsor's next two sites.",
    services: [
      "Wetland design",
      "Water budget analysis",
      "Instrumentation & monitoring",
      "Performance reporting",
    ],
    stats: [
      { value: "96", label: "acres established" },
      { value: "2 yr", label: "early to final" },
      { value: "11", label: "monitoring wells" },
    ],
    image: wetland,
    imageAlt: "Constructed freshwater wetland cells with vegetated berms and a low rock dam",
    featured: false,
  },
];

export const projectMatches = (project: Project, query: string) => {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return [
    project.title,
    project.client,
    project.sector,
    project.location,
    project.summary,
    project.services.join(" "),
  ]
    .join(" ")
    .toLowerCase()
    .includes(q);
};

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export const relatedProjects = (project: Project, count = 2) => {
  const sameSector = projects.filter(
    (p) => p.slug !== project.slug && p.sector === project.sector,
  );
  const others = projects.filter(
    (p) => p.slug !== project.slug && p.sector !== project.sector,
  );
  return [...sameSector, ...others].slice(0, count);
};
