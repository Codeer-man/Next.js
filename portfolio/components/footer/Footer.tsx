import { FaLocationArrow, FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaGithub } from "react-icons/fa";
import MagicButton from "../ui/MagicButton";
import { link } from "fs";


export default function Footer() {

    const socialMedia = [{
        id: 1,
        img: <FaFacebook />,
        link: "https://www.facebook.com/ani.manandhar.1/"
    }, {
        id: 2,
        img: <FaXTwitter />,
        link: "https://x.com/Man_learner69"
    }, {
        id: 3,
        img: <FaGithub />,
        link: "https://github.com/Codeer-man",
    }

    ]
    return (
        <footer className="w-full pt-32 pd-10 " id="contact">
            {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <video
                autoPlay
                muted
                loop
                className="w-full h-full"
            >

                <source  src="/cards-video.webm" type="video/webm"/>
            </video>
        </div> */}
            <div className=" flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital presence next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let's discuss how can I help you achieve your goals.</p>

                <a href="mailto:mdrmoney34@gmail.com">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>
            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-small md:font-normal font-light">Copyright
                    © 2024 Manish</p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border-black-300" key={profile.id}>
                            <a href={profile.link} target="blank">{profile.img}</a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
