import styles from "./page.module.css";
import Welcome from "./components/welcome/page";
import MenuBar from "./components/menubar/page";
import Presentation from "./components/presentation/page";
import Services from "./components/services/page";
import Offres from "./components/offres/page";
import Contact from "./components/contact/page";

export default function Home() {
  return (
    <div className={styles.container}>
      <MenuBar isMain={true} />
      <Welcome />
      <Presentation />
      <Services/>
      <Offres/>
      <Contact/>
    </div>
  );
}
