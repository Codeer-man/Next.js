import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSectin from "./HeroSectin";


export default function Home() {
  return (
      <div className="h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] mt-10">
      <HeroSectin/>
      <FeaturedCourses/>
      </div>
      
  );
}
