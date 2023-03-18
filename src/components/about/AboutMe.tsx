import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { hackerText } from "../../utils/functions";

const AboutMe = () => {
    return (
      <div className="pb-44" id="aboutme">
        <div>
          <h1 onMouseEnter={hackerText} data-value="ABOUT ME" className="p-12 font-bold md:text-5xl text-3xl">ABOUT ME</h1>
          <div className="flex align-center justify-center items-center md:p-12">
          <div className="text-xl flex flex-col md:pr-24">
            <p className="text-left p-4">
            My name is Winter Hardcastle and I am a web developer and maker passionate about creating new devices and tinkering with existing ones.
            </p>
            <p className="text-left p-4">
            When I am not busy developing websites or creating new projects, you can usually find me outside: I am an avid cyclist and climber, both sports that I enjoy exploring new routes and challenges within. I am also excited about 3D printing and design and love bringing my ideas to life through these mediums.
            </p>
            <p className="text-left p-4">
            I believe that my passion for technology and creativity has helped me become a better web developer, and I constantly strive to improve my skills and stay up-to-date with the latest trends and technologies. Thanks for checking out my portfolio, I’m always looking for exciting opportunities, so please don’t hesitate to reach out if you would like to work together!
            </p>
          </div>
          <div className="max-md:hidden pb-4">
            <img className="w-full rounded-2xl" src = "/images/IMG_9493.jpeg"/>
          </div>
          </div>
        </div>
      </div>
    )
} 

export default AboutMe;