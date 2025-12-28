export default function Navbar({ setView, currentView }) {
  return (
    <nav className="bg-blue-800 text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">JNTUK Marks Manager</h1>
        <div className="space-x-6">
          <button 
            onClick={() => setView('student')}
            className={`${currentView === 'student' ? 'border-b-2' : 'opacity-80'} pb-1 hover:opacity-100 transition`}
          >
            Student Portal
          </button>
          <button 
            onClick={() => setView('faculty')}
            className={`${currentView === 'faculty' ? 'border-b-2' : 'opacity-80'} pb-1 hover:opacity-100 transition`}
          >
            Faculty Dashboard
          </button>
        </div>
      </div>
    </nav>
  );
}