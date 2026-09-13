import useReveal from '../hooks/useReveal';
import Nav from './Nav';
import Hero from './Hero';
import TechStack from './TechStack';
import Projects from './Projects';
import Experience from './Experience';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

export default function App() {
  useReveal();

  return (
    <div className='noise bg-background min-h-screen'>
      <Nav />
      <Hero />
      <div className='gold-rule' />
      <TechStack />
      <div className='gold-rule' />
      <Projects />
      <div className='gold-rule' />
      <Experience />
      <div className='gold-rule' />
      <About />
      <div className='gold-rule' />
      <Contact />
      <Footer />
    </div>
  );
}
