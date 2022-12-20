import { motion } from 'framer-motion';

const PageTransition = ({ children }) => (
    <motion.article
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -30, opacity: 0 }}
        enter={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ position: 'relative' }}
    >
        {children}
    </motion.article>
);

export default PageTransition;
