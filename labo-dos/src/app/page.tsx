//Ejercicio-2

import styles from "./page.module.css";
import RegisterForm from "../components/RegisterForm";



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Directorio de Perfiles</h1>
        <p className={styles.description}>Filtrado dinamico</p>    
          <RegisterForm/>
  
      </div>
    </main>
  );
}