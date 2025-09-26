import {
  Rocket,
  Users,
  FolderKanban,
  CreditCard,
  ClipboardCheck,
} from "lucide-react";

// Home Page
export const clientLogos = [
  { src: "/logos/slack.svg", alt: "Slack", size: null },
  { src: "/logos/asana.svg", alt: "Asana", size: null },
  { src: "/logos/trello.svg", alt: "Trello", size: null },
  { src: "/logos/jira.svg", alt: "Jira", size: null },
  { src: "/logos/notion.svg", alt: "Notion", size: null },
  { src: "/logos/figma.svg", alt: "Figma", size: null },
  { src: "/logos/microsoft-teams.svg", alt: "Microsoft Teams", size: null },
  { src: "/logos/zoom.svg", alt: "Zoom", size: null },
  { src: "/logos/dropbox.svg", alt: "Dropbox", size: null },
  { src: "/logos/adobe.svg", alt: "adobe", size: null },
  { src: "/logos/uber.svg", alt: "uber", size: "h-15 md:h-16" },
  { src: "/logos/aws.svg", alt: "aws", size: "h-14 md:h-18" },
  { src: "/logos/ibm.svg", alt: "IBM", size: "h-15 md:h-16" },
];

export const featureCards = [
  {
    title: "Startups & Small Businesses",
    content:
      "Simplify task tracking, deadlines, and team communication so you can focus on growth.",
    icon: Rocket,
  },
  {
    title: "Remote & Distributed Teams",
    content:
      "Keep everyone aligned with real-time collaboration, file sharing, and progress visibility.",
    icon: Users,
  },
  {
    title: "Agencies & Freelancers",
    content:
      "Manage multiple clients, projects, and deliverables from one central dashboard.",
    icon: FolderKanban,
  },
];

export const statsCards = [
  {
    title: "Projects Managed",
    value: "12K+",
    icon: FolderKanban,
  },
  {
    title: "Active Teams",
    value: "3.5K+",
    icon: Users,
  },
  {
    title: "Tasks Completed",
    value: "850K+",
    icon: ClipboardCheck,
  },
  {
    title: "Payments Processed",
    value: "$2.3M+",
    icon: CreditCard,
  },
];
