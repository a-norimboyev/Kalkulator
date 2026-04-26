import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Settings.css';

export default function Settings() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    firstName: 'Azizjon',
    lastName: 'Norimboyev',
    phone: '(+998) 93 364 20 30',
    birthDate: '17 Sen, 2005',
    gender: 'Male',
    hhId: '34817',
    userId: '34817',
    password: '********'
  });

  return (
    <div className="settings-container">
      <h1 className="settings-title">Shaxsiy ma'lumotlar</h1>

      <div className="settings-content">
        <div className="photo-section">
          <div className="photo-upload">
            <div className="photo-placeholder">
              <span className="photo-text">Namuna</span>
            </div>
            <button className="upload-btn">Tashiritmoda</button>
            <p className="photo-hint">500x500 o'lcham, JPEG, JPG, PNG format, maksimum 2MB</p>
          </div>
          
          <div className="photo-preview">
            <div className="preview-circle">
              <span className="preview-icon">👤</span>
            </div>
            <button className="upload-btn upload-btn-yellow">Tashiritmoda</button>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-row">
            <div className="form-group">
              <label>Ism</label>
              <input 
                type="text" 
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Familiya</label>
              <input 
                type="text" 
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Telefon raqam</label>
              <input 
                type="text" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Tug'ilgan sana</label>
              <input 
                type="text" 
                value={formData.birthDate}
                onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Jinsi</label>
              <input 
                type="text" 
                value={formData.gender}
                onChange={(e) => setFormData({...formData, gender: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>HH ID</label>
              <input 
                type="text" 
                value={formData.hhId}
                onChange={(e) => setFormData({...formData, hhId: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className="security-section">
          <div className="security-card">
            <h3>Kirish</h3>
            <input 
              type="text" 
              value={formData.userId}
              onChange={(e) => setFormData({...formData, userId: e.target.value})}
            />
          </div>

          <div className="security-card">
            <h3>Parol</h3>
            <div className="password-field">
              <input 
                type="password" 
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <button className="edit-btn">✏️</button>
            </div>
          </div>

          <div className="security-card">
            <h3>Bildirishnoma sozlamalari</h3>
            <button className="edit-btn">✏️</button>
          </div>
        </div>

        <div className="documents-section">
          <h3>Shartnomalarim</h3>
          <div className="document-upload">
            <input type="text" placeholder="Toshkent | ESKI Dasturla..." />
            <button className="attach-btn">📎</button>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useAuth } from '../context/AuthContext';
import './Settings.css';

export default function Settings() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    fullName: user?.username || '',
    email: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });
  const [language, setLanguage] = useState('uz');
  const [theme, setTheme] = useState('light');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNotificationChange = (key) => {
    setNotifications({ ...notifications, [key]: !notifications[key] });
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    alert('Profil ma\'lumotlari saqlandi!');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert('Yangi parollar mos kelmaydi!');
      return;
    }
    alert('Parol muvaffaqiyatli o\'zgartirildi!');
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Sozlamalar</h1>
      
      <div className="settings-tabs">
        <button 
          className={activeTab === 'profile' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('profile')}
        >
          👤 Profil
        </button>
        <button 
          className={activeTab === 'security' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('security')}
        >
          🔒 Xavfsizlik
        </button>
        <button 
          className={activeTab === 'notifications' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('notifications')}
        >
          🔔 Bildirishnomalar
        </button>
        <button 
          className={activeTab === 'preferences' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('preferences')}
        >
          ⚙️ Tizim
        </button>
      </div>

      <div className="settings-content">
        {activeTab === 'profile' && (
          <div className="settings-section">
            <h2>Profil ma'lumotlari</h2>
            <form onSubmit={handleSaveProfile}>
              <div className="form-row">
                <div className="form-field">
                  <label>To'liq ism</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <label>Telefon raqam</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+998 90 123 45 67"
                  />
                </div>
                <div className="form-field">
                  <label>Rol</label>
                  <input
                    type="text"
                    value={user?.role === 'student' ? 'O\'quvchi' : user?.role === 'teacher' ? 'O\'qituvchi' : 'Admin'}
                    disabled
                  />
                </div>
              </div>
              <button type="submit" className="save-btn">Saqlash</button>
            </form>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="settings-section">
            <h2>Parolni o'zgartirish</h2>
            <form onSubmit={handleChangePassword}>
              <div className="form-field">
                <label>Joriy parol</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  placeholder="Joriy parolingizni kiriting"
                />
              </div>
              <div className="form-field">
                <label>Yangi parol</label>
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="Yangi parolni kiriting"
                />
              </div>
              <div className="form-field">
                <label>Yangi parolni tasdiqlang</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Yangi parolni qayta kiriting"
                />
              </div>
              <button type="submit" className="save-btn">Parolni o'zgartirish</button>
            </form>

            <div className="security-info">
              <h3>Xavfsizlik maslahatlari:</h3>
              <ul>
                <li>Parol kamida 8 ta belgidan iborat bo'lishi kerak</li>
                <li>Katta va kichik harflardan foydalaning</li>
                <li>Raqamlar va maxsus belgilar qo'shing</li>
                <li>Parolni hech kimga aytmang</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="settings-section">
            <h2>Bildirishnomalar</h2>
            <div className="notification-options">
              <div className="notification-item">
                <div>
                  <h3>Email bildirishnomalar</h3>
                  <p>Yangiliklar va muhim xabarlarni emailga oling</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notifications.email}
                    onChange={() => handleNotificationChange('email')}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="notification-item">
                <div>
                  <h3>SMS bildirishnomalar</h3>
                  <p>To'lovlar va muhim xabarlarni SMS orqali oling</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notifications.sms}
                    onChange={() => handleNotificationChange('sms')}
                  />
                  <span className="slider"></span>
                </label>
              </div>
              <div className="notification-item">
                <div>
                  <h3>Push bildirishnomalar</h3>
                  <p>Brauzer orqali bildirishnomalar oling</p>
                </div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notifications.push}
                    onChange={() => handleNotificationChange('push')}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div className="settings-section">
            <h2>Tizim sozlamalari</h2>
            <div className="preference-item">
              <h3>Til</h3>
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="uz">O'zbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
            <div className="preference-item">
              <h3>Tema</h3>
              <div className="theme-options">
                <button
                  className={theme === 'light' ? 'theme-btn active' : 'theme-btn'}
                  onClick={() => setTheme('light')}
                >
                  ☀️ Yorug'
                </button>
                <button
                  className={theme === 'dark' ? 'theme-btn active' : 'theme-btn'}
                  onClick={() => setTheme('dark')}
                >
                  🌙 Qorong'u
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}