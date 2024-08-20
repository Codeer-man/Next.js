import About from "@/components/about/about";
import Aproach from "@/components/Aproach";
import Footer from "@/components/footer/Footer";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name:'Home',link:'/',icon:<FaHome/>},
          {name:'About',link:'#about',icon:<FaHome/>},
          {name:"Contact",link:"#contact" }
        ]}/>
        <Hero />
        
      </div>
      <About/>
      <Aproach/>
      <Footer/>
    </main>
  );
};

export default Home;