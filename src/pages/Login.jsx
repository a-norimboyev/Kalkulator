import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [selectedRole, setSelectedRole] = useState('student');
  const [showPass, setShowPass] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Login va parolni kiriting');
      return;
    }

    const success = login(username, password, selectedRole);
    if (!success) {
      setError("Login yoki parol noto'g'ri");
    }
  };

  // Tez kirish funksiyalari
  const quickLogin = (demoRole) => {
    const demoCredentials = {
      admin: { username: 'admin', password: 'admin123' },
      teacher: { username: 'teacher', password: 'teacher123' },
      student: { username: 'student', password: 'student123' },
    };
    
    const creds = demoCredentials[demoRole];
    setSelectedRole(demoRole);
    login(creds.username, creds.password, demoRole);
  };

  return (
    <div className="lp-page">
      {/* Chap — rasm */}
      <div className="lp-left">
        <svg viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', maxWidth:360, height:'auto'}}>
          {/* Telefon */}
          <rect x="155" y="80" width="110" height="180" rx="16" fill="#FF8C00" />
          <rect x="165" y="95" width="90" height="130" rx="8" fill="#fff" opacity="0.15" />
          <circle cx="210" cy="240" r="8" fill="#fff" opacity="0.5" />
          {/* Inson */}
          <circle cx="210" cy="145" r="22" fill="#1a1a2e" />
          <ellipse cx="210" cy="185" rx="18" ry="12" fill="#1a1a2e" />
          {/* Qulf */}
          <rect x="255" y="190" width="50" height="40" rx="8" fill="#7ecf7e" />
          <path d="M265 190 v-12 a15 15 0 0 1 30 0 v12" stroke="#7ecf7e" strokeWidth="6" fill="none" strokeLinecap="round" />
          <circle cx="280" cy="210" r="5" fill="#fff" />
          {/* Chek belgisi */}
          <circle cx="155" cy="115" r="18" fill="#7ecf7e" />
          <path d="M146 115 l6 7 l12-13" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* X belgisi */}
          <circle cx="265" cy="115" r="16" fill="#FF8C00" />
          <path d="M258 108 l14 14 M272 108 l-14 14" stroke="#fff" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Login qatori */}
          <rect x="100" y="155" width="55" height="14" rx="7" fill="#7ecf7e" />
          <circle cx="85" cy="162" r="8" fill="#7ecf7e" />
          {/* Qator 2 */}
          <rect x="100" y="178" width="40" height="10" rx="5" fill="#c8c8e8" opacity="0.7" />
          <circle cx="85" cy="183" r="7" fill="#c8c8e8" opacity="0.7" />
          {/* Uchburchak dekorativ */}
          <rect x="108" y="270" width="20" height="20" rx="4" fill="#9b8de8" />
          <rect x="90" y="295" width="20" height="20" rx="4" fill="#9b8de8" opacity="0.6" />
          <rect x="126" y="295" width="20" height="20" rx="4" fill="#9b8de8" opacity="0.4" />
          {/* Tishli g'ildirak katta */}
          <g transform="translate(295,70)">
            <circle cx="0" cy="0" r="28" stroke="#9b8de8" strokeWidth="7" fill="none" />
            <circle cx="0" cy="0" r="10" fill="#9b8de8" />
            {[0,45,90,135,180,225,270,315].map((a,i) => (
              <rect key={i} x="-4" y="-36" width="8" height="12" rx="2" fill="#9b8de8"
                transform={`rotate(${a})`} />
            ))}
          </g>
          {/* Tishli g'ildirak kichik */}
          <g transform="translate(325,118)">
            <circle cx="0" cy="0" r="18" stroke="#9b8de8" strokeWidth="5" fill="none" />
            <circle cx="0" cy="0" r="6" fill="#9b8de8" />
            {[0,60,120,180,240,300].map((a,i) => (
              <rect key={i} x="-3" y="-23" width="6" height="8" rx="1.5" fill="#9b8de8"
                transform={`rotate(${a})`} />
            ))}
          </g>
        </svg>
      </div>

      {/* O'ng — forma */}
      <div className="lp-right">
        <div className="lp-form-box">
          <h1 className="lp-title">Kirish</h1>

          <form onSubmit={handleSubmit}>
            <div className="lp-field">
              <label className="lp-label">Kirish</label>
              <input
                className="lp-input"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Login kiriting"
              />
            </div>

            <div className="lp-field">
              <label className="lp-label">Parol</label>
              <div className="lp-pass-wrap">
                <input
                  className="lp-input"
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Parol kiriting"
                />
                <button type="button" className="lp-eye" onClick={() => setShowPass(p => !p)}>
                  {showPass ? '🙈' : '👁'}
                </button>
              </div>
            </div>

            {error && <div className="lp-error">{error}</div>}

            {/* Demo rol tanlash */}
            <div className="lp-role-row">
              {['admin','teacher','student'].map(r => (
                <button key={r} type="button"
                  className={`lp-role-btn ${selectedRole === r ? 'lp-role-active' : ''}`}
                  onClick={() => setSelectedRole(r)}>
                  {r === 'admin' ? 'Admin' : r === 'teacher' ? "O'qituvchi" : "O'quvchi"}
                </button>
              ))}
            </div>

            <button type="submit" className="lp-submit">Kirish</button>
          </form>
        </div>
      </div>
    </div>
  );
}
