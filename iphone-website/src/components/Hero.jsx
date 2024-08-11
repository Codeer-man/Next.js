import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { heroVideo,smallHeroVideo } from '../utils'
import { useEffect, useState } from 'react'

const Hero = () => {
    useGSAP(()=>{
        gsap.to(".hero-title",{
            opacity:1,
            delay:2
        })
        gsap.to("#cta",{
            opacity:1,delay:2,y:-50
        },[])
    })
    const [videoSrc,setVideo] = useState(window.innerWidth <560 ? smallHeroVideo : heroVideo)
  

    const HandleVideoSrcSet = ()=>{
      window.innerWidth < 560 ? setVideo(smallHeroVideo) : setVideo(heroVideo)
    }
  
    useEffect(() =>{
      window.addEventListener('resize',HandleVideoSrcSet)
  
      return ()=>{
        window.removeEventListener('resize',HandleVideoSrcSet )
      }
    },[])
    return (
    <section className="h-5/6 w-full nav-height bg-black relative">
          <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" preload="auto" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
        <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
        >
            <a href="#highlight" className="btn">Buy</a>
            <p className="font-normal text-xl">From $199/ month or $999</p>
        </div>
    </section>
  )
}

export default Hero
