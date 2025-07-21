import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.content}>
        <ProductGrid />
      </div>
    </div>
  );
}

export default App;