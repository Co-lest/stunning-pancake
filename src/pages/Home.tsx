import PageTransition from "../components/ui/PageTransition"
import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import FeaturedProjects from "../components/home/FeaturedProjects";

const Home = () => {
    return (
        <PageTransition>
            <Hero />
            <FeaturedProjects />
            <Skills />
        </PageTransition>
    );
}

export default Home;