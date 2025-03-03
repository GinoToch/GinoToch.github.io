import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gino stock",
  initials: "GS",
  url: "https://ginostock.nl;",
  location: "Kerkrade, NL",
  locationLink: "https://www.google.com/maps/place/kerkrade",
  description:
    "Ik vind technologie, probleemoplossing en continue groeien leuk. Buiten software engineering houd ik van muziek, sporten, en auto's!🏎️🎶🏋️",
  summary:
    "Ik ben mijn reis begonnen op het MBO in Heerlen als applicatieontwikkelaar en nu ben ik aan het afstuderen bij Fontys als Software Engineer. Onderweg heb ik de kans gehad om aan verschillende nevenprojecten voor mensen en bedrijven te werken, waardoor ik waardevolle ervaring heb opgedaan en mijn vaardigheden heb aangescherpt. 💻🔧",
  avatarUrl: "/me.png",
  skills: [
    "C#",
    "Python",
    "Go",
    "Node.js",
    "Docker",
    "Kubernetes",
    "React",
    "Next.js",
    "Typescript",
    "Postgres",
    "Java",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ginostock@outlook.cpom",
    tel: "+31 6 83 44 75 13",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://Github.com/GinoToch",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gino-stock-a81b981b9/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discord.com/users/155652890281639936",
        icon: Icons.discord,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/g.in.o",
        icon: Icons.instagram,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:ginostock@outlook.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Ivengi International BV",
      href: "https://www.ivengi.com/",
      badges: [],
      location: "Maastricht",
      title: "Software engineer Stagiair",
      logoUrl: "/atomic.png",
      start: "Feb 2025",
      end: "Jul 2025",
      description:
        "Ontwikkeld en geïmplementeerd een geïntegreerde aanwezigheids- en verlofmodule binnen de Ivengi-applicatie. Naadloze Microsoft 365 Excel-integratie voor real-time dataverwerking. Gebruikt Node.js en een intuïtieve frontend voor medewerkers en HR. Agile ontwikkeld met iteratieve sprints. Uitgebreide testing en automatische goedkeuringsprocessen zorgen voor efficiëntere personeelsplanning. 🚀",
    },
    {
      company: "Code Monsters Kerkrade",
      badges: [],
      href: "https://www.escaperoomkerkrade.nl/nl/",
      location: "Kerkreade",
      title: "Teamleider",
      logoUrl: "/shopify.svg",
      start: "Maart 2016",
      end: "Heden",
      description:
        "Dit is de bijbaan die ik sinds de middelbare school heb. Mijn taken zijn onder andere het ontvangen van klanten, ons systeem uitleggen en de klanten begeleiden in hun proces. 🎮",
    },
    {
      company: "Mediaan",
      href: "https://www.conclusion.nl/mediaan",
      badges: [],
      location: "Heerlen",
      title: "Software Engineer Stagiair",
      logoUrl: "/mediaan.png",
      start: "Juli 2023",
      end: "Januari 2024",
      description:
        "Tijdens deze stage heb ik voor Mediaan een interne software ontwikkeld die het mogelijk maakt om reserveringen te maken voor verschillende ruimtes binnen het bedrijf, of een flex werkplek te reserveren. 📚",
    },
    {
      company: "Vista College",
      href: "https://vistacollege.nl/",
      badges: [],
      location: "Heerlen",
      title: "Software Engineer Docent",
      logoUrl: "/vista.webp",
      start: "January 2020",
      end: "April 2020",
      description:
        "Tijdens deze stage periode had ik de kans om eerste jaars les te geven in Angular. Ik heb ze geleerd hoe ze een Angular applicatie kunnen bouwen en hoe ze deze kunnen deployen. 📚",
    },
  ],
  education: [
    {
      school: "Fontys Hogeschool",
      href: "https://fontys.nl/",
      degree: "Bachelor",
      logoUrl: "/buildspace.webp",
      start: "2021",
      end: "2025",
    },
    {
      school: "Vista College",
      href: "https://vistacollege.nl/",
      degree: "MBO niveau 4",
      logoUrl: "/vista.webp",
      start: "2018",
      end: "2021",
    },
    {
      school: "Grotius College",
      href: "https://www.grotius-lvo.nl/nl/",
      degree: "Mavo diploma",
      logoUrl: "/grotius.jpg",
      start: "2014",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Met de release van de [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), besloot ik een SaaS te bouwen waarmee gebruikers e-mailadressen kunnen verzamelen van hun GPT-gebruikers. Dit is een geweldige manier om een publiek op te bouwen en uw GPT API-gebruik te monetariseren.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "ChatGood.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Een logging en analytics platform voor OpenAI: Log je ChatGPT API verzoeken, analyseer de kosten en verbeter je prompts.",
      technologies: [
        "Next.js",
        "C#",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "CMS",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Een CMS voor AI startups gemaakt waardoor snel en eenvoudig content kan worden toegevoegd en aangepast.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    
  ],
} as const;
