import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import GeneralAdmission from './components/GeneralAdmission';
import SpecialtyPage from './components/SpecialtyPage';
import PatientDetails from './components/PatientDetails';
import DailyReports from './components/DailyReports';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <Navigation setSidebarOpen={setSidebarOpen} />
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <Routes>
                  <Route path="/" element={<GeneralAdmission />} />
                  <Route path="/specialty/:name" element={<SpecialtyPage />} />
                  <Route path="/patient/:id" element={<PatientDetails />} />
                  <Route path="/reports" element={<DailyReports />} />
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;