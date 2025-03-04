import {
  backend,
  creator,
  mobile,
  web,
  css,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  nugitech,
  nugiinnovations,
  crossriverstate,
  mdatemplates,
  myhealingjourney,
  nugitechuk,
  syncventory,
  uau,
  docaustyne,
  emmaolube,
  publicfigure,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "testimonials", title: "Testimonials" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Frontend Engineer", icon: web },
  { title: "Software Developer", icon: mobile },
  { title: "Tech Instructor", icon: backend },
  { title: "E-Business Sophomore", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Nugi Technologies",
    icon: nugitech,
    iconBg: "#ced8ff",
    date: "August 2020 - Present",
    points: [
      "Worked with cross-functional teams includingUX designers, product managers, and otherdevelopers to create high-quality softwareproducts.",
      "Collaborated with other developers to identify and alleviate the number of bugs on a website and web app.",
      "Developed and maintained web applications using React.js and other related technologies.",
      "Met with managers on a weekly basis to provide a detailed project report and milestone updates.",
      "Website proposal drafting.",
    ],
  },
  {
    title: "Tech Instructor",
    company_name: "Nugi Innovations",
    icon: nugiinnovations,
    iconBg: "#ffe9c2",
    date: "Feb 2021 - Present",
    points: [
      "Taught kids (5 years to 12 years) visualprogramming and how to build creativeprograms.",
      "Designed and orchestrated the learningroadmaps for web development, FullStack,and other programming courses.",
    ],
  },
  {
    title: "Web Frontend Intern",
    company_name: "Nugi Technologies",
    icon: nugitech,
    iconBg: "#ced8ff",
    date: "May 2019 - July 2020",
    points: [
      "Developed clean, clear, and well-tested code for various projects.",
      "Created multiple-page websites with JavaScript and Typescript, improving website performance and speed.",
      "Maximised coding efficiency through effective optimisation, participating in code reviews and providing as well as receiving constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Anthonia Alexis is a brilliant software engineer whose dedication and expertise have greatly impacted Nugi. Her innovative mindset and problem-solving skills drive excellence in every project. She is an inspiration to the team and a true asset to the future of Nugi and  technology.",
    name: "Ugi Augustine Ugi",
    designation: "President",
    company: "Nugi Group",
    image: docaustyne,
  },
  {
    testimonial:
      "Anthonia’s expertise in web development was instrumental in bringing Syncventory’s website to life. She combines technical skill with a keen eye for design, ensuring a seamless and user-friendly experience. Her dedication and problem-solving abilities made the entire process smooth and efficient. A true professional!",
    name: "Emmanuel Olube",
    designation: "CPO",
    company: "Syncventory",
    image: emmaolube,
  },
  {
    testimonial:
      "She has successfully developed and maintained several web applications at Nugi, It's been a pleasure working with her.",
    name: "Godswill Adie",
    designation: "CTO",
    company: "Nugi Technologies",
    image: publicfigure,
  },
];

const projects = [
  {
    name: "Cross River State",
    description:
      "The official website for the Cross River State government, providing information about the state, its people, and its government.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: crossriverstate,
    source_code_link: "https://crossriverstate.gov.ng/",
  },
  {
    name: "Syncventory",
    description:
      "Web application that enables businesses to monitor stock levels, track product movements, and manage multiple stores from a single platform.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: syncventory,
    source_code_link: "https://syncventory.co/",
  },
  {
    name: "Nugi Technologies UK",
    description:
      "Nugi Technologies is a customer-centric ICT solutions provider specializing in digital transformation and technological innovations across various sectors.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: nugitechuk,
    source_code_link: "https://nugitech.co.uk/",
  },
  {
    name: "UAU Brand",
    description:
      "Brand website of the Nugi Group President, who is dedicated to driving change in rural communities through innovative models, focusing on enhancing educational outcomes across Africa.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: uau,
    source_code_link: "https://docaustyne.com/",
  },
  {
    name: "My Healing Journey",
    description:
      "Web application that connects patients with top UK healthcare providers, specializing in personalized medical tourism services to facilitate access to high-quality treatments and care.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: myhealingjourney,
    source_code_link: "https://myhealingjourney.uk/",
  },
  {
    name: "CRS Lottery",
    description:
      "A government-regulated platform that oversees lottery and gaming activities in Cross River State, providing licensing, compliance monitoring, and resources for operators and stakeholders in the gaming industry.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: mdatemplates,
    source_code_link: "https://lotteryandgaming.crossriverstate.gov.ng/",
  },
];

export { services, technologies, experiences, testimonials, projects };
