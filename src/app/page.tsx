import Image from "next/image";
import Hero from "@/src/components/sections/Hero";
import NavBar from "@/src/components/sections/NavBar";
import About from "@/src/components/sections/About";
import TreatmentMenu from "@/src/components/sections/TreatmentMenu";
import Testimonials from "@/src/components/sections/Testimonials";
import Local from "../components/sections/Local";
import Horarios from "../components/sections/Horarios";
import Footer from "@/src/components/sections/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* 1. NavBar (Impacto) */}
      <NavBar />
      {/* 2. Seção Principal (Impacto) */}
      <Hero />

      {/* 3. Seção Sobre (Opcional colocar aqui entre Hero e Menu) */}
      <About /> 

      {/* 4. Seção de Serviços (Funcionalidade) */}
      <TreatmentMenu />

      {/* 5. Prova Social (Depoimentos) */}
      <Testimonials />

      {/* Seção de Localização */}
      <Local />

      {/* Seção de Horários */}
      <Horarios />
      
      {/* 6. Rodapé (Informações Técnicas/Localização) */}
      <Footer />
    </main>
  );
}
