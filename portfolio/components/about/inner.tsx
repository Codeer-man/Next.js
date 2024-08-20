import Image from "next/image";
import Js from "../../public/js.webp"
import Next from "../../public/next.svg"
import React from "../../public/react.png"
import Tailwind from "../../public/tailwind.svg"
import Ts from "../../public/ts.png"

import Pt from "../../public/post.png"


export default function Inner() {
    return (
        <div >
            <div className='absolute top-48 hidden lg:block lg:top-24 '>
                <video
                autoPlay
                muted
                loop
                >
                    
                    <source src="black.webm" type="video/webm"/>
                </video>
            </div>
            <div className="wrapper text-center text-base font-bold ">
                <div className="itemLeft item1 ">I Am Manish Manandhar</div>
                <div className="itemLeft item2 ">A pasonate Frontend web developer</div>
                <div className="itemLeft item3 ">Strong foundation in the following programs</div>
                <div className="itemLeft item4 ">I have implemented dynamic behaviors in Next.js with template literals.</div>
                <div className="itemLeft item5 ">I am always eager to learn and apply new technologies</div>
                          
            </div>
            <div className="wrapper">
                <div className="itemRight item1 "> <Image src={Js} alt="javascript" /></div>
                <div className="itemRight item2  " ><Image src={Next} alt="javascript"  className=" bg-white-100 my-6 px-2"/></div>
                <div className="itemRight item3"> <Image src={React} alt="javascript" height={50} width={100}/></div>
                <div className="itemRight item4 "> <Image src={Tailwind} alt="javascript" /></div>
                <div className="itemRight item5"><Image src={Ts} alt="javascript" /></div>
                <div className="itemRight item6"><Image src={Pt} alt="javascript" /></div>
                                         
            </div>


        </div>
    )
}
