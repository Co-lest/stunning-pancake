interface TechnicalSkill {
    name: string;
    percentage: number;
  }
  
  interface ProfessionalSkill {
    name: string;
    percentage: number;
  }
  
  interface Skills {
    technical: TechnicalSkill[];
    professional: ProfessionalSkill[];
  }
  
  export const skills: Skills = {
    technical: [
      { name: "HTML & CSS", percentage: 95 },
      { name: "JavaScript", percentage: 90 },
      { name: "React", percentage: 88 },
      { name: "TypeScript", percentage: 72 },
      { name: "Node.js", percentage: 90 },
      { name: "UI/UX Design", percentage: 80 },
      { name: "Go", percentage: 78 }
    ],
    professional: [
      { name: "Problem Solving", percentage: 92 },
      { name: "Communication", percentage: 85 },
      { name: "Teamwork", percentage: 90 },
      { name: "Time Management", percentage: 88 }
    ]
  };