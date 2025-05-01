interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    featured: boolean;
    liveUrl?: string;
    githubUrl?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Kaboom js walking simulator",
      description: "A canvas animated js displaying my skills in a cool way.",
      image: "../../assets/Portfolio.jpeg",
      tags: ["React", "kaboomjs", "Tailwind"],
      featured: true,
      liveUrl: "https://main--colestportfolio.netlify.app/",
      githubUrl: "https://github.com/Co-lest/Portfolio"
    },
    {
      id: 2,
      title: "Quiz app",
      description: "A simple quiz website that uses an api to fetch for questions.",
      image: "../../assets/quiz.jpeg",
      tags: ["React", "Rest API", "Tailwind"],
      featured: true,
      liveUrl: "https://peaceful-chaja-cebcfc.netlify.app/",
      githubUrl: "https://github.com/Co-lest"
    },
    {
      id: 3,
      title: "A reconnect app",
      description: "An app that helps you reconnect with childhood friends from the past.",
      image: "../../assets/reconnect.jpeg",
      tags: ["React", "SQL", "NodeJS", "Cloud", "AWS", "Rest API"],
      featured: true,
      liveUrl: "https://reconnectingeldersv2.onrender.com/",
      githubUrl: "https://github.com/Suheil001/ReconnectingElders"
    },
    {
      id: 4,
      title: "A notes app",
      description: "An app that helps you save your notes in your browser.",
      image: "../../assets/notes.jpeg",
      tags: ["JavaScript", "HTML", "CSS"],
      featured: false,
      liveUrl: "https://notifynnotebook.netlify.app/",
      githubUrl: "https://github.com/Co-lest/Notes"
    },
    {
      id: 5,
      title: "Weather App",
      description: "A weather forecast app.",
      image: "../../assets/weather.jpeg",
      tags: ["HTML", "Tailwind", "Javascript", "Rest API"],
      featured: false,
      liveUrl: "https://weatherwarn.netlify.app/",
      githubUrl: "https://github.com/Co-lest/weather-warn"
    },
    {
      id: 6,
      title: "File organiser",
      description: "A Golang project that organises your files in folders. e.g pictures in one file, videos in another file.",
      image: "../../assets/files.jpeg",
      tags: ["Go"],
      featured: true,
      liveUrl: "https://github.com/Co-lest/file-organiser",
      githubUrl: "https://github.com/Co-lest/file-organiser"
    },
    {
      id: 7,
      title: "Majanta project",
      description: "An upcoming app/website that connects employers and employees and has verified payment methods using smart contracts. No live URl yet",
      image: "../../assets/majanta.jpeg",
      tags: ["Go", "SQL", "Reast API", "React", "Tailwind", "Nodejs", "Blockchain Smart Contracts"],
      featured: true,
      liveUrl: "javascript:void(0)",
      githubUrl: "https://github.com/majanta"
    },
  ];