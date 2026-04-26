import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Settings.css';

const defaultProfiles = {
  teacher: {
    firstName: 'Sardor', lastName: 'Xolmatov',
    phone: '+998 90 123 45 67', birthDate: '12.03.1995',
    gender: 'Erkak', role: "O'qituvchi", email: 'sardor@najotnajot.uz',
  },
  admin: {
    firstName: 'Admin', lastName: 'Abdullayev',
    phone: '+998 91 000 00 01', birthDate: '01.01.1990',
    gender: 'Erkak', role: 'Administrator', email: 'admin@najotnajot.uz',
  },
  student: {
    firstName: 'Azizjon', lastName: 'Norimboyev',
    phone: '+998 93 364 20 30', birthDate: '17.09.2005',
    gender: 'Erkak', role: "O'quvchi", email: 'azizjon@gmail.com',
  },
};

export default function Settings() {
  const { user, logout } = useAuth();
  const role = user?.role || 'student';
  const def = defaultProfiles[role];

  const [profileImage, setProfileImage] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(def);
  const [saved, setSaved] = useState(def);

  const [showPassForm, setShowPassForm] = useState(false);
  const [pass, setPass] = useState({ old: '', new1: '', new2: '' });
  const [passMsg, setPassMsg] = useState('');

  const [notif, setNotif] = useState({ email: true, sms: false, push: true });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) { alert('Fayl 2MB dan oshmasligi kerak!'); return; }
    const reader = new FileReader();
    reader.onload = (ev) => setProfileImage(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    setSaved(formData);
    setEditing(false);
  };

  const handlePassSave = () => {
    if (!pass.old) { setPassMsg('Joriy parolni kiriting'); return; }
    if (pass.new1.length < 6) { setPassMsg('Yangi parol kamida 6 ta belgidan iborat bo\'lsin'); return; }
    if (pass.new1 !== pass.new2) { setPassMsg('Parollar mos emas'); return; }
    setPassMsg('✅ Parol muvaffaqiyatli o\'zgartirildi');
    setPass({ old: '', new1: '', new2: '' });
    setTimeout(() => { setPassMsg(''); setShowPassForm(false); }, 2000);
  };

  const fieldChange = (k, v) => setFormData(prev => ({ ...prev, [k]: v }));

  return (
    <div className="settings-container">
      <h1 className="settings-title">Sozlamalar</h1>

      {/* Shaxsiy ma'lumotlar */}
      <div className="settings-section">
        <div className="section-header">
          <h2 className="section-title">Shaxsiy ma'lumotlar</h2>
          {!editing
            ? <button className="sett-edit-btn" onClick={() => setEditing(true)}>✏️ Tahrirlash</button>
            : <div style={{display:'flex',gap:8}}>
                <button className="sett-save-btn" onClick={handleSave}>✅ Saqlash</button>
                <button className="sett-cancel-btn" onClick={() => { setFormData(saved); setEditing(false); }}>Bekor</button>
              </div>
          }
        </div>

        <div className="sett-profile-layout">
          {/* Rasm */}
          <div className="sett-photo-col">
            <div className="sett-photo-box">
              {profileImage
                ? <img src={profileImage} alt="Profile" className="sett-photo-img" />
                : <div className="sett-photo-placeholder">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="#c4b5fd"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                  </div>
              }
            </div>
            <input type="file" id="sett-img" accept="image/jpeg,image/jpg,image/png" onChange={handleImageUpload} style={{display:'none'}} />
            <label htmlFor="sett-img" className="sett-upload-btn">📷 Rasm yuklash</label>
            <span className="sett-upload-hint">JPEG, PNG — max 2MB</span>
          </div>

          {/* Ma'lumotlar */}
          <div className="sett-info-grid">
            {[
              { label: 'Ism', key: 'firstName' },
              { label: 'Familiya', key: 'lastName' },
              { label: 'Telefon', key: 'phone' },
              { label: 'Email', key: 'email' },
              { label: "Tug'ilgan sana", key: 'birthDate' },
              { label: 'Jinsi', key: 'gender' },
            ].map(({ label, key }) => (
              <div className="sett-field" key={key}>
                <span className="sett-field-label">{label}</span>
                {editing
                  ? <input className="sett-field-input" value={formData[key]} onChange={e => fieldChange(key, e.target.value)} />
                  : <span className="sett-field-val">{saved[key]}</span>
                }
              </div>
            ))}
            <div className="sett-field">
              <span className="sett-field-label">Lavozim</span>
              <span className="sett-role-badge">{saved.role}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Parol */}
      <div className="settings-section compact">
        <div className="section-header">
          <h2 className="section-title">Parol</h2>
          <button className="sett-edit-btn" onClick={() => { setShowPassForm(p => !p); setPassMsg(''); }}>
            {showPassForm ? '✕ Yopish' : '✏️ O\'zgartirish'}
          </button>
        </div>
        {!showPassForm && <div className="sett-pass-dots">••••••••••</div>}
        {showPassForm && (
          <div className="sett-pass-form">
            <div className="sett-pass-row">
              <div className="sett-field full">
                <span className="sett-field-label">Joriy parol</span>
                <input className="sett-field-input" type="password" value={pass.old} onChange={e => setPass(p => ({...p, old: e.target.value}))} placeholder="••••••••" />
              </div>
              <div className="sett-field full">
                <span className="sett-field-label">Yangi parol</span>
                <input className="sett-field-input" type="password" value={pass.new1} onChange={e => setPass(p => ({...p, new1: e.target.value}))} placeholder="••••••••" />
              </div>
              <div className="sett-field full">
                <span className="sett-field-label">Yangi parolni tasdiqlang</span>
                <input className="sett-field-input" type="password" value={pass.new2} onChange={e => setPass(p => ({...p, new2: e.target.value}))} placeholder="••••••••" />
              </div>
            </div>
            {passMsg && <p className="sett-msg">{passMsg}</p>}
            <button className="sett-save-btn" onClick={handlePassSave}>Saqlash</button>
          </div>
        )}
      </div>

      {/* Bildirishnomalar */}
      <div className="settings-section compact">
        <h2 className="section-title">Bildirishnoma sozlamalari</h2>
        <div className="sett-notif-list">
          {[
            { key: 'email', label: '📧 Email bildirishnomalar' },
            { key: 'sms',   label: '💬 SMS bildirishnomalar' },
            { key: 'push',  label: '🔔 Push bildirishnomalar' },
          ].map(({ key, label }) => (
            <label className="sett-toggle-row" key={key}>
              <span>{label}</span>
              <div className={`sett-toggle ${notif[key] ? 'on' : ''}`} onClick={() => setNotif(p => ({...p, [key]: !p[key]}))}>
                <div className="sett-toggle-knob" />
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Chiqish */}
      <div className="settings-section compact" style={{textAlign:'center'}}>
        <button className="sett-logout-btn" onClick={logout}>🚪 Tizimdan chiqish</button>
      </div>
    </div>
  );
}
