import { useEffect, useState } from "react";
import { AlliesSection } from "./components/AlliesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { LetterModal } from "./components/LetterModal";
import { LootSection } from "./components/LootSection";
import { ResourceBar } from "./components/ResourceBar";
import { heroes, type Hero } from "./data/heroes";

function App() {
  const [selected, setSelected] = useState<Hero>(heroes[0]);
  const [isChestOpen, setChestOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setChestOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <main>
      <ResourceBar />
      <HeroSection />
      <AlliesSection selected={selected} onSelect={setSelected} />
      <LootSection isOpen={isChestOpen} onOpen={() => setChestOpen(true)} />
      <Footer />
      {isChestOpen && <LetterModal onClose={() => setChestOpen(false)} />}
    </main>
  );
}

export default App;
