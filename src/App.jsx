import About from "./components/About";
import Navbar from "./components/Navbar";
import Photo from "./components/Photo";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Post from "./components/Post";
import BackgroundAnimatedGradient from "./components/BackgroundAnimatedGradient";

const App = () => {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased selection
    selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="fixed top-0 inset-0 h-full w-full">
        {/* animated, multi-color full-screen gradient */}
        <BackgroundAnimatedGradient />
      </div>
      <div className="container mx-auto px-8 relative z-20">
        <Navbar />
        <Photo />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Post />
        <Contact />
      </div>
    </div>
  );
};
export default App;
