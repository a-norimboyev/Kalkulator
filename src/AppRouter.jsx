import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Login from './pages/Login.jsx';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import Payments from './pages/Payments';
import Rating from './pages/Rating';
import ExtraLessons from './pages/ExtraLessons';
import Settings from './pages/Settings';
import Users from './pages/Users';
import Groups from './pages/Groups';
import Reports from './pages/Reports';
import Messages from './pages/Messages';
import Korsatgichlar from './pages/Korsatgichlar';
import Dokon from './pages/Dokon';

function MainApp() {
  const { user } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!user) {
    return <Login />;
  }

  return (
    <div className={`app-layout ${sidebarOpen ? '' : 'sidebar-collapsed'}`}>
      <Sidebar isOpen={sidebarOpen} />
      <div className="main-content">
        <Navbar onToggle={() => setSidebarOpen(o => !o)} />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/extralessons" element={<ExtraLessons />} />
            <Route path="/korsatgichlar" element={<Korsatgichlar />} />
            <Route path="/dokon" element={<Dokon />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<Users />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainApp />
      </AuthProvider>
    </BrowserRouter>
  );
}
