import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import Skills from "../components/Skills";
import ProjectsSection from "../components/ProjectsSection";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default Home;
