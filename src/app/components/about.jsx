"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from '../hooks/hooks'

export default function About() {
  const { ref } = useSectionInView('About', 0.5);

return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
 Graduado como {" "}
  <span className="font-medium">Tecnico Informatico</span>, me especialicé en {" "}
  <span className="font-medium">desarrollo web full-stack tras recibir una beca para un bootcamp.</span>{" "}
  <span className="italic"> Desde entonces,</span> mi pasión por la resolución de problemas me ha llevado a desarrollar aplicaciones que satisfacen las necesidades de los usuarios.
  Manejo las tecnologias {" "}
  <span className="underline">
     React, Next.js, Python y Node,
  </span>
  . También estoy familiarizado con TypeScript y Amazon Web Services
</p>


{/* <p>
  <span className="italic">Cuando no estoy programando</span>, paso el tiempo 
  tocando el piano, navegando en internet o con mis mascotas. También disfruto{" "}
  <span className="font-medium">aprendiendo cosas nuevas</span>. Actualmente estoy
  aprendiendo sobre{" "}
  <span className="font-medium">historia y filosofía</span>. También estoy
  aprendiendo a tocar la guitarra.
</p> */}
    </motion.section>
  );
}