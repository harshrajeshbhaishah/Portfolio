
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
  powerbi,
  sql,
  python,
  apps,
  autom,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  images,
  cowboy,
  download,
  risk,
  cons,
  share,
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
    id: "volunteer",
    title: "Volunteer" 
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Automation Developer",
    icon: web,
    description:
      "Designing workflows and AI agents that save time and eliminate manual steps.",
  },
  {
    title: "Data Analytics",
    icon: mobile,
    description:
      "Transforming raw data into clear, visual insights for better decisions.",
  },
  {
    title: "Web Application",
    icon: backend,
    description:
      "Building fast, responsive tools with Python, and REST APIs.",
  },
  {
    title: "Power Platform Solutions",
    icon: creator,
    description:
      "Creating Power Apps and SharePoint tools that modernize daily operations.",
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "powerbi", icon: powerbi },         // 🆕
  { name: "Power Automate", icon: autom }, // 🆕
  { name: "SQL", icon: sql },                  // 🆕
  { name: "Python", icon: python },            // 🆕
  { name: "Power apps", icon: apps },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
];


const experiences = [
  {
    title: "Business Intelligence & Analytics Developer — Junior",
    company_name: "City of Calgary — Supply Management",
    icon: images,          // change if you’re reusing a temp icon
    iconBg: "#E6DEDD",
    date: "Nov 2025 – Present",
    points: [
     "Building data dashboards in Power BI for procurement and risk analysis.",
      "Automating reports with Power Automate and SharePoint.",
      "Working with category managers to improve supplier risk tracking.",
    ],
  },
  {
    title: "Supply Chain Intern – Analytics",
    company_name: "City of Calgary | Category Management",
    icon: images,          // change if you’re reusing a temp icon
    iconBg: "#383E56",
    date: "May 2025 – Aug 2025",
    points: [
      "Created early versions of commodity risk dashboards and KPI visuals.",
      "Collected and cleaned supplier data for analytics projects.",
      "Presented findings to team leads to guide purchasing decisions.",
    ],
  },
  {
    title: "Guest Services Associate",
    company_name: "Cowboys Casino",
    icon: cowboy,
    iconBg: "#383E56",
    date: " Oct 2023 – Mar 2025",
    points: [
      "Delivered professional customer service and managed event guest experiences.",
      "Handled fast-paced environments during live events and corporate functions.",
      "Recognized for reliability and teamwork during special casino events.",
    ],
  },
  {
    title: "Event Dealer & Host",
    company_name: "Happy Go Lucky Casino Events",
    icon: download,
    iconBg: "#E6DEDD",
    date: "Aug 2023 – Mar 2025",
    points: [
      "Hosted casino-themed events and fundraisers with engaging customer interactions.",
      "Managed setup and operation of casino tables such as Blackjack, Roulette, and Craps.",
      "Ensured guests had a fun and memorable experience while maintaining professionalism.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Help organize workshops and hands-on sessions on Python, ML, and data viz; support first-year students with learning paths.",
    name: "UCalgary Data Science & Machine Learning Club",
    designation: "VP Finances & Events",
    company: "University of Calgary",
    image: "https://randomuser.me/api/portraits/lego/1.jpg",
  },
  {
    testimonial:
     "Supported internal United Way initiatives at the City: promotion, logistics, and data entry for donation & engagement tracking.",
    name: "United Way (City of Calgary)",
    designation: "Campaign Volunteer",
    company: "City of Calgary",
    image: "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    testimonial:
      "Participated in cricket events and fundraisers; assisted with organizing matches and promoting the sport on campus.",
    name: "UCCA — Ucalgary Cricket Club Association",
    designation: "Vice President",
    company: "University of Calgary",
    image: "https://randomuser.me/api/portraits/lego/3.jpg",
  },
];

const projects = [
  {
    name: "Supplier Risk Analysis Agent",
    description:
      "AI-powered automation agent built for the City of Calgary’s Category Management team. It scans 180-day news feeds to extract supply-chain disruptions by commodity (e.g., Copper, Cement), returns structured JSON risk reports, and updates Power BI dashboards via Power Automate and dataverse.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "powerbi", color: "green-text-gradient" },
      { name: "powerautomate", color: "pink-text-gradient" },
    ],
    // Replace with your screenshot (e.g. supplier_risk.png)
    image: risk,
  },
  {
    name: "Construction Methodology Tool",
    description:
      "Interactive Power Apps solution developed for the City’s Infrastructure Services team. It allows users to select preferred construction methods, auto-generates summaries, and connects with SharePoint to standardize project documentation.",
    tags: [
      { name: "powerapps", color: "blue-text-gradient" },
      { name: "sharepoint", color: "green-text-gradient" },
      { name: "powerautomate", color: "pink-text-gradient" },
    ],
    // Replace with your screenshot (e.g. construction_tool.png)
    image: cons,
    source_code_link: "#",
  },
  {
    name: "Procurement Debrief Form Automation",
    description:
      "Automated debrief form workflow used to collect supplier feedback post-tender. Integrates Microsoft Forms → Power Automate → SharePoint for visualization and audit tracking. Improves transparency and compliance within public procurement.",
    tags: [
      { name: "powerautomate", color: "blue-text-gradient" },
      { name: "forms", color: "green-text-gradient" },
      { name: "sharepoint", color: "pink-text-gradient" },
    ],
    // Replace with your screenshot (e.g. debrief_form.png)
    image: share,
    source_code_link: "#",
  },
];



export { services, technologies, experiences, testimonials, projects };
