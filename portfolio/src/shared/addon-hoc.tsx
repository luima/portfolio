import { NavigationDots, SocialMedia } from "@ui/index";

interface WithAddonsProps {
  name: string;
  className: string;
}

export default function withAddons<T extends WithAddonsProps = WithAddonsProps>(
  WrappedComponent: React.ComponentType<T>,
  name: string,
  classNames: string
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithAddons = (props: T) => {
    const omitedProps = props as Omit<T, keyof WithAddonsProps>;
    return (
      <div
        id={name}
        className={`w-full min-h-screen flex flex-row ${
          props.className ? props.className : classNames
        }`}
      >
        <SocialMedia />
        <div className="flex flex-1 justify-center items-center w-full flex-col py-16 px-8 2xl:px-4 2xl:pt-16 2xl:pb-8">
          <WrappedComponent {...(omitedProps as T)} />
        </div>

        <NavigationDots active={name} />
      </div>
    );
  };

  ComponentWithAddons.displayName = `withAddons(${displayName})`;

  return ComponentWithAddons;
}
