import { motion } from "framer-motion";

export default function withMotion(
  WrappedComponent: React.ComponentType,
  classNames: string
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithMotion = () => {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} flex-centered`}
      >
        <WrappedComponent />
      </motion.div>
    );
  };

  ComponentWithMotion.displayName = `withMotion(${displayName})`;

  return ComponentWithMotion;
}
