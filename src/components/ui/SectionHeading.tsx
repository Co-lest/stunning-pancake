import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    alignment?: 'left' | 'center' | 'right';
    children?: ReactNode;
}

const SectionHeading = ({ 
    title, 
    subtitle, 
    alignment = 'center',
    children 
  }: SectionHeadingProps) => {
    const alignmentClasses = {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    };

    return (
        <div className={`mb-12 ${alignmentClasses[alignment]}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      {children}
    </div>
    );
}

export default SectionHeading;