import Hero from "../components/landing-page/Hero";
import AboutProject from "../components/landing-page/AboutProject";
import DatasetSection from "../components/landing-page/DatasetSection";
import ModelPerform from "../components/landing-page/ModelPerform";
import SystemOperation from "../components/landing-page/SystemOperation";
import GetReady from "../components/landing-page/GetReady";

export default function HomePage() {
  return (
    <>
      {/* hero */}
      <div className="container-center ">
        <Hero />
      </div>

      {/* Tentang proyek */}
      <div>
        <AboutProject />
      </div>

      {/* dataset */}
      <div className="container-center">
        <DatasetSection />
      </div>

      {/* Model Perform */}
      <div className="container-center">
        <ModelPerform />
      </div>

      {/* sistem operation */}
      <div className="container-center">
        <SystemOperation />
      </div>

      {/* get ready */}
      <div className="container-center">
        <GetReady />
      </div>
    </>
  );
}
