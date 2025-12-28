import { useState } from 'react';
import { marksService } from '../api/marksService';
import StudentResult from '../components/StudentResult';

export default function StudentPortal() {
  const [rollNo, setRollNo] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    if(!rollNo) return alert("Enter Roll Number");
    setLoading(true);
    try {
      const res = await marksService.getStudentResults(rollNo);
      setData(res.data);
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Marks Portal</h2>
      <div className="flex flex-col md:flex-row gap-3">
        <input 
          type="text"
          className="flex-1 border-2 border-gray-200 rounded-lg p-3 outline-none focus:border-blue-500 transition"
          placeholder="Enter Roll Number (e.g., 19BQ1A0501)"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <button 
          onClick={fetchResults}
          disabled={loading}
          className="bg-blue-700 text-white px-10 py-3 rounded-lg font-bold hover:bg-blue-800 disabled:opacity-50"
        >
          {loading ? "Loading..." : "View Marks"}
        </button>
      </div>
      {data && <StudentResult data={data} />}
    </div>
  );
}