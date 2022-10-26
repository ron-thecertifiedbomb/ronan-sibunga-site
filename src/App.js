import Home from "./Pages/Home/Home";
import NavBar from "../src/Components/NavBar/NavBar";
import "./App.css";
import AboutMe from "./Pages/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
