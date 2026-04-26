import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Settings.css';

export default function Settings() {
  const { user } = useAuth();
  const [profileImage, setProfileImage] = useState(null);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingNotifications, setIsEditingNotifications] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: 'Azizjon',
    lastName: 'Norimboyev',
    phone: '(+998) 93 364 20 30',
    birthDate: '17 Sen, 2005',
    gender: 'Male',
    hhId: '34817',
    loginId: '34817',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const contracts = [
    { id: 1, name: 'Toshkent | ESKI Dasturlash kursi', date: '01.01.2025' },
    { id: 2, name: 'Samarkand | Yangi Frontend kursi', date: '15.02.2025' },
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Fayl hajmi 2MB dan oshmasligi kerak!');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="settings-container">
      <h1 className="settings-title">Sozlamalar</h1>
      
      {/* Shaxsiy ma'lumotlar */}
      <div className="settings-section">
        <h2 className="section-title">Shaxsiy ma'lumotlar</h2>
        <div className="profile-layout">
          <div className="profile-image-section">
            <div className="image-upload-box">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profile-preview" />
              ) : (
                <div className="image-placeholder">
                  <div className="placeholder-icon">👤</div>
                  <div className="placeholder-text">Namuna</div>
                </div>
              )}
            </div>
            <input
              type="file"
              id="profileImage"
              accept="image/jpeg,image/jpg,image/png"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <label htmlFor="profileImage" className="upload-btn">
              Rasmni yuklash
            </label>
            <p className="upload-info">500x500 o'lcham, JPEG, JPG, PNG format, maksimum 2MB</p>
          </div>

          <div className="profile-info-grid">
            <div className="info-row">
              <div className="info-item">
                <label>Ism</label>
                <div className="info-value">{formData.firstName}</div>
              </div>
              <div className="info-item">
                <label>Familiya</label>
                <div className="info-value">{formData.lastName}</div>
              </div>
            </div>
            <div className="info-row">
              <div className="info-item">
                <label>Telefon raqam</label>
                <div className="info-value">{formData.phone}</div>
              </div>
              <div className="info-item">
                <label>Tug'ilgan sana</label>
                <div className="info-value">{formData.birthDate}</div>
              </div>
            </div>
            <div className="info-row">
              <div className="info-item">
                <label>Jinsi</label>
                <div className="info-value">{formData.gender}</div>
              </div>
              <div className="info-item">
                <label>HH ID</label>
                <div className="info-value">{formData.hhId}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kirish */}
      <div className="settings-section compact">
        <h2 className="section-title">Kirish</h2>
        <div className="simple-info">
          <div className="info-value">{formData.loginId}</div>
        </div>
      </div>

      {/* Parol */}
      <div className="settings-section compact">
        <div className="section-header">
          <h2 className="section-title">Parol</h2>
          <button 
            className="edit-btn"
            onClick={() => setIsEditingPassword(!isEditingPassword)}
          >
            ✏️
          </button>
        </div>
        <div className="simple-info">
          <div className="info-value password-dots">••••••••</div>
        </div>
        
        {isEditingPassword && (
          <div className="edit-panel">
            <div className="form-field">
              <label>Joriy parol</label>
              <input type="password" placeholder="Joriy parolingizni kiriting" />
            </div>
            <div className="form-field">
              <label>Yangi parol</label>
              <input type="password" placeholder="Yangi parolni kiriting" />
            </div>
            <div className="form-field">
              <label>Parolni tasdiqlang</label>
              <input type="password" placeholder="Yangi parolni qayta kiriting" />
            </div>
            <button className="save-btn">Saqlash</button>
          </div>
        )}
      </div>

      {/* Bildirishnoma sozlamalari */}
      <div className="settings-section compact">
        <div className="section-header">
          <h2 className="section-title">Bildirishnoma sozlamalari</h2>
          <button 
            className="edit-btn"
            onClick={() => setIsEditingNotifications(!isEditingNotifications)}
          >
            ✏️
          </button>
        </div>
        
        {isEditingNotifications && (
          <div className="edit-panel">
            <div className="notification-options">
              <label className="checkbox-item">
                <input type="checkbox" defaultChecked />
                <span>Email bildirishnomalar</span>
              </label>
              <label className="checkbox-item">
                <input type="checkbox" />
                <span>SMS bildirishnomalar</span>
              </label>
              <label className="checkbox-item">
                <input type="checkbox" defaultChecked />
                <span>Push bildirishnomalar</span>
              </label>
            </div>
            <button className="save-btn">Saqlash</button>
          </div>
        )}
      </div>

      {/* Shartnomalarim */}
      <div className="settings-section">
        <h2 className="section-title">Shartnomalarim</h2>
        <div className="search-box">
          <input
            type="text"
            placeholder="Toshkent | ESKI Dasturla..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">📎</span>
        </div>
        <div className="contracts-list">
          {contracts.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map(contract => (
            <div key={contract.id} className="contract-item">
              <div className="contract-name">{contract.name}</div>
              <div className="contract-date">{contract.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
