import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Home.css';

// Haftaning haqiqiy kunini aniqlash
const KUNLAR = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
const bugunKun = KUNLAR[new Date().getDay()];

// O'quvchi uchun real ma'lumotlar
const studentData = {
  group: 'Foundation-N12',
  course: 'Python',
  teacher: 'Sardor Xolmatov',
  ball: 78,
  davomat: 92,
  tugallangan: 45,
  jami: 60,
  schedule: [
    { kun: 'Dushanba',   vaqt: '11:00 – 13:00', mavzu: 'Python: OOP asoslari' },
    { kun: 'Chorshanba', vaqt: '11:00 – 13:00', mavzu: 'Python: Fayllar bilan ishlash' },
    { kun: 'Juma',       vaqt: '11:00 – 13:00', mavzu: 'Python: API va requests' },
  ],
  lastGrades: [
    { sana: '23-Apr', mavzu: 'Funksiyalar', ball: 85, uyga: '✅' },
    { sana: '21-Apr', mavzu: "Ro'yxatlar",  ball: 72, uyga: '✅' },
    { sana: '18-Apr', mavzu: 'Tsikllar',     ball: 90, uyga: '❌' },
    { sana: '16-Apr', mavzu: 'Shartlar',     ball: 68, uyga: '✅' },
  ],
};

// Dars kunlari (Dushanba=1, Chorshanba=3, Juma=5 — JS getDay: Mon=1,Wed=3,Fri=5)
const LESSON_DAYS = [1, 3, 5];

const OY_NOMLARI = [
  'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
];

