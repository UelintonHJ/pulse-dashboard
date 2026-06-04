import { useState, useEffect } from "react";
import { motion, scale } from "framer-motion";
import { staggerContainer, slideUp } from "../../animations/variants";
import AnimatedCard from "../../components/Card/AnimatedCard"
import SkeletonCard from "../../components/Skeleton/SkeletonCard";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="pt-32 px-8">
            <motion.div
                variants={slideUp}
                initial="hidden"
                animate="visible"
                className="text-center"
            >
                <h1 className="text-6xl font-bold text-cyan-400">
                    Pulse Dashboard
                </h1>

                <p className="mt-6 text-2xl text-gray-400">
                    AI • Tech News • GitHub • Job
                </p>

                <p className="mt-6 text-xl">
                    Monitor the future of technology
                    <br />
                    in one place.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-10 px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition"
                >
                    Explore Dashboard
                </motion.button>
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-3 gap-6 mt-20"
            >
                {loading ? (
                    <>
                        <motion.div
                            variants={slideUp}
                        >
                            <SkeletonCard />
                        </motion.div>

                        <motion.div
                            variants={slideUp}
                        >
                            <SkeletonCard />
                        </motion.div>

                        <motion.div
                            variants={slideUp}
                        >
                            <SkeletonCard />
                        </motion.div>
                    </>
                ) : (
                    <>
                        <motion.div variants={slideUp}>
                            <AnimatedCard
                                icon="🤖"
                                title="Artificial Intelligence"
                                description="Latest AI trends"
                            />
                        </motion.div>

                        <motion.div variants={slideUp}>
                            <AnimatedCard
                                icon="💼"
                                title="Tech Jobs"
                                description="Junior and internship opportunities"
                            />
                        </motion.div>

                        <motion.div variants={slideUp}>
                            <AnimatedCard
                                icon="🚀"
                                title="GitHub"
                                description="Trending repositories"
                            />
                        </motion.div>
                    </>
                )}
            </motion.div>
        </div>
    );
}