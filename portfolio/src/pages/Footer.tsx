import { withAddons, withMotion } from "@shared/index";

function Footer() {
  return <div>Footer</div>;
}

export default withAddons(withMotion(Footer, ""), "contact", "");
