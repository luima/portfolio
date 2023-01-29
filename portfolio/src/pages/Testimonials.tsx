import { withAddons, withMotion } from "@shared/index";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { urlFor, client } from "../client";
import { useEffect, useState } from "react";

function Testimonials() {
  const [brands, setBrands] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  useEffect(() => {
    const testimonialsQuery = '*[_type == "testimonials"]';

    client.fetch(testimonialsQuery).then((data) => {
      setTestimonials(data);
    });

    const brandsQuery = '*[_type == "brands"]';

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const handleClick = (left: boolean) => {
    let index = 0;
    if (left) {
      index = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    } else {
      index = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(index);
  };

  return (
    <div className="flex-1 flex-centered w-full flex-col">
      {!testimonials.length ? (
        <></>
      ) : (
        <>
          <div className="flex-centered w-3/5 min-h-[320px] bg-white flex p-8 rounded-2xl shadow-xl transition-all duration-300 ease-in-out 2xl:min-h-[450px] max-[850px]:w-full max-[600px]:flex-col">
            <img
              src={urlFor(testimonial.imageUrl).toString()}
              alt="testimonial"
              className="w-28 h-28 object-cover rounded-full 2xl:w-36 2xl:h-36"
            />
            <div className="flex-1 h-full py-0 px-8 text-left flex flex-col justify-around items-start">
              <p className="paragraph text-xl leading-8 text-black">
                {testimonial.feddback}
              </p>
              <div className="">
                <h4 className="bold-text font-semibold text-secondary mt-8">
                  {testimonial.name}
                </h4>
                <h5 className="paragraph font-normal text-gray mt-1">
                  {testimonial.company}
                </h5>
              </div>
            </div>
          </div>
          <div className="flex-centered flex-row mt-4 gap-8">
            <div
              className="flex-centered w-14 h-14 rounded-full bg-white transition-all duration-300 ease-in-out hover:bg-secondary"
              onClick={() => handleClick(true)}
            >
              <HiChevronLeft className="w-5 h-5 text-secondary hover:text-white" />
            </div>
            <div
              className="flex-centered  w-14 h-14 rounded-full bg-white transition-all duration-300 ease-in-out hover:bg-secondary"
              onClick={() => handleClick(false)}
            >
              <HiChevronRight className="w-5 h-5 text-secondary hover:text-white" />
            </div>
          </div>
        </>
      )}

      <div className="flex-centered w-4/5 flex-wrap mt-8  max-[450px]:w-full">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
            className="w-36 m-6 2xl:w-48 2xl:m-8 max-[450px]:w-32 max-[450px]:m-4"
          >
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0"
              src={urlFor(brand.imgUrl).toString()}
              alt={brand.name}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default withAddons(
  withMotion(Testimonials, ""),
  "testimonials",
  "bg-primary"
);
