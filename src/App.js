import Home from "./Pages/Home/Home";
import NavBar from "../src/Components/NavBar/NavBar";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";
import StackSection from "./Pages/StackSection/StackSection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <StackSection />
    </div>
  );
}

export default App;
