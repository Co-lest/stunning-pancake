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
      description: "A canvas animated js displaying my skills in a coll way.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "kaboomjs", "Tailwind"],
      featured: true,
      liveUrl: "https://main--colestportfolio.netlify.app/",
      githubUrl: "https://github.com/Co-lest/Portfolio"
    },
    {
      id: 2,
      title: "Quiz app",
      description: "A simple quiz website that uses an api for questions",
      image: "https://images.pexels.com/photos/7648339/pexels-photo-7648339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Rest API", "Tailwind"],
      featured: true,
      liveUrl: "https://peaceful-chaja-cebcfc.netlify.app/",
      githubUrl: "https://github.com"
    },
    {
      id: 3,
      title: "Finance Tracker App",
      description: "A personal finance application for budgeting and expense tracking.",
      image: "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "ChartJS", "NodeJS"],
      featured: true,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 4,
      title: "Recipe Finder Application",
      description: "Search for recipes based on ingredients and dietary preferences.",
      image: "https://images.pexels.com/photos/6287447/pexels-photo-6287447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["JavaScript", "API", "CSS"],
      featured: false,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 5,
      title: "Real Estate Listing Site",
      description: "Property listings with advanced search and filtering options.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "NextJS", "MongoDB"],
      featured: false,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "Centralized platform for managing multiple social media accounts.",
      image: "https://images.pexels.com/photos/5912564/pexels-photo-5912564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "GraphQL", "TailwindCSS"],
      featured: false,
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
  ];