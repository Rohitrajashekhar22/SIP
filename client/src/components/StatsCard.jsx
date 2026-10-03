function StatsCard({ title, value, improvement }) {
    return (
       <div>
       <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="mt-3 text-3xl font-semibold text-gray-900">{value}</p>
            <p className="mt-2 text-sm text-gray-500">{improvement}</p>
        </div>
        </div>
    );
}

export default StatsCard;
