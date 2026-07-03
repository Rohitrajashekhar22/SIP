function WeakTopics() {
  const topics = ["Graphs", "DP", "Trees"];

  return (
    <div className="rounded-2xl bg-[#111827] p-6 text-white">
      
      <h2 className="text-lg font-semibold">
        Weak Topics
      </h2>

      <div className="mt-6 space-y-4">
        {topics.map((topic) => (
          <div
            key={topic}
            className="flex items-center justify-between border-b border-gray-700 pb-3"
          >
            <div>
              <p>{topic}</p>

              <p className="text-sm text-gray-400">
                Needs more practice
              </p>
            </div>

            <span>→</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default WeakTopics;