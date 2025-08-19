import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a passionate and detail-oriented Java Full-Stack Developer with hands-on experience in building dynamic web applications using Spring Boot, Hibernate. Currently pursuing my MCA at Dr. B.V. Hiray College of Management and Research Center, I have developed a strong foundation in backend and frontend technologies, along with a keen interest in solving complex problems through efficient coding practices.

Beyond academics, I have worked on live projects and freelance assignments, gaining practical exposure to real-world development. My expertise includes database management, API development, and UI enhancements, ensuring seamless user experiences. I have also built a feature-rich Note-Taking Application, showcasing my ability to develop scalable and interactive applications.

I am always eager to explore new technologies, enhance my skills, and contribute to innovative projects. Let's connect and collaborate!`;

// 

export const EXPERIENCES = [
{
    year: "2022 - 2023",
    role: "Full Stack Java Developer (Hands-on Training & Projects)",
    company: "Adhyayan Institute, Pune",
    description: `Gained practical experience in developing full stack applications using Java, Spring Boot, Hibernate, and MySQL. Created responsive UIs with HTML, CSS, and Bootstrap, and deployed projects integrating backend APIs with relational databases.`,
    technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML", "CSS", "Bootstrap"],
  },
  {
    year: "2023 - 2025",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    description: `Delivered customized academic projects for MCA students. Modified and enhanced project structures, built JSP-based web pages, configured MySQL databases, and ensured complete functionality across front-end, back-end, and database integration.`,
    technologies: ["HTML", "CSS", "JSP", "Java", "MySQL","Hibernate","SpringBoot","Android"],
  },
  {
    year: "2025",
    role: "Software Engineering Job Simulation",
    company: "Hewlett Packard Enterprise (Forage)",
    description: `Built a RESTful web service in Java Spring Boot to manage employee data. Developed and tested APIs with Postman, implemented JSON data handling, and wrote unit tests to ensure performance and reliability.`,
    technologies: ["Java", "Spring Boot", "Hibernate", "Postman","RestApi"],
  }
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
