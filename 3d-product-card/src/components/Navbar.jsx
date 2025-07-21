import { motion } from "framer-motion";
import { FiShoppingCart, FiSearch, FiUser } from "react-icons/fi";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <motion.nav
            className={styles.navbar}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={styles.logo}>CECY San Felipe del Progreso Shop</div>
          <div className={styles.search}>
            <input type="text" placeholder="Buscar productos..." />
            <FiSearch className={styles.searchIcon} />
          </div>
          <div className={styles.actions}>
            <FiUser className={styles.icon} />
            <FiShoppingCart className={styles.icon} />
          </div>
        </motion.nav>
    );
};

export default Navbar;