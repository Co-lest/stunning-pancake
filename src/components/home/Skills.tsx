import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
import SkillBar from "../ui/Skillbar";
import { skills } from "../../data/skills";

const Skills = () => {
    return (
        <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="My Skills"
          subtitle="A collection of my technical skills and proficiency levels."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {skills.technical.map((skill, index) => (
              <SkillBar 
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                index={index}
              />
            ))}
          </div>
          
          <div>
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-8 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-6">Professional Skills</h3>
              
              <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                {skills.professional.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative mb-2">
                      <svg className="w-24 h-24 mx-auto" viewBox="0 0 100 100">
                        <circle 
                          className="text-gray-200" 
                          strokeWidth="8" 
                          stroke="currentColor" 
                          fill="transparent" 
                          r="42" 
                          cx="50" 
                          cy="50" 
                        />
                        <motion.circle 
                          className="text-primary-500" 
                          strokeWidth="8" 
                          stroke="currentColor" 
                          fill="transparent" 
                          r="42" 
                          cx="50" 
                          cy="50" 
                          strokeDasharray={264}
                          strokeDashoffset={264 - (264 * skill.percentage) / 100}
                          strokeLinecap="round"
                          initial={{ strokeDashoffset: 264 }}
                          whileInView={{ strokeDashoffset: 264 - (264 * skill.percentage) / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="text-xl font-bold">{skill.percentage}%</span>
                      </div>
                    </div>
                    <p className="font-medium">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default Skills;