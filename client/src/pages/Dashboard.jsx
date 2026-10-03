import StatsCard from "../components/StatsCard";
import TopicPerformance from "../components/TopicPerformance";
import WeakTopics from "../components/WeakTopics";
import RecentActivity from "../components/RecentActivity";

function Dashboard() {

  const stats = [
    {
      title: "Problems Solved",
      value: "128",
      improvement: "+12 this week",
    },
    {
      title: "Accuracy Rate",
      value: "87%",
      improvement: "+5% improvement",
    },
    {
      title: "Coding Contests",
      value: "24",
      improvement: "3 this month",
    },
    {
      title: "Current Streak",
      value: "15",
      improvement: "days active",
    },
  ];

  return (
    <section className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Howdie, Rohit!
        </h1>

        <p className="mt-2 text-gray-500">
          Here's your coding interview preparation progress.
        </p>
      </div>

      {/* Row 1 */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => (
          <StatsCard
            key={item.title}
            title={item.title}
            value={item.value}
            improvement={item.improvement}
          />
        ))}

      </div>

      {/* Ro    w 2 */}
      <div className="grid gap-4 lg:grid-cols-3">

        {/* Left Big Card */}
        <div className="lg:col-span-2">
          <TopicPerformance />
        </div>

        {/* Right Small Card */}
        <WeakTopics />

      </div>

      {/* Row 3 */}
      <RecentActivity />

    </section>
  );
}

export default Dashboard;