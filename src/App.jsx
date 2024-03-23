import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <Hero />
      </div>
    </>
  );
}
export default App;
