import { NavigationDots, SocialMedia } from "@ui/index";

export default function withAddons(
  WrappedComponent: React.ComponentType,
  name: string,
  classNames: string
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithAddons = () => {
    return (
      <div
        id={name}
        className={`min-w-fit min-h-screen flex flex-row ${classNames}`}
      >
        <SocialMedia />
        <div className="flex flex-1 justify-center items-center w-full flex-col py-16 px-8 2xl:px-4 2xl:pt-16 2xl:pb-8">
          <WrappedComponent />
        </div>

        <NavigationDots active={name} />
      </div>
    );
  };

  ComponentWithAddons.displayName = `withAddons(${displayName})`;

  return ComponentWithAddons;
}
