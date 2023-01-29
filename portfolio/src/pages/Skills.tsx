import { motion } from "framer-motion";
import { withAddons } from "@shared/addon-hoc";
import { urlFor, client } from "../client";
import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import React from "react";
import { withMotion } from "@shared/motion-hoc";

interface SkillsModel {
  name: string;
  bgColor: string;
  icon: string;
}

interface WorkModel {
  name: string;
  company: string;
  desc: string;
}

interface ExperiencesModel {
  works: WorkModel[];
  year: string;
}

function Skills() {
  const [skills, setSkills] = useState<SkillsModel[]>([]);
  const [experiences, setExperiences] = useState<ExperiencesModel[]>([]);

  useEffect(() => {
    const skillQuery = '*[_type == "skills"]';

    client.fetch(skillQuery).then((data) => {
      setSkills(data);
    });

    const experienceQuery = '*[_type == "experiences"]';

    client.fetch(experienceQuery).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <div className="flex-1 w-full flex-col">
      <h2 className="heading"> Skill & Experience</h2>
      <div className="w-4/5 mt-12 flex flex-row max-[900px]:w-full max-[900px]:flex-col">
        <motion.div className="flex-1 flex flex-wrap justify-start items-start mr-20 max-[900px]:m-0 max-[900px]:justify-center  max-[900px]:items-center">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="flex-centered flex-col text-center m-4 transition-all durtion-300 ease-in-out 2xl:my-2 2xl:mx-4"
            >
              <div
                className={`flex-centered bg-lightGray w-24 h-24 rounded-full  hover:shadow-[0_0_25px_#fef4f5] 2xl:w-36 2xl:h-36 sm:w-16 sm:h-16`}
              >
                <img
                  className="w-3/6 h-3/6"
                  src={urlFor(skill.icon).toString()}
                  alt={skill.name}
                />
              </div>
              <p className="paragraph text-center font-medium mt-2 2xl:mt-4">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="flex-1 flex justify-start items-start 2xl:mt-8 ">
          {experiences.map((experience) => (
            <React.Fragment key={experience.year}>
              <motion.div
                className="flex flex-row justify-start items-start my-4 mx-0 max-[450px]:mr-4"
                key={experience.year}
              >
                <div className="mr-12">
                  <p className="bold-text font-extrabold text-secondary">
                    {experience.year}
                  </p>
                </div>
              </motion.div>
              <motion.div className="flex-1">
                {experience.works.map((work) => (
                  <React.Fragment key={work.name}>
                    <motion.div
                      key={work.name}
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col justify-start items-start mb-4 cursor-pointer"
                      data-tip
                      data-for={work.name}
                    >
                      <h4 className="bold-text font-medium">{work.name}</h4>
                      <p className="paragraph font-normal text-gray mt-1">
                        {work.company}
                      </p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="max-w-[300px] !bg-white !shadow-xl !rounded-md !p-4 !text-gray !text-center !leading-6 !opacity-100 2xl:!text-3xl 2xl:!max-w-lg 2xl:!leading-8"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default withAddons(withMotion(Skills, ""), "skills", "bg-white");
