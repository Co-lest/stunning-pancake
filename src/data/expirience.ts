interface Experience {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    responsibilities?: string[];
  }
  
  export const experience: Experience[] = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2023 - Present",
      description: "Leading the frontend development team in creating modern, responsive web applications for enterprise clients.",
      responsibilities: [
        "Architected and implemented complex React applications",
        "Mentored junior developers and conducted code reviews",
        "Established coding standards and best practices",
        "Collaborated with designers to improve UI/UX workflows"
      ]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Solutions Agency",
      period: "Mar 2021 - Dec 2022",
      description: "Developed responsive, user-friendly web applications using modern JavaScript frameworks and libraries.",
      responsibilities: [
        "Built interactive UI components using React and TypeScript",
        "Implemented state management with Redux and Context API",
        "Optimized application performance and bundle size",
        "Collaborated with backend developers on API integration"
      ]
    },
    {
      id: 3,
      title: "UI/UX Developer",
      company: "Creative Design Studio",
      period: "Jun 2019 - Feb 2021",
      description: "Created engaging user interfaces and experiences for web and mobile applications.",
      responsibilities: [
        "Translated design mockups into functional web interfaces",
        "Developed responsive websites using HTML, CSS, and JavaScript",
        "Collaborated with designers to refine user flows and interactions",
        "Conducted user testing and implemented feedback"
      ]
    }
  ];