import { motion } from "framer-motion";
import { images } from "@constants";
import { withAddons } from "@shared/addon-hoc";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

function Header() {
  return (
    <div className="flex-centered relative bg-[url(../../assets/bgIMG.png)] bg-cover bg-repeat bg-center flex-1 w-full h-full flex-row pt-32 px-8 pb-0 2xl:pt-40 max-[1200px]:flex-col max-[450px]:pt-24 max-[450px]:px-4 max-[450px]:pb-8">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-[0.65] flex flex-col justify-start items-start h-full max-[2000px]:w-full max-[2000px]:mr-0"
      >
        <div className="w-full flex justify-end items-end max-[1200px]:justify-start max-[1200px]:items-start flex-col">
          <div className="bubble flex-row flex-centered">
            <span className="text-5xl 2xl:text-8xl">👋</span>
            <div className="ml-[20px]">
              <p className="paragraph">Hello, I am</p>
              <h1 className="heading">Luis</h1>
            </div>
          </div>
          <div className="flex-centered bubble flex-col mt-8">
            <p className="paragraph uppercase w-full text-right">
              Full Stack Developer
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex-1 h-full flex justify-end items-end relative"
      >
        <img
          src={images.profile}
          alt="profile_photo"
          className="w-full object-contain z-10"
        />
        <motion.img
          src={images.circle}
          alt="profile_photo_circle"
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute left-0 right-0 bottom-0 z-0 w-full h-[90%] max-[1200px]:mx-0 max-[1200px]:my-8"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="flex-[0.75] flex flex-col justify-evenly items-start h-full ml-4 
              max-[1200px]:w-full max-[1200px]:flex-row max-[1200px]:flex-wrap max-[1200px]:ml-0
        "
      >
        {[images.flutter, images.redux, images.sass].map((circle, index) => (
          <div
            key={index}
            className={`flex-centered w-[100px] h-[100px] rounded-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)] 
              first:w-[120px] first:h-[120px] 
              even:m-5 even:w-[150px] even:h-[150px] 
              last:w-[90px] last:h-[90px]
              2xl:first:w-[250px] 2xl:first:h-[250px] 
              2xl:even:m-5 2xl:even:w-[170px] 2xl:even:h-[170px] 
              2xl:last:w-[120px] 2xl:last:h-[120px]
              max-[1200px]:m-4
            `}
          >
            <img src={circle} alt="techs" className="w-[60%] h-[60%]" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default withAddons(Header, "home");
