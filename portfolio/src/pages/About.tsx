import { client, urlFor } from "@/client";
import { images } from "@/constants";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AboutModel {
  title: string;
  description: string;
  imgUrl: string;
}

function About() {
  const [abouts, setAbouts] = useState<AboutModel[]>([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

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
              src={urlFor(about.imgUrl)}
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
