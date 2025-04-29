import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const AboutMe = () => {
  const achievements = [
    '5+ years of professional experience',
    '50+ projects completed',
    'Worked with Fortune 500 companies',
    'Multiple industry certifications'
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Professional headshot" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary-600">5+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About Me <span className="text-primary-600">& My Journey</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              I'm a passionate web developer with expertise in creating beautiful, functional, and user-centered digital experiences. With a background in both design and development, I bring a unique perspective to every project.
            </p>
            
            <p className="text-gray-600 mb-8">
              My journey began over 5 years ago, and since then, I've collaborated with startups, agencies, and established businesses to create impactful digital solutions. I believe in clean code, thoughtful user experiences, and delivering exceptional results.
            </p>
            
            <ul className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                    <Check size={14} />
                  </span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
            
            <a href="#" className="btn btn-primary px-6 py-3">
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;