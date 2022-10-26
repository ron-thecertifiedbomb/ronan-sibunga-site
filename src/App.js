import NavBar from "../src/Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/AboutMe/AboutMe";
import StackSection from "./Pages/StackSection/StackSection";
import Project from "./Pages/Project/Project";
import Contact from "./Pages/Contact/Contact";
import "./App.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <StackSection />
      <Project />
       <Contact />  
    </div>
  );
}

export default App;
