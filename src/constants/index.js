import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ellipsis,
  colabo,
  starbucks,
  tesla,
  cisco,
  polar,
  // shoppingCart,
  // puzzleMaker,
  lifeismusic,
  gyg,
  aiPhilosophy,
  mangaScrapper,
  issueTracker,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "feeback",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack AI Engineer",
    icon: web,
  },
  {
    title: "Python & FastAPI",
    icon: backend,
  },
  {
    title: "LLM & AI Applications",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Ellipsis Drive",
    icon: ellipsis,
    iconBg: "#383E56",
    date: "Jan 2022 - Jun 2023",
    points: [
      "Strong focus on user experience (UX/UI)",
      "Developing core features of the company website in ReactJS",
      "creating spatial maps and graphs to payment and producing invoices.",
      "I was responsible for enhancing the platform's usability and performance",
      "Taking a major part in meetings and influencing the whole design and development process.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Polar",
    icon: polar,
    iconBg: "#383E56",
    date: "Aug 2021 - Nov 2021",
    points: [
      "Taking charge of implementing several pages of the website and app",
      "Maintaining legacy code and tests building",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Colabo",
    icon: colabo,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - May 2020",
    points: [
      "Taking a major part in building the company web based E-commerce system",
      "Collaborating with the Back-End and QA teams to perfect the features we’re handling.",
      "Writing unit tests, end to end tests (using Jest/Enzyme) along the development process and maintaining a healthy production environment.",
      "Taking responsibility and participating in kickoffs with a remote team lead",
    ],
  },
  {
    title: "Automation Engineer",
    company_name: "Cisco",
    icon: cisco,
    iconBg: "#E6DEDD",
    date: "June 2015 - March 2016",
    points: [
      "Stabilizing Cisco ISE system (a network administration product that enables the creation and enforcement of security policies) through writing automation, tests and developing infrastructure",
      "Developing automation in Java and Python.",
      "Maintaining legacy code and tests building",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Stayed up to date with emerging technologies and industry trends to create modern, accessible web interfaces.",
    name: "Lorain Safori",
    // designation: "CFO",
    // company: "Acme Co",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Enhanced our user experience by implementing responsive design principles, ensuring seamless and visually appealing interactions across various devices.",
    name: "Ahmad Gaser",
    // designation: "COO",
    // company: "DEF Corp",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Seeking excellence in his work with great respect for his adoptive company. Facing every challenge presented in his way with great enthusiasm, and indeed with his determination and will he succeeds at tackling the obstacles.",
    name: "Adi Ghoumaed",
    // designation: "Senior software engineer",
    // company: "Cisco Systems LTD.",
    // image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "AI Philosophy",
    description:
      "Interactive platform teaching how AI works — 13 modules covering neural networks, transformers, RAG, embeddings, and prompt engineering, with live TensorFlow.js simulations. Deployed on AWS EC2 with GitHub Actions CI/CD.",
    tags: [
      { name: "React 19 + TypeScript", color: "blue-text-gradient" },
      { name: "FastAPI + Python", color: "green-text-gradient" },
      { name: "TensorFlow.js + D3", color: "pink-text-gradient" },
      { name: "AWS EC2 + Docker", color: "orange-text-gradient" },
    ],
    image: aiPhilosophy,
    source_code_link: "https://aiphilo.pathofbalance.io",
  },
  {
    name: "Manga Scrapper",
    description:
      "Full-stack manga discovery app that scrapes metadata from the Jikan API, indexes it into OpenSearch for fast full-text search, and serves it via FastAPI with Keycloak OIDC authentication and daily automated scraping.",
    tags: [
      { name: "FastAPI + Python", color: "blue-text-gradient" },
      { name: "OpenSearch", color: "green-text-gradient" },
      { name: "Keycloak OIDC", color: "pink-text-gradient" },
      { name: "PostgreSQL + Docker", color: "orange-text-gradient" },
    ],
    image: mangaScrapper,
    source_code_link: "https://github.com/HadiAbu/Manga-Scrapper",
  },
  {
    name: "Claude Issue Tracker",
    description:
      "Linear-inspired fullstack issue tracker with a kanban board, dashboard charts, JWT auth, and commenting system. Built end-to-end with Claude Code — using AI to run code reviews, create PRs, and fix issues autonomously.",
    tags: [
      { name: "FastAPI + SQLAlchemy", color: "blue-text-gradient" },
      { name: "React 18 + TanStack Query", color: "green-text-gradient" },
      { name: "PostgreSQL + Docker", color: "pink-text-gradient" },
      { name: "Claude Code (AI-assisted)", color: "orange-text-gradient" },
    ],
    image: issueTracker,
    source_code_link: "https://github.com/HadiAbu/claude-issue-tracker",
  },
  {
    name: "Life Is Music | Music Discovery App",
    description:
      "Music Discovery App, with Top Charts, Top Artists, Music around you and Lyrics finder",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "RapidApi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "orange-text-gradient",
      },
    ],
    image: lifeismusic,
    source_code_link: "https://lifeismusic-hadi.netlify.app/",
  },
  {
    name: "Green-Yellow Graph",
    description:
      "A demo app that builds a graph from a linked list and decides if two connected nodes never have the same color, and the graph is a connected graph.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "orange-text-gradient",
      },
      {
        name: "Graphs and algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: gyg,
    source_code_link: "https://green-yellow-graph.vercel.app/",
  },
];
const socialLinks = [
  { name: "LinkedIn", link: "https://linkedin.com/in/hadiabu/" },
  { name: "GitHub", link: "https://github.com/HadiAbu" },
  {
    name: "StackOverflow",
    link: "https://stackoverflow.com/users/2374685/hadi-abu",
  },
  { name: "Kaggle", link: "https://www.kaggle.com/callmeriver" },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialLinks,
};
