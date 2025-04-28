import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { expirience } from "../../data/Expirience";
import { Calendar, Briefcase } from "lucide-react";

const Expirience = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Work Expirience"
          subtitle="A chronological journey though my professional career."
        />

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 ml-6 md:ml-0 top-0 h-full w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {expirience.map((job, index) => {
              <motion.div
                key={job.id}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex-1 md:w-1/2 p-6">
                  <div className="md:max-w-md md:mx-auto">
                    <div className="flex items-center text-primary-600 mb-2 text-sm">
                      <Calendar size={16} className="mr-2" />
                      <span>{job.period}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                    <h4 className="text-gray-600 mb-4">{job.company}</h4>

                    <p className="text-gray-600">{job.description}</p>

                    {job.responsibilities && (
                      <ul className="mt-4 list-disc list-inside text-gray-600 space-y-1">
                        {job.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Timeline marker */}
                <div className="absolute left-0 md:left-1/2 top-0 transform translate-y-6 -translate-x-1/2 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white shadow-md">
                    <Briefcase size={20} />
                  </div>
                </div>
              </motion.div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expirience;