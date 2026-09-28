function ProgressCard({ title, value, description }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-lg transition">
      <p className="text-gray-500">{title}</p>

      <h2 className="mt-3 text-4xl font-bold">
        {value}
      </h2>

      <p className="mt-2 text-sm text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default ProgressCard;