import Home from "./Pages/Home/Home";
import NavBar from "../src/Components/NavBar/NavBar";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import StackSection from "./Pages/StackSection/StackSection";
import Project from "./Pages/Project/Project";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <StackSection />
      <Project />
      
    </div>
  );
}

export default App;
