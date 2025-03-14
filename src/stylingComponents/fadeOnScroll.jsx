import { motion } from "framer-motion";

   export const FadeInWhenVisible = ({ children }) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )
      }

      export const FadeIn = ({ children }) => {
        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 1 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          >
            {children}
          </motion.div>
        )
      }