function Calendar({ schedule }) {
  const today = new Date();
  const [cur, setCur] = useState({ year: today.getFullYear(), month: today.getMonth() });

  const prev = () => {
    setCur(c => c.month === 0 ? { year: c.year - 1, month: 11 } : { year: c.year, month: c.month - 1 });
  };
  const next = () => {
    setCur(c => c.month === 11 ? { year: c.year + 1, month: 0 } : { year: c.year, month: c.month + 1 });
  };

  const firstDay = new Date(cur.year, cur.month, 1).getDay(); // 0=Sun
  // Convert Sun=0 to Mon=0 grid
  const startOffset = (firstDay + 6) % 7;
  const daysInMonth = new Date(cur.year, cur.month + 1, 0).getDate();
  const isCurrentMonth = cur.year === today.getFullYear() && cur.month === today.getMonth();

  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const DAY_HEADERS = ['D', 'S', 'C', 'P', 'J', 'S', 'Y'];

  return (
    <div className="sh-calendar">
      <div className="sh-cal-header">
        <span className="sh-cal-month">{OY_NOMLARI[cur.month]} {cur.year} <span className="sh-cal-caret">▾</span></span>
        <div className="sh-cal-nav">
          <button onClick={prev} className="sh-cal-btn">‹</button>
          <button onClick={next} className="sh-cal-btn">›</button>
        </div>
      </div>
      <div className="sh-cal-grid">
        {DAY_HEADERS.map(h => (
          <div key={h} className="sh-cal-dh">{h}</div>
        ))}
        {cells.map((day, i) => {
          if (!day) return <div key={i} />;
          const jsDay = new Date(cur.year, cur.month, day).getDay(); // 0=Sun,1=Mon...
          const isLesson = LESSON_DAYS.includes(jsDay);
          const isToday = isCurrentMonth && day === today.getDate();
          return (
            <div
              key={i}
              className={`sh-cal-day ${isLesson ? 'sh-cal-lesson' : ''} ${isToday ? 'sh-cal-today' : ''}`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}


export default function Home() {
  const { user } = useAuth();

  if (user?.role === 'student') {
    const d = {
      ...studentData,
      group:   user.group   || studentData.group,
      course:  user.course  || studentData.course,
      teacher: user.teacher || studentData.teacher,
    };
    const xp = 920, xpMax = 1100, bosqich = 3, kumushlar = 5060, reyting = 1044;
    const xpProgress = Math.round((xp / xpMax) * 100);

    return (
      <div className="sh-new-page">
        {/* Kumushlar header */}
        <div className="sh-kumush-header">
          <span className="sh-kumush-title">Kumushlar: <b>{kumushlar.toLocaleString()}</b></span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3h12l4 6-10 13L2 9z"/><path d="M2 9h20"/><path d="M6 3l4 6m8-6l-4 6"/>
          </svg>
        </div>

        <div className="sh-top-row">
          {/* Bosqich card */}
          <div className="sh-bosqich-card">
            <div className="sh-bosqich-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
              </svg>
              <span className="sh-bosqich-txt">Bosqich: <b>{bosqich}</b></span>
            </div>
            <div className="sh-prog-badge">{xp} / {xpMax}</div>
            <div className="sh-prog-bar"><div className="sh-prog-fill" style={{ width: `${xpProgress}%` }} /></div>
            <div className="sh-xp-row">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span className="sh-xp-txt">XP: <b>{xp}</b></span>
            </div>
            <div className="sh-reyting-block">
              <div className="sh-reyting-lbl">Reyting</div>
              <div className="sh-reyting-val">Umumiy: <span>{reyting} - o'rin</span></div>
            </div>
          </div>

          {/* Dars jadvali */}
          <div className="sh-jadval-section">
            <h3 className="sh-jadval-title">Dars jadvali</h3>
            <div className="sh-jadval-card">
              <Calendar schedule={d.schedule} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Teacher & Admin stats
  const stats = {
    teacher: [
      { label: 'Guruhlarim', value: '3', icon: '👥' },
      { label: "O'quvchilar", value: '27', icon: '👨‍🎓' },
      { label: "O'rtacha baho", value: '82.5', icon: '📊' },
      { label: 'Bugungi darslar', value: '3', icon: '📚' },
    ],
    admin: [
      { label: "O'qituvchilar", value: '24', icon: '👨‍🏫' },
      { label: "O'quvchilar", value: '312', icon: '👨‍🎓' },
      { label: 'Guruhlar', value: '42', icon: '👥' },
      { label: 'Kurslar', value: '15', icon: '📚' },
    ],
  };

  const currentStats = stats[user?.role] || stats.admin;

  const recentActivities = user?.role === 'admin'
    ? [
        { id: 1, title: "Yangi o'quvchi ro'yxatga olindi: Sardor Aliyev", time: 'Bugun, 10:30', type: 'student' },
        { id: 2, title: 'Foundation-N12 guruhi darsi boshlandi', time: 'Bugun, 11:00', type: 'class' },
        { id: 3, title: "To'lov qabul qilindi: Jasur Toshmatov", time: 'Bugun, 12:15', type: 'payment' },
        { id: 4, title: "O'qituvchi: Shahlo Raximova yangi kurs yaratdi", time: '2 soat oldin', type: 'course' },
        { id: 5, title: 'Yangi kurs materiallari yuklandi: React Hooks', time: 'Kecha, 18:00', type: 'material' },
        { id: 7, title: 'N45 guruhi imtihon natijalari chiqarildi', time: '2 kun oldin', type: 'exam' },
      ]
    : [
        { id: 1, title: 'Foundation-N12 guruhi darsi — mavzu: OOP', time: 'Bugun, 14:00', type: 'class' },
        { id: 2, title: "Sardor Aliyev imtihondan o'tdi: 88 ball", time: '1 soat oldin', type: 'exam' },
        { id: 4, title: 'Yangi kurs materiallari yuklandi: React Hooks', time: 'Kecha, 18:00', type: 'material' },
        { id: 5, title: "N45 guruhiga izoh qoldirildi: yaxshi natijalar", time: 'Kecha, 16:00', type: 'comment' },
        { id: 6, title: 'Dushanba dars jadvali yangilandi', time: '2 kun oldin', type: 'schedule' },
      ];

  return (
    <div className="home-container">
      {/* Welcome bar */}
      <div className="hm-welcome-bar">
        <div>
          <h1 className="hm-welcome-title">Xush kelibsiz, {user?.firstName || 'Foydalanuvchi'}! 👋</h1>
          <p className="hm-welcome-sub">
            {user?.role === 'teacher' && "O'qitish paneliga xush kelibsiz"}
            {user?.role === 'admin' && 'Administrator paneliga xush kelibsiz'}
          </p>
        </div>
        <div className="hm-date-badge">
          {new Date().toLocaleDateString('uz-UZ', { day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>

      {/* Stats */}
      <div className="hm-stats">
        {currentStats.map((stat, index) => (
          <div key={index} className="hm-stat-card">
            <div className="hm-stat-icon">{stat.icon}</div>
            <div>
              <div className="hm-stat-value">{stat.value}</div>
              <div className="hm-stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Activities */}
      <div className="hm-section">
        <h2 className="hm-section-title">So'nggi faoliyatlar</h2>
        <div className="hm-activities">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="hm-activity-item">
              <div className="hm-activity-icon">
                {activity.type === 'class' && '📖'}
                {activity.type === 'homework' && '✍️'}
                {activity.type === 'payment' && '💰'}
                {activity.type === 'material' && '📄'}
                {activity.type === 'student' && '🎓'}
                {activity.type === 'course' && '🎯'}
                {activity.type === 'exam' && '📝'}
                {activity.type === 'comment' && '💬'}
                {activity.type === 'schedule' && '📅'}
              </div>
              <div className="hm-activity-content">
                <div className="hm-activity-title">{activity.title}</div>
                <div className="hm-activity-time">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}