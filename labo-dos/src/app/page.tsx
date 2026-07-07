//Ejercicio-1


import styles from "./page.module.css";
import ProfileCard from "../components/ProfileCard";

interface ProfileProps {
  nombre: string; rol: string; tecnologias: string[];
  avatar?: string; disponible?: boolean;
}

const perfiles: ProfileProps[] = [
  { nombre: "Ana García", rol: "Frontend Developer",
    tecnologias: ["React", "TypeScript", "Next.js"], disponible: true },
  { nombre: "Carlos Mejía", rol: "Full Stack Developer",
    tecnologias: ["Node.js", "React", "PostgreSQL"], disponible: false },
  { nombre: "María Torres", rol: "UI/UX Designer & Dev",
    tecnologias: ["Figma", "React", "CSS Modules"], disponible: true },
    { nombre: "the saac", rol: "QA/Debugger",
    tecnologias: ["JAVA E2E", "KOTLIN", "MIRA SANS DE UNDERTALE EEEEEEEEEEE"], disponible: true },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Directorio de Perfiles</h1>
        <p className={styles.subtitle}>Componentes reutilizables con props tipadas</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {perfiles.map((p) => (
            <ProfileCard key={p.nombre} {...p} />
          ))}
        </div>
      </div>
    </main>
  );
}