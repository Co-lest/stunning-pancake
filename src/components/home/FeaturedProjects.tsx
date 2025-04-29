import { projects } from "../../data/projects";
import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { ArrowRight } from "lucide-react";

const FeaturedProjects = () => {
    const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

    return (
        <section className="section bg-white">
        <div className="container-custom">
          <SectionHeading
            title="Featured Projects"
            subtitle="Check out some of my recent work that showcases my skills and expertise."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
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
          
          <div className="mt-16 text-center">
            <Link 
              to="/projects"
              className="btn btn-primary px-6 py-3 inline-flex items-center"
            >
              View All Projects <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    );
}

export default FeaturedProjects;