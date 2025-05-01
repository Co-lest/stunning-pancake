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
    title: "Frontend Developer",
    company: "The Reconnect project",
    period: "Jan 2024 - Mar 2025",
    description: "Leading the frontend development team in creating modern, responsive web applications for enterprise clients. It is available in my projects",
    responsibilities: [
      "Architected and implemented complex React applications",
      "Mentored developers and conducted code reviews",
      "Established coding standards and best practices",
      "Collaborated with designers to improve UI/UX workflows"
    ]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Local project",
    period: "Dec 2023 - Feb 2024",
    description: "Developed a weather forecast website",
    responsibilities: [
      "Built interactive UI components using javascript, Html and CSS using a rest API",
      "Implemented state management with Context API",
      "Optimized application performance and bundle size",
      "Collaborated with backend developers on API integration"
    ]
  },
  {
    id: 3,
    title: "Game developer",
    company: "Creative Design portfolio",
    period: "Jun 2024 - present",
    description: "Created engaging walking simulator using Kaboom js as a portfolio",
    responsibilities: [
      "Translated design mockups into functional web interfaces",
      "Developed responsive websites using HTML, CSS, and JavaScript",
      "Used apis to integrate information",
      "Conducted user testing and implemented feedback"
    ]
  }, 
  {
    id: 4,
    title: "Full Stack developer",
    company: "Majanta",
    period: "Jun 2023 - present",
    description: "Creating a website and app that connects employers and employees.",
    responsibilities: [
      "Architected and implemented complex React applications",
      "Mentored developers and conducted code reviews",
      "Established coding standards and best practices",
      "Collaborated with designers to improve UI/UX workflows"
    ]
  },
];