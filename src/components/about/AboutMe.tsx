import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { hackerText } from "../../utils/functions";

const AboutMe = () => {
    return (
      <div className="pb-64" id="aboutme">
        <div>
          <h1 onMouseEnter={hackerText} data-value="ABOUT ME" className="p-12 font-bold md:text-5xl text-3xl">ABOUT ME</h1>
          <div className="flex gap-4 justify-between items-center md:p-12">
          <img className="w-1/4 max-md:hidden rounded-2xl" src ="/images/IMG_9493.JPEG"/>
          <div className="w-3/4 text-lg">
            <p className="text-left p-4">
            My name is Winter Hardcastle, I'm a web developer and creative who is passionate about building great software.
            When I am not coding, you can usually find me outside exploring new routes and challenges in cycling and rock climbing. I am also deeply interested in 3D printing and design and love bringing my ideas to life through these mediums.
            I believe creativity is the catalyst for motivational energy, and I'm constantly striving to learn new things. I’m always looking for exciting opportunities, so please don’t hesitate to reach out if you would like to work together!
            </p>
          </div>
          </div>
        </div>
      </div>
    )
} 

export default AboutMe;