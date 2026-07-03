import { PieChart, Pie, Cell } from "recharts";

function TopicPerformance() {

  const data = [
    { name: "Arrays", value: 400, color: "#FF6B6B" },
    { name: "Linked Lists", value: 300, color: "#4ECDC4" },
    { name: "Trees", value: 300, color: "#45B7D1" },
    { name: "Graphs", value: 200, color: "#FFA07A" },
  ];

  return (
    <div className="rounded-xl bg-white p-5 shadow">

      <h2 className="mb-5 text-xl font-bold">
        Topic Performance
      </h2>

      <div className="flex items-center gap-10">

        {/* Ring Chart */}
        <PieChart width={250} height={250}>
          
          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={90}
          >
            {data.map((item) => (
              <Cell
                key={item.name}
                fill={item.color}
              />
            ))}
          </Pie>

        </PieChart>

        {/* Topics List */}
        <div className="space-y-3">

          {data.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-3"
            >

              <div
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: item.color,
                }}
              ></div>

              <p>
                {item.name} - {item.value}
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default TopicPerformance;