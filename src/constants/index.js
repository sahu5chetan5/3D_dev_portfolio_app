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
  meta,
  starbucks,
  tesla,
  shopify,
  expense_tracker,
  realtime_group_chat,
  blog_app,
  logo,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
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
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Associate Analyst",
    company_name: "Amber Road, Inc.",
    icon: logo,
    iconBg: "#383E56",
    date: "November 2026 - December 2018",
    points: [
      "Developed a suite of tools to streamline and automate the translation process for executing import and export compliance checks and generating international shipping documentation using the Google Translation API, encompassing automation, validations, filtering, formatting, and configuration of bulk of files with at least 10k+ of data each from any language to English. This led to improved operational efficiencies and financial performance.",
      "Built screening systems that automated client identity verification leveraging web scrapping from government websites critical for ensuring improved and efficient compliance control that prevents doing business with prohibited or restricted entities, including governments and individuals."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Expense Tracker App",
    description:
      "A fullstack expense tracking app built with Node.js Express.js supporting JWT authenticated users to create,edit and track expenses of different categorical expenses. App supports users to access premium subscription feature to download monthly and yearly expense report integrating Razorpay payment gateway API, realtime leader board feature ranks users based on expenses",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: expense_tracker,
    source_code_link: "https://github.com/Red-Pillow/Expense-Tracker-App",
  },
  {
    name: "RealTime Group Chat App",
    description:
      "A realtime groupchat app, built with Node.js, Express.js for RestfulAPIs. Socket.io for seamless group chat and one-to-one private chat with JWT-based user authentication for enhanced security. The app App supports multimedia sharing of images as well as videos in real time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: realtime_group_chat,
    source_code_link: "https://github.com/sahu5chetan5/GroupChatApp",
  },
  {
    name: "Blog App",
    description:
      "A a fully functional Blog App using Node.js,Express.js and Sequelize ORM over MySQL that implements RESTful routes and CRUD functionalities to allow the users to view a list of blogs, create new blogs and comment on the blogs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: blog_app,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
