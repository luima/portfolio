import { Navbar } from "@ui/index";
import { About, Footer, Header, Skills, Testimonials, Work } from "./pages";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
