import Hero from "./components/Hero"
import Highlight from "./components/Highlight"
import Navbar from "./components/Navbar"
import Model from "./components/Model"

function App() {


  return (
  <main className="bg-black"  >
    <Navbar />
    <Hero />
    <Highlight/>
    <Model></Model>
  </main>

  )
}

export default App
