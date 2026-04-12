import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-primary selection:bg-accent selection:text-primary">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Certificates />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
