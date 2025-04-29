import PageTransition from '../components/ui/PageTransition';
import AboutMe from '../components/about/aboutMe';
import Experience from '../components/about/Expirience';
import SectionHeading from '../components/ui/SectionHeading';

const About = () => {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="About Me"
            subtitle="Learn more about my background, skills, and experience."
            alignment="center"
          />
        </div>
      </section>
      
      <AboutMe />
      <Experience />
    </PageTransition>
  );
};

export default About;