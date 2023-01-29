import { motion } from "framer-motion";

interface WithMotionProps {
  name: string;
  className: string;
}

export default function withMotion<T extends WithMotionProps = WithMotionProps>(
  WrappedComponent: React.ComponentType<T>,
  classNames: string
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithMotion = (props: T) => {
    const omitedProps = props as Omit<T, keyof WithMotionProps>;
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} flex-centered`}
      >
        <WrappedComponent {...(omitedProps as T)} />
      </motion.div>
    );
  };

  ComponentWithMotion.displayName = `withMotion(${displayName})`;

  return ComponentWithMotion;
}
