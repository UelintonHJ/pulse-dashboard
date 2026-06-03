import AnimatedCard from "../../components/Card/AnimatedCard";

function Dashboard() {
    return (
        <div className="pt-32 px-8">

            <h1 className="text-4xl mb-8">
                Dashboard
            </h1>

            <div className="grid md:grid-cols-2 gap-6">

                <AnimatedCard 
                    icon="📰"
                    title="News"
                    description="Latest techbology news"    
                />

                <AnimatedCard 
                    icon="📊"
                    title="GitHub Stats"
                    description="Trending repositories"    
                />

                <AnimatedCard 
                    icon="💼"
                    title="Jobs"
                    description="Latest opportunities"    
                />

                <AnimatedCard 
                    icon="🤖"
                    title="AI Insights"
                    description="Artificial Intelligence updates"    
                />

            </div>

        </div>
    );
}

export default Dashboard;