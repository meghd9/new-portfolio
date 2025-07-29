import { AboutSection } from "../components/AboutSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

const Home = () => {
  return (
    <div>
      <ThemeToggle />
      <StarBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Home;
