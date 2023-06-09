import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './app.css'
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Values from "./components/Values/Values";
import Contact from "./components/Contact/Contact";
import Started from "./components/Started/Started";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">

      <Header />
      <Hero />
      <Companies />
      <Residencies />
      <Values />
      <Contact />
      <Started/>
      <Footer/>
    </div>
  );
};

export default App;
