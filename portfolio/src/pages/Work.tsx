import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { motion } from "framer-motion";
import { withAddons } from "@shared/addon-hoc";
import { urlFor, client } from "../client";
import { useEffect, useState } from "react";

interface WorkModel {
  name: string;
  title: string;
  description: string;
  imgUrl: string;
  projectLink: string;
  codeLink: string;
  tags: string[];
}

function Work() {
  const categories = ["Web App", "Mobile", "React JS", "All"];
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [filter, setFilter] = useState("All");
  const [works, setWorks] = useState<WorkModel[]>([]);
  const [filteredWorks, setFilteredWorks] = useState<WorkModel[]>([]);

  useEffect(() => {
    const query = '*[_type == "works"]';
    client.fetch(query).then((data) => {
      setWorks(data);
      setFilteredWorks(data);
    });
  }, []);

  const handleFilter = (category: string) => {
    setFilter(category);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (category === "All") {
        setFilteredWorks(works);
        return;
      } else {
        setFilteredWorks(works.filter((work) => work.tags.includes(category)));
      }
    }, 500);
  };

  return (
    <div className="flex w-full flex-col bg-primary">
      <h2 className="heading">
        My Cretative <span className="text-secondary">Portfolio</span> section
      </h2>
      <div className="flex justify-center items-center flex-wrap gap-2 mt-16 mx-0 mb-8 ">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => handleFilter(item)}
            className={`paragraph flex-centered py-2 px-4 rounded-lg font-extrabold cursor-pointer transition-all duration-300 ease-linear hover:bg-secondary hover:text-white 2xl:py-4 2xl:px-8 2xl:rounded-2xl ${
              filter === item ? "bg-secondary text-white" : "bg-white text-gray"
            } `}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex flex-wrap justify-center items-center"
      >
        {filteredWorks.map((work, index) => (
          <div
            className="flex-centered flex-1 w-72 flex-col m-8 p-4 rounded-lg bg-white text-black cursor-pointer transition-all duration-300 ease-linear hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] 2xl:w-96 2xl:p-5 2xl:rounded-xl "
            key={index}
          >
            <div className="flex-centered w-full h-72  2xl:h-96 relative">
              <img
                className="w-full h-full rounded-lg object-cover"
                src={urlFor(work.imgUrl).toString()}
                alt={work.name}
              />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
                className="flex-centered absolute top-0 left-0 right-0 w-full h-full bg-black bg-opacity-50 rounded-lg opacity-0 2xl:opacity-100 transition-all duration-300 ease-linear"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex-centered w-12 h-12 rounded-full bg-black bg-opacity-50 text-white m-4 font-extrabold cursor-pointer transition-all duration-300 ease-linear"
                  >
                    <AiFillEye className="w-1/2 h-1/2 stroke-white fill-white" />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex-centered w-12 h-12 rounded-full bg-black bg-opacity-50 text-white m-4 font-extrabold cursor-pointer transition-all duration-300 ease-linear"
                  >
                    <AiFillGithub className="w-1/2 h-1/2 stroke-white fill-white" />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="flex-centered p-2 w-full relative flex-col">
              <h4 className="text-center bold-text mt-4 leading-6">
                {work.title}
              </h4>
              <p className="paragraph text-center text-gray pxy-4 py-2">
                {work.description}
              </p>

              <div className="flex-centered absolute py-2 px-4 rounded-xl bg-white -top-7">
                <p className="paragraph text-gray">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default withAddons(Work, "work");
