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
  "Sector One",
  "Sector Two",
  "Sector Three",
  "Sector Four",
  "Sector Five",
] as const;

const filler = {
  summary:
    "Project summary placeholder — replace with one or two sentences describing the scope of this project and what it delivered.",
  situation:
    "Situation placeholder — describe the problem the client was facing before this project began. What was failing, at risk, or unresolved? Two to three sentences.",
  approach:
    "Approach placeholder — describe how the work was done: the analysis, modeling, design decisions, and methods used. Two to three sentences.",
  outcome:
    "Outcome placeholder — describe the result: what was built, permitted, or resolved, and what changed for the client. Two to three sentences.",
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project Title One",
    client: "Client Name",
    sector: "Sector One",
    location: "City, State",
    year: 2024,
    budget: "$X.XM",
    role: "Role on project",
    summary: filler.summary,
    situation: filler.situation,
    approach: filler.approach,
    outcome: filler.outcome,
    services: ["Service one", "Service two", "Service three", "Service four"],
    stats: [
      { value: "000", label: "stat label" },
      { value: "000", label: "stat label" },
      { value: "000", label: "stat label" },
    ],
    image: levee,
    imageAlt: "Project photo placeholder",
    featured: true,
  },
  {
    slug: "project-two",
    title: "Project Title Two",
    client: "Client Name",
    sector: "Sector Two",
    location: "City, State",
    year: 2023,
    budget: "$X.XM",
    role: "Role on project",
    summary: filler.summary,
    situation: filler.situation,
    approach: filler.approach,
    outcome: filler.outcome,
    services: ["Service one", "Service two", "Service three", "Service four"],
    stats: [
      { value: "000", label: "stat label" },
      { value: "000", label: "stat label" },
      { value: "000", label: "stat label" },
    ],
    image: stream,
    imageAlt: "Project photo placeholder",
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Title Three",
    client: "Client Name",
    sector: "Sector Three",
    location: "City, State",
    year: 2025,
    budget: "$X.XM",
    role: "Role on project",
    summary: filler.summary,
    situation: filler.situation,
    approach: filler.approach,
    outcome: filler.outcome,
    services: ["Service one", "Service two", "Service three", "Service four"],
    stats: [
      { value: "000", label: "stat label" },
      { value: "000", label: "stat label" },
      { value: "000", label: "stat label" },
    ],
    image: basin,
    imageAlt: "Project photo placeholder",
    featured: true,
  },
  {
    slug: "project-four",
    title: "Project Title Four",
    client: "Client Name",
    sector: "Sector Four",
    location: "City, State",
    year: 2022,
    budget: "$X.XM",
    role: "Role on project",
    summary: filler.summary,
    situation: filler.situation,
    approach: filler.approach,
    outcome: filler.outcome,
    services: ["Service one", "Service two", "Service three", "Service four"],
    stats: [
      { value: "000", label: "stat label" },
      { value: "000", label: "stat label" },
      { value: "000", label: "stat label" },
    ],
    image: pumpstation,
    imageAlt: "Project photo placeholder",
    featured: true,
  },
  {
    slug: "project-five",
    title: "Project Title Five",
    client: "Client Name",
    sector: "Sector Two",
    location: "City, State",
    year: 2024,
    budget: "$X.XM",
    role: "Role on project",
    summary: filler.summary,
    situation: filler.situation,
    approach: filler.approach,
    outcome: filler.outcome,
    services: ["Service one", "Service two", "Service three", "Service four"],
    stats: [
      { value: "000", label: "stat label" },
      { value: "000", label: "stat label" },
      { value: "000", label: "stat label" },
    ],
    image: bridge,
    imageAlt: "Project photo placeholder",
    featured: false,
  },
  {
    slug: "project-six",
    title: "Project Title Six",
    client: "Client Name",
    sector: "Sector Five",
    location: "City, State",
    year: 2021,
    budget: "$X.XM",
    role: "Role on project",
    summary: filler.summary,
    situation: filler.situation,
    approach: filler.approach,
    outcome: filler.outcome,
    services: ["Service one", "Service two", "Service three", "Service four"],
    stats: [
      { value: "000", label: "stat label" },
      { value: "000", label: "stat label" },
      { value: "000", label: "stat label" },
    ],
    image: wetland,
    imageAlt: "Project photo placeholder",
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
