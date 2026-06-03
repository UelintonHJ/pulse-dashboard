import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-5xl font-bold">
                    Pulse Dashboard
                </h1>

                <p className="mt-4 text-zinc-400 text-center">
                    Modern dashboard for tech trends and AI insights.
                </p>
            </motion.div>
        </div>
    )
}