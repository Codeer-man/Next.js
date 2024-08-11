import { useGSAP } from "@gsap/react"
import { rightImg, watchImg } from "../utils"
import gsap from "gsap"
// import { ScrollTrigger } from "gsap/all"
import VideoCarosel from "./VideoCarosel"

// const trigger =  gsap.registerPlugin(ScrollTrigger) 
const Highlight = () => {

 
  useGSAP(() => {
    gsap.to(".link", {
      opacity: 1,y:0,duration:1,stagger:0.5,
      // scrollTrigger:{
      //   trigger:"body",
      //   markers:true,
      //   start:"bottom bottom"
      // }
    })
    gsap.to("#title", {
      opacity: 1,y:0,
      // scrollTrigger:{
      //   trigger:'body',
      //   markers:true,
      //   top:30,
      //   start:"bottom bottom"
      // }
    })
  })  

  return (
    <section id='highlights' className='common-padding h-full overflow-hidden w-screen bg-zinc '>
      <div className='screen-max-width'>
        <div className="mb-12 w-full items-end justify-between lg:flex ">
          <h1 id='title' className='section-heading'>Get the Hightlights</h1>

          <div className=" flex flex-warp items-end gap-5">
            <p className="link"> Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link"> Watch the event
              <img src={rightImg} alt="right" className=" ml-2" />
            </p>
          </div>
        </div>
        <VideoCarosel/>
      </div>
    </section>
  )
}

export default Highlight
