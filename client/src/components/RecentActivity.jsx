function RecentActivity() {
  const activities = [
    "Solved Two Sum",
    "Solved Linked List",
    "Completed Mock Test",
  ];

  return (
    <div className="rounded-2xl bg-[#111827] p-6 text-white">
      
      <h2 className="text-lg font-semibold">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-4">
        {activities.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between border-b border-gray-700 pb-3"
          >
            <p>{item}</p>

            <span className="text-sm text-gray-400">
              2h ago
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default RecentActivity;