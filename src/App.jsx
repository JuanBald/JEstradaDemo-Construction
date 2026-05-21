import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import About from "./About";
import Hero from "./Hero";
import Work from "./OurWork";


function App() {
  return (
    <>
<div className="w-full flex flex-col">
        <Navbar />

        <Hero/>

        <About />

        <Work/>

        <ContactForm/>

      </div>
    </>
  );
}

export default App;