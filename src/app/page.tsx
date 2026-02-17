"use client";
import Hero from "@/src/components/sections/Hero";
import NavBar from "@/src/components/sections/NavBar";
import About from "@/src/components/sections/About";
import TreatmentMenu from "@/src/components/sections/TreatmentMenu";
import Testimonials from "@/src/components/sections/Testimonials";
import Local from "../components/sections/Local";
import Horarios from "../components/sections/Horarios";
import Footer from "@/src/components/sections/Footer";
import PopUp from "@/src/components/pop-up/Pop-up";
import styles from "../components/styles/Main/main.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(true);

  useEffect(() => {
    if (typeof document === "undefined") return;

    if (isPopUpOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isPopUpOpen]);

  return (
    <main className="flex min-h-screen flex-col pt-15" style={{ position: "relative", overflow: "hidden" }}>
      <h1 style={{ color: "#fff", width: "1px", height: "1px" }}>Maria Depill</h1>
      {isPopUpOpen && (
        <div className={styles.containerPopUp}>
          <PopUp onClose={() => setIsPopUpOpen(false)} />
        </div>
      )}

      <NavBar />
      <section id="agendar-horario" style={{ scrollMarginTop: '100px' }}>
        <Hero />
      </section>
      <section id="beneficios" style={{ scrollMarginTop: '100px' }}>
        <About /> 
      </section>
      <section id="servicos" style={{ scrollMarginTop: '100px' }}>
        <TreatmentMenu />
      </section>
      <Testimonials />
      <section id="endereco" style={{ scrollMarginTop: '100px' }}>
        <Local />
      </section>
      <section id="horario-de-atendimento" style={{ scrollMarginTop: '100px' }}>
        <Horarios />
      </section>
      <Footer />
    </main>
  );
}
