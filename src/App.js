import Home from "./Pages/Home/Home";
import NavBar from "../src/Components/NavBar/NavBar";
import AboutMe from "./Pages/AboutMe/AboutMe";
import StackSection from "./Pages/StackSection/StackSection";
import Project from "./Pages/Project/Project";
import "./App.css";
// import ContactPage from "./Pages/Contact/Contact";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <StackSection />
      <Project />
       {/* <ContactPage />  */}
    </div>
  );
}

export default App;
