import { useState } from 'react';

export default function FileUpload({ onUpload }) {
  const [file, setFile] = useState(null);

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 bg-gray-50 text-center">
      <input 
        type="file" 
        accept="application/pdf" 
        id="fileInput"
        className="hidden"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <label htmlFor="fileInput" className="cursor-pointer group">
        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📄</div>
        <p className="text-gray-600 font-medium">
          {file ? file.name : "Click to select JNTUK Result PDF"}
        </p>
      </label>
      {file && (
        <button 
          onClick={() => onUpload(file)}
          className="mt-6 bg-green-600 text-white px-8 py-2 rounded-full font-semibold hover:bg-green-700 transition"
        >
          Process and Store Marks
        </button>
      )}
    </div>
  );
}