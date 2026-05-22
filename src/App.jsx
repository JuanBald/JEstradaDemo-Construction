import { useState } from "react";
import { LayoutGroup } from "motion/react";

import Navbar from "./Navbar";
import ContactForm from "./ContactForm";
import About from "./About";
import Hero from "./Hero";
import Work from "./OurWork";
import Start from "./Start";

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <LayoutGroup>

        <Start setIntroDone={setIntroDone} />

        <Navbar introDone={introDone} />

        <Hero />
        <About />
        <Work />
        <ContactForm />

      </LayoutGroup>
    </div>
  );
}

export default App;