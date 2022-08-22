import { Toaster } from 'react-hot-toast';
import AboutMe from "./Components/AboutMe"
import ContactForm from "./Components/ContactForm"
import GridSkills from "./Components/GridSkills"
import Header from "./Components/Header"
import Products from './Components/Products';
import Projects from "./Components/Projects"

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full px-5 md:px-10 flex flex-col justify-center items-center space-y-10">
        <AboutMe />
        <GridSkills />
        <Projects />
        <Products />
        <ContactForm />
      </main>
      <Toaster />
    </>
  )
}

export default App