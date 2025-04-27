import { motion } from "framer-motion";

interface SkillBarProps {
    name: string;
    percentage: number;
    color?: string;
    index: number;
}

const Skillbar = ({
    name, 
    percentage,
    color = "bg-primary-500",
    index
}: SkillBarProps) => {
    return (
        <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-gray-700 font-medium">{name}</span>
          <span className="text-gray-500">{percentage}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className={`h-full ${color}`}
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
        </div>
      </div>
    );
};

export default Skillbar;