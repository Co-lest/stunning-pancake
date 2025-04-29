import PageTransitions from "../components/ui/PageTransition";
import SectionHeading from "../components/ui/SectionHeading";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
    return (
        <PageTransitions>
        <section className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading
            title="Contact Me"
            subtitle="Have a project in mind or want to collaborate? Get in touch with me."
            alignment="center"
          />
        </div>
      </section>
      
      <ContactForm />
        </PageTransitions>
    );
}