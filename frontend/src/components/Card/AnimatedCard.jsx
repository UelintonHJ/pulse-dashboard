function AnimatedCard({ icon, title, description }) {
    return (
        <div
            className="
            bg-white/10
            backdrop-blur-lg
            rounded-xl
            p-6
            border border-white/10

            hover:scale-105
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
        </div>
    );
}

export default AnimatedCard;