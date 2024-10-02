import Footer from "components/layouts/Footer";
import Hero from "components/layouts/Hero";
import Navbar from "components/layouts/Navbar";

export default function Home() {
  return (
    <div className="pt-4">
      <Navbar />
      <Hero />
      {/* <Footer /> */}
    </div>
  );
}
