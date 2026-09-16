import Activities from "@/components/activities/Activities";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/projects/Projects";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Activities />
      </main>
    </div>
  );
};

export default Home;
