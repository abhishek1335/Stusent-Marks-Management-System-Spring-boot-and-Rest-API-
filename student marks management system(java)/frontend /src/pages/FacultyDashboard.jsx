import { marksService } from '../api/marksService';
import FileUpload from '../components/FileUpload';

export default function FacultyDashboard() {
  const handleFileUpload = async (file) => {
    try {
      const res = await marksService.uploadPdf(file);
      alert(res.data);
    } catch (err) {
      alert("Error: " + err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Faculty Dashboard</h2>
        <p className="text-gray-500">Upload JNTUK Semester PDF to populate the database.</p>
      </div>
      <FileUpload onUpload={handleFileUpload} />
    </div>
  );
}