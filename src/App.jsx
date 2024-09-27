import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <div>
      <Header />
      <hr className="mt-3 mx-5" />
      <Experience />
      <hr className="mt-3 mx-5" />
      <AboutMe />
      <hr className="mt-3 mx-5" />
      <SocialLinks />
      <hr className="mt-3 mx-5" />
      <ContactMe />
      <hr className="mt-3 mx-5" />
      <Footer />
    </div>
  );
};

export default App;
