import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { hackerText } from "../../utils/functions";

const AboutMe = () => {
    return (
      <div className="pb-72" id="aboutme">
        <div>
          <h1 onMouseEnter={hackerText} data-value="ABOUT ME" className="p-12 font-bold md:text-5xl text-3xl">ABOUT ME</h1>
          <div className="flex gap-4 justify-between md:p-12">
          <img className="w-1/4 max-md:hidden rounded-2xl" src ="/images/IMG_9493.JPEG"/>
          <div className="p-4 md:text-left text-center md:w-3/4 w-full">
            <p className="py-4 text-sm md:text-lg">
            My name is Winter Hardcastle, I'm a web developer and creative who is passionate about building great software.
            I believe creativity is the catalyst for motivational energy, and I'm constantly striving to learn new things. I’m always looking for exciting opportunities, so don’t hesitate to reach out if you want to work together!
            </p>
            <p className="py-2">
              <span className="font-bold">Location: </span> New York City!
            </p>
            <p className="py-2">
              <span className="font-bold">Interests: </span> Climbing, Cycling, 3D printing, Design, Soccer, Mechanical Keyboards(the list goes on...)
            </p>
            <p className="font-bold pt-2">
              Current Skillset: 
            </p>
              <a>
                <img src="https://skillicons.dev/icons?i=react,ts,js,py,css,html,redux,postgres,express,tailwind,nextjs,sequelize,threejs,vite,git&theme=light" />
              </a>
          </div>
          </div>
        </div>
      </div>
    )
} 

export default AboutMe;