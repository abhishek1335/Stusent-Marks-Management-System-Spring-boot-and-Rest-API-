export default function StudentResult({ data }) {
  return (
    <div className="mt-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-center">
          <p className="text-gray-500 text-xs font-bold uppercase">Current CGPA</p>
          <p className="text-3xl font-bold text-blue-700">{data.currentCgpa}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-center">
          <p className="text-gray-500 text-xs font-bold uppercase">Backlogs</p>
          <p className="text-3xl font-bold text-red-700">{data.totalBacklogs}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-center">
          <p className="text-gray-500 text-xs font-bold uppercase">Student Name</p>
          <p className="text-lg font-semibold text-gray-800 truncate">{data.name}</p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Subject Name</th>
              <th className="px-4 py-3 text-center">Grade</th>
              <th className="px-4 py-3 text-center">Credits</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.results.map((res, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 font-medium text-gray-900">{res.subjectName}</td>
                <td className={`px-4 py-3 text-center font-bold ${res.grade === 'F' ? 'text-red-600' : 'text-green-700'}`}>
                  {res.grade}
                </td>
                <td className="px-4 py-3 text-center">{res.credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}