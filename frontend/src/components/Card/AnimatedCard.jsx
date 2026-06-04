import { motion } from "framer-motion";

function AnimatedCard({ icon, title, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
                scale: 1.05,
                y: -5
            }}
            transition={{
                duration: 0.5
            }}
            className="
                h-full
                min-h-[180px]
                flex
                flex-col
                justify-between

                bg-white/10
                backdrop-blur-lg
                rounded-xl
                p-6
                border border-white/10

                hover:shadow-2xl
                hover:shadow-cyan-500/30

                transition-all
                duration-300
            "
        >
            <h2 className="text-2xl mb-3">
                {icon} {title}
            </h2>

            <p className="text-gray-400">
                {description}
            </p>
        </motion.div>
    );
}

export default AnimatedCard;