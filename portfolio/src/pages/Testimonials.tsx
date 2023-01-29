import { withAddons, withMotion } from "@shared/index";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Testimonials() {
  return <div>Testimonials</div>;
}

export default withAddons(withMotion(Testimonials, ""), "testimonials", "");
