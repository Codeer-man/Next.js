
import Inner from "./inner"
import "../slider/slider.Module.css"

export default function About() {
  return (
    <div >
      <div className="relative flex flex-col h-[60vh] w-screen" id="about">
        {/* <video
        muted
        autoPlay
        loop
        className="absolute top-[-100px]  border-2 border-black-200 border-solid"
      >
        <source src="/black.webm" type="video/webm"/>
      </video> */}
      <Inner />
      </div>
      
   
    </div>
  )
}
