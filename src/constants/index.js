import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate and detail-oriented Java Full-Stack Developer with hands-on experience in building dynamic web applications using Spring Boot, Hibernate. Currently pursuing my MCA at Dr. B.V. Hiray College of Management and Research Center, I have developed a strong foundation in backend and frontend technologies, along with a keen interest in solving complex problems through efficient coding practices.

Beyond academics, I have worked on live projects and freelance assignments, gaining practical exposure to real-world development. My expertise includes database management, API development, and UI enhancements, ensuring seamless user experiences. I have also built a feature-rich Note-Taking Application, showcasing my ability to develop scalable and interactive applications.

I am always eager to explore new technologies, enhance my skills, and contribute to innovative projects. Let's connect and collaborate!`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Task Managemen App",
    image: project1,
    description:
    "A feature-rich note-taking application with functionalities like CRUD operations, archived and pinned notes, dark mode, speech-to-text, and multi-user support."  
    ,
    technologies: ["HTML", "CSS", "Bootstrap", "Java","Hibernate","Mysql"],
  },
  
  {
    title: "E-Commerce Website",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },

  

  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },

   {
     title: "Weather App",
    image: project3,
    description:
      "A weather forecasting application that provides real-time weather updates, temperature, and conditions based on user location or city search.",
    technologies: ["Java", "Servlets", "JSP", "Maven", "OpenWeather API", "HTML", "CSS", "JavaScript"]
   },

   {
    title: "Chat Application",
    image: project4,
    description:
      "A real-time web-based chat application with features like user authentication, typing indicators, emoji support, and message differentiation for an interactive experience.",
    technologies: ["HTML", "CSS", "Bootstrap", "JSP", "Servlet", "WebSocket", "Maven"]
}

];

export const CONTACT = {
  address: "Malegaon Dist-Nashik ",
 // phoneNo: "8551852405 ",
  email: "abhivadnere98@gmail.com",
};
