import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useGesture } from "react-use-gesture";
import axios from "axios";
import styles from "../styles/ProductGrid.module.css";

const ProductGrid = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=10")
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            });
    }, []);

    const bind = useGesture({
        onMove: ({ xy: [x, y], target }) => {
            const rect = target.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            target.style.transform = `perspective(1000px) rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)`;
        },
        onHover: ({ hovering, target }) => {
            target.style.transform = hovering
            ? target.style.transform
            : "perspective(1000px) rotateX(0) rotateY(0)";
        },
    });
if (loading) return <div className={styles.loading}>Cargando...</div>;
    return (
        <div className={styles.grid}>
        {products.map(product => (
            <motion.div
                key={product.id}
                className={styles.card}
                {...bind()}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                >
                    <img src={product.image} alt={product.title} className={styles.image} />
                    <h3 className={styles.title}>{product.title}</h3>
                    <p className={styles.price}>${product.price}</p>
                <motion.button
                    className={styles.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                Add to Cart
                </motion.button>
            </motion.div>
        ))}
        </div>
    );
};
export default ProductGrid;