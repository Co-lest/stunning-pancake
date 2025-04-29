import { useState } from "react";
import { projects } from "../data/projects";
import PageTransition from "../components/ui/PageTransition";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";


const Projects = () => {
    const allCategories = ["All", ...new Set(projects.flatMap((project) => project.tags))];
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All" ? projects : projects.filter((project) => project.tags.includes(activeFilter));

    return (
        <PageTransition>
        <section className="pt-32 pb-16 bg-gray-50">
          <div className="container-custom">
            <SectionHeading
              title="My Projects"
              subtitle="A showcase of my work, personal projects, and client collaborations."
              alignment="center"
            />
          </div>
        </section>
        
        <section className="section bg-white">
          <div className="container-custom">
            <div className="flex overflow-x-auto pb-4 mb-8 scrollbar-hide">
              <div className="flex space-x-2">
                {allCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                      activeFilter === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    );
}

export default Projects;