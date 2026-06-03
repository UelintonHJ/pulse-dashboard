import AnimatedCard from "../../components/Card/AnimatedCard";

function Favorites() {
    return (
        <div className="pt-32 px-8">

            <h1 className="text-4xl mb-6">
                Saved News
            </h1>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
                <AnimatedCard
                    icon="📰"
                    title="OpenAI"
                    description="New GPT release"
                />
            </div>

            <h1 className="text-4xl mb-6">
                Saved Jobs
            </h1>

            <div className="grid md:grid-cols-2 gap-6">
                <AnimatedCard
                    icon="💼"
                    title="Frontend Intern"
                    description="Remote opportunity"
                />
            </div>

        </div>
    );
}

export default Favorites;