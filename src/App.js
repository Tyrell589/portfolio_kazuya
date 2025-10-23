import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import FlexibleCubes from "./components/FlexibleCubes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import ScrollToTopButton from "./components/ScrollToTop";
import Skills from "./components/Skills";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppContent = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="App relative">
      {isDarkMode && <FlexibleCubes />}
      <div className="relative z-10">
        <Navbar />
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Footer />
        <ScrollToTopButton />
        <ToastContainer />
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
