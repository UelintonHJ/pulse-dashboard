import { useState, useEffect } from  "react";
import { motion } from "framer-motion";
import AnimatedCard from "../../components/Card/AnimatedCard"
import SkeletonCard from "../../components/Skeleton/SkeletonCard";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return  () => clearTimeout(timer);
    }, []);

    return (
        <div className="pt-32 px-8">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
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

                <button className="mt-10 px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition">
                    Explore Dashboard
                </button>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mt-20">
                {loading ? (
                    <>
                        <SkeletonCard/>
                        <SkeletonCard/>
                        <SkeletonCard/>
                    </>
                ) : (
                    <>
                        <AnimatedCard 
                            icon="🤖"
                            title="Artificial Intelligence"
                            description="Latest AI trends"
                        />

                        <AnimatedCard 
                            icon="💼"
                            title="Tech Jobs"
                            description="Junior and internship opportunities"
                        />

                        <AnimatedCard 
                            icon="🚀"
                            title="GitHub"
                            description="Trending repositories"
                        />
                    </>
                )}  
            </div>
        </div>
    );
}