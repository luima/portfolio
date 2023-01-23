import { images } from "@/constants";
import { motion } from "framer-motion";

const abouts = [
  {
    title: "Web Development",
    description: "I am a good web developer",
    imgUrl: images.about01,
  },
  {
    title: "FrontEnd Development",
    description: "I am a good web developer",
    imgUrl: images.about02,
  },
  {
    title: "Backend Development",
    description: "I am a good web developer",
    imgUrl: images.about03,
  },
  {
    title: "Animation Development",
    description: "I am a good web developer",
    imgUrl: images.about04,
  },
];

function About() {
  return (
    <>
      <h2 className="heading">
        I Know that <span className="text-secondary">Good Apps</span>
        <br />
        means <span className="text-secondary">Good Business</span>
      </h2>

      <div className="flex justify-center items-start flex-wrap mt-8">
        {abouts.map((about, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="w-[190px] flex justify-start items-start flex-col m-8  min-[2000px]:w-[370px] min-[2000px]:mx-16 min-[2000px]:my-8"
          >
            <img
              src={about.imgUrl}
              alt={about.title}
              className="w-full h-[170px] rounded-[15px] object-cover min-[2000px]:w-[320px]"
            />
            <h2 className="bold-text mt-5">{about.title}</h2>
            <p className="paragraph mt-3">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;
