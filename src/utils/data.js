import { AiOutlineJava } from "react-icons/ai";
import { BiLogoJava, BiLogoMongodb, BiLogoSpringBoot } from "react-icons/bi";
import { DiJava } from "react-icons/di";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoCss3,
  IoLogoAngular,
} from "react-icons/io5";
import { RiJavaFill, RiTailwindCssFill } from "react-icons/ri";
import { SiHibernate, SiMongodb, SiMonogame, SiOracle, SiSpringboot } from "react-icons/si";

export const PROFILE_DATA = {
  profilePicture: "https://via.placeholder.com/150",
  name: "Saiteja Y",
  tagline: `Passionate Java developer with 8 years of experience, dedicated to crafting robust backend solutions and solving complex challenges.`,
  jobTitle: "Java Full Stack Developer",
  location: "USA",
  yearsOfExperience: "8+",
  skills: [
    "Java",
    "Spring Boot",
    "Angular",
    "React.js",
    "JavaScript",
    "AWS",
    "Azure",
    "SQL",
    "NoSQL",
    "Maven", 
    "Junit", 
    "Kubernetes",
    "Docker",
    "Git",
  ],
  email: "ysaiteja469@gmail.com",
  phone: "+1 (214) 997-4905",
  website: "https://sai-portfolio.com",
};

export const SKILLS = {
  frontend: [
    { id: 1, icon: "html", title: "HTML" },
    { id: 2, icon: "css", title: "CSS" },
    { id: 3, icon: "javascript", title: "Javascript" },
    { id: 4, icon: "angular", title: "Angular" },
    { id: 5, icon: "react", title: "React" },
    
  ],

  backend: [
    { id: 1, icon: "java", title: "Java" },
    { id: 2, icon: "python", title: "Python" },
    { id: 3, icon: "nodejs", title: "Node JS" },
    { id: 4, icon: "spring", title: "Spring" },
    { id: 5, icon: "hibernate", title: "Hibernate" },
    { id: 6, icon: "oracle", title: "Oracle" },
    { id: 7, icon: "mysql", title: "MySQL" },
    { id: 8, icon: "postgresql", title: "PostgreSQL" },
    { id: 9, icon: "mongodb", title: "MongoDB" },
    { id: 10, icon: "cassandra", title: "Cassandra" },
    { id: 11, icon: "aws", title: "AWS" },
    { id: 12, icon: "gcp", title: "GCP" },
    //{ id: 11, icon: "azure", title: "Azure" },
    { id: 13, icon: "kafka", title: "Kafka" },
  ],

  other: [
    { id: 1, icon: "maven", title: "maven" },
    { id: 2, icon: "jenkins", title: "Jenkins" },
    { id: 3, icon: "docker", title: "Docker" },
    { id: 4, icon: "kubernetes", title: "Kubernetes" },
    { id: 5, icon: "git", title: "Git" },
    { id: 6, icon: "junit", title: "JUnit" },
    { id: 7, icon: "selenium", title: "Selenium" },
    { id: 8, icon: "cucumber", title: "Cucumber" },

    
  ]
};

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "AT&T",
    position: "Java Full Stack Developer",
    duration: " Dec 2021 - Present",
    description:
      "Lead the front-end development team in designing and implementing user interfaces for various web applications. Collaborated with designers and backend developers to deliver high-quality products.",
  },
  {
    id: "02",
    company: "State Farm",
    position: "Java Full Stack Developer",
    duration: "Mar 2020 - Nov 2021",
    description:
      "Developed responsive and interactive user interfaces for client projects using modern web technologies. Participated in code reviews and provided technical guidance to junior developers.",
  },
  {
    id: "03",
    company: "WEQ Technologies",
    position: "Java/J2EE Developer",
    duration: " Jun 2017 - Aug 2019",
    description:
      "Designed and developed user interfaces for web applications, focusing on usability and aesthetics. Collaborated closely with clients to understand their requirements and deliver customized solutions.",
  },

  {
    id: "04",
    company: "Rishabh Software",
    position: "Java/J2EE Developer",
    duration: " Dec 2015 - May 2017",
    description:
      "Designed and developed user interfaces for web applications, focusing on usability and aesthetics. Collaborated closely with clients to understand their requirements and deliver customized solutions.",
  },
];

export const ABOUT_ME_DATA = {
  introduction: "Hi, I'm Saiteja, an experienced Java Full Stack Developer passionate about building engaging web applications and solving complex problems with code.",
  background: "I hold a Bachelor's degree in Computer Science from the University of Science and Technology. Over the past 4 years, I've gained valuable experience in frontend development, working on projects ranging from e-commerce websites to interactive dashboards.",
  skills: "I'm proficient in a variety of technologies including React.js, JavaScript, HTML, CSS, and Node.js. I'm also experienced in using version control systems like Git and working with RESTful APIs.",
  projects: "Some of my notable projects include an e-commerce website built with React.js and Redux, a social media dashboard using Node.js and MongoDB, and a personal portfolio website deployed with Netlify.",
  interests: "Outside of coding, I enjoy traveling to new places, capturing moments through photography, and playing guitar. I'm also an avid reader and love exploring new cuisines.",
  careerGoals: "In the future, I aim to continue honing my skills as a developer, exploring new technologies, and contributing to meaningful projects that make a positive impact on people's lives.",

  stats: {
    yearsOfExperience: '8+',
    
  },
};
