import About from "./components/About";
import Navbar from "./components/Navbar";
import Photo from "./components/Photo";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Post from "./components/Post";

const App = () => {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased selection
    selection:bg-cyan-300 selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:linear-gradient(135deg,#0B4C7D_0%,#6A1B6E_50%,#000_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
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
