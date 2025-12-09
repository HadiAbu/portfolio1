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
  worldRanks,
  dynamicDash,
  // shoppingCart,
  // puzzleMaker,
  lifeismusic,
  eventhub,
  gyg,
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
    title: "Web Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "EventHub | Discover Events and Venues",
    description:
      "A fullstack event discovery web application built with NextJS, where users can explore events and venues based on their location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "SSR",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
    ],
    image: eventhub,
    source_code_link: "https://event-hub-hadi.vercel.app/",
  },
  {
    name: "Dynamic Dashboard",
    description:
      "Fully functional front-end project with the all the important and most common used features used in modren day web; Dashboard, Calendar, Charts, Colro themes, Siderbar, Tables of data and more..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ChartJS",
        color: "orange-text-gradient",
      },
    ],
    image: dynamicDash,
    source_code_link: "https://dynamic-dashboard.vercel.app/",
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
  {
    name: "World Ranks",
    description:
      "A fullstack project built in React + NextJS, displaying information like population, area, gini, capital, spoken languages,...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "SSR",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
    ],
    image: worldRanks,
    source_code_link: "https://world-ranks-red.vercel.app/",
  },
];
const socialLinks = [
  { name: "LinkedIn", link: "https://linkedin.com/in/hadiabu/" },
  { name: "GitHub", link: "https://github.com/HadiAbu/ " },
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
