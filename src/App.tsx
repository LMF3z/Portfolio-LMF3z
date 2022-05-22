import AboutMe from "./Components/AboutMe"
import ContactForm from "./Components/ContactForm"
import GridSkills from "./Components/GridSkills"
import Header from "./Components/Header"
import Projects from "./Components/Projects"

const App = () => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen container mx-auto flex flex-col justify-center items-center">
        <AboutMe />
        <GridSkills />
        <Projects />
        <ContactForm />
      </main>
    </>
  )
}

export default App