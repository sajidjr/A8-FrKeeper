export default function Loading() {
  return (
    <div className="p-10 grid grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="p-5 bg-white rounded-xl shadow animate-pulse">
          <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto"></div>
          <div className="h-4 bg-gray-300 mt-4 rounded"></div>
          <div className="h-3 bg-gray-200 mt-2 rounded"></div>
        </div>
      ))}
    </div>
  );
}