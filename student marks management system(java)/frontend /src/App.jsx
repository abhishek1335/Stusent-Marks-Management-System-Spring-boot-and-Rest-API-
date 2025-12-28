import { useState } from 'react';
import Navbar from './components/Navbar';
import StudentPortal from './pages/StudentPortal';
import FacultyDashboard from './pages/FacultyDashboard';

function App() {
  const [view, setView] = useState('student');

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar setView={setView} currentView={view} />
      <div className="py-12">
        {view === 'student' ? <StudentPortal /> : <FacultyDashboard />}
      </div>
    </div>
  );
}

export default App;