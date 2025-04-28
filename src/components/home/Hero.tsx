import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Frontend Developer
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Creating digital <span className="text-primary-600">experiences</span> that matter
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm a passionate developer focused on crafting beautiful and functional web applications with modern technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                to="/projects" 
                className="btn btn-primary px-6 py-3"
              >
                View My Work <ArrowRight className="ml-2" size={18} />
              </Link>
              
              <a 
                href="#" 
                className="btn btn-secondary px-6 py-3"
              >
                Download CV <Download className="ml-2" size={18} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-tr from-primary-600 to-accent-500 rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Developer" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-3 w-3 bg-primary-500 rounded-full animate-pulse-slow"></div>
                  <p className="font-medium">Currently available for work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;