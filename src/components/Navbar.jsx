import { useAuth } from '../context/AuthContext';
import './Navbar.css';

export default function Navbar({ onToggle }) {
  const { logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="nb-hamburger" onClick={onToggle}>
          <span/><span/><span/>
        </button>
      </div>
      <div className="navbar-right">
        <button className="nb-icon-btn" title="Bildirishnomalar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </button>
        <button className="nb-icon-btn" onClick={logout} title="Chiqish">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}
