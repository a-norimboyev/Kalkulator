import { useState, useEffect } from 'react';
import './Teachers.css';
import { useAuth } from '../context/AuthContext';
import { groupsData } from './Groups';
import { usersData } from './Users';

const teachersData = [
  { id: 1,  name: 'Jasur Aliyev',      role: 'Teacher',   subject: 'Frontend React.js', groups: 3, phone: '+998 90 111 22 33', img: null },
  { id: 2,  name: 'Akbar Karimov',     role: 'Teacher',   subject: 'Node.js',           groups: 2, phone: '+998 91 222 33 44', img: null },
  { id: 3,  name: 'Sardor Umarov',     role: 'Teacher',   subject: 'Flutter',           groups: 2, phone: '+998 93 333 44 55', img: null },
  { id: 4,  name: 'Temur Yusupov',     role: 'Teacher',   subject: 'Frontend React.js', groups: 2, phone: '+998 94 444 55 66', img: null },
  { id: 5,  name: 'Sardor Xolmatov',   role: 'Teacher',   subject: 'Python',            groups: 3, phone: '+998 95 555 66 77', img: null },
  { id: 6,  name: 'Bobur Aliyev',      role: 'Teacher',   subject: 'Flutter',           groups: 2, phone: '+998 97 666 77 88', img: null },
  { id: 7,  name: 'Nodir Karimov',     role: 'Teacher',   subject: 'Java',              groups: 2, phone: '+998 98 777 88 99', img: null },
  { id: 8,  name: 'Umid Nazarov',      role: 'Teacher',   subject: 'UI/UX',             groups: 2, phone: '+998 90 888 99 00', img: null },
  { id: 9,  name: 'Sherzod Tursunov',  role: 'Teacher',   subject: 'SMM',               groups: 2, phone: '+998 91 999 00 11', img: null },
  { id: 10, name: 'Otabek Hasanov',    role: 'Teacher',   subject: 'Grafik dizayn',     groups: 2, phone: '+998 93 100 20 30', img: null },
  { id: 11, name: 'Zulfiya Ergasheva', role: 'Assistant', subject: 'Frontend React.js', groups: 2, phone: '+998 94 200 30 40', img: null },
  { id: 12, name: 'Feruz Qodirov',     role: 'Assistant', subject: 'Python',            groups: 2, phone: '+998 95 300 40 50', img: null },
  { id: 13, name: 'Nozima Yusupova',   role: 'Assistant', subject: 'Videografiya',      groups: 1, phone: '+998 97 400 50 60', img: null },
  { id: 14, name: 'Jasur Kamolov',     role: 'Assistant', subject: 'Mobilografiya',     groups: 1, phone: '+998 98 500 60 70', img: null },
  { id: 15, name: 'Murod Toshev',      role: 'Assistant', subject: 'Start Junior',      groups: 1, phone: '+998 90 600 70 80', img: null },
  { id: 16, name: 'Lobar Nazarova',    role: 'Assistant', subject: 'Grafik Dizayn',     groups: 1, phone: '+998 91 700 80 90', img: null },
  { id: 17, name: 'Sarvar Olimov',     role: 'Assistant', subject: "Sun'iy intellekt",  groups: 2, phone: '+998 93 800 90 00', img: null },
  { id: 18, name: 'Dilshod Tursunov',  role: 'Assistant', subject: 'Frontend React.js', groups: 1, phone: '+998 94 900 10 20', img: null },
];

export default function Teachers() {
  const { user } = useAuth();

  if (user?.role === 'student') {
    return <StudentGroupsView user={user} />;
  }
  if (user?.role === 'teacher') {
    return <TeacherGroupsView teacherName={user.teacherName} />;
  }
  return <AdminTeachersView />;
}

function StudentGroupsView({ user }) {
  const [tab, setTab] = useState('faol');

  const faolGuruhlar = user?.group ? [
    {
      id: 1,
      nomi: user.group,
      yonalish: user.course || 'Python',
      oqituvchi: user.teacher || 'Sardor Xolmatov',
      boshlash: '01.03.2026',
    }
  ] : [];

  const tugaganGuruhlar = [];

  const rows = tab === 'faol' ? faolGuruhlar : tugaganGuruhlar;

  return (
    <div className="sg-page">
      <div className="sg-tabs">
        <button className={`sg-tab ${tab === 'faol' ? 'sg-tab-active' : ''}`} onClick={() => setTab('faol')}>Faol</button>
        <button className={`sg-tab ${tab === 'tugagan' ? 'sg-tab-active' : ''}`} onClick={() => setTab('tugagan')}>Tugagan</button>
      </div>
      <div className="sg-table-wrap">
        <table className="sg-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Guruh nomi</th>
              <th>Yo'nalishi</th>
              <th>O'qituvchi</th>
              <th>Boshlash vaqti</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr><td colSpan={5} className="sg-empty">Ma'lumot topilmadi</td></tr>
            ) : rows.map((g, i) => (
              <tr key={g.id}>
                <td>{i + 1}</td>
                <td>{g.nomi}</td>
                <td>{g.yonalish}</td>
                <td>{g.oqituvchi}</td>
                <td>{g.boshlash}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



function AdminTeachersView() {
  const [activeTab, setActiveTab] = useState('Teacher');
  const filtered = teachersData.filter((t) => t.role === activeTab);

  return (
    <div className="teachers-container">
      <div className="teachers-header">
        <h2>O'qituvchilar</h2>
        <button className="add-btn">+ Yangi o'qituvchi</button>
      </div>

      <div className="teachers-tabs">
        <button
          className={`teachers-tab ${activeTab === 'Teacher' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('Teacher')}
        >
          Teacher
        </button>
        <button
          className={`teachers-tab ${activeTab === 'Assistant' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('Assistant')}
        >
          Assistant
        </button>
      </div>

      <div className="teachers-grid">
        {filtered.map((t) => (
          <div className="teacher-card" key={t.id}>
            <div className="teacher-avatar">
              {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div className="teacher-info">
              <div className="teacher-name">{t.name}</div>
              <div className="teacher-subject">{t.subject}</div>
              <div className="teacher-meta">
                <span>👥 {t.groups} ta guruh</span>
                <span>📞 {t.phone}</span>
              </div>
            </div>
            <span className={`teacher-role-badge ${t.role === 'Teacher' ? 'badge-teacher' : 'badge-assistant'}`}>
              {t.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== USTOZ GURUHLARIM KOMPONENTI =====
function TeacherGroupsView({ teacherName }) {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [lessonTopics, setLessonTopics] = useState(() => {
    try { return JSON.parse(localStorage.getItem('lms_lesson_topics') || '{}'); } catch { return {}; }
  });
  const [attendance, setAttendance] = useState(() => {
    try { return JSON.parse(localStorage.getItem('lms_attendance') || '{}'); } catch { return {}; }
  });

  useEffect(() => {
    localStorage.setItem('lms_attendance', JSON.stringify(attendance));
  }, [attendance]);

  useEffect(() => {
    localStorage.setItem('lms_lesson_topics', JSON.stringify(lessonTopics));
  }, [lessonTopics]);

  const getLessonKey = (groupName) => `${today}_${groupName}_topic`;

  const today = new Date().toISOString().slice(0, 10);

  const myGroups = groupsData.filter(
    g => g.teacher === teacherName || g.assistant === teacherName
  );

  const groupStudents = selectedGroup
    ? usersData.filter(u => u.group === selectedGroup.name)
    : [];

  const getAtt = (uid) => attendance[`${today}_${uid}`] || { status: null, late: 0, homework: 'bajardi' };

  const setStatus = (uid, status) => {
    const key = `${today}_${uid}`;
    setAttendance(prev => ({
      ...prev,
      [key]: { ...getAtt(uid), status, late: status === 'kelmadi' ? 0 : getAtt(uid).late }
    }));
  };

  const setLate = (uid, val) => {
    const key = `${today}_${uid}`;
    const mins = Math.max(0, parseInt(val) || 0);
    setAttendance(prev => ({
      ...prev,
      [key]: { ...getAtt(uid), late: mins }
    }));
  };

  const setHomework = (uid, val) => {
    const key = `${today}_${uid}`;
    setAttendance(prev => ({
      ...prev,
      [key]: { ...getAtt(uid), homework: val }
    }));
  };

  const setBall = (uid, val) => {
    const key = `${today}_${uid}`;
    const ball = Math.min(100, Math.max(0, parseInt(val) || 0));
    setAttendance(prev => ({
      ...prev,
      [key]: { ...getAtt(uid), ball: ball || '' }
    }));
  };

  const keldiCount = groupStudents.filter(u => getAtt(u.id).status === 'keldi').length;
  const kelmadCount = groupStudents.filter(u => getAtt(u.id).status === 'kelmadi').length;

  return (
    <>
    <div className="teachers-container">
      <div className="teachers-header">
        <h2>Guruhlarim</h2>
        <span style={{color:'#888', fontSize:'0.95rem'}}>👨‍🏫 {teacherName}</span>
      </div>

      {myGroups.length === 0 ? (
        <div style={{textAlign:'center', color:'#bbb', padding:'60px 0', fontSize:'1rem'}}>
          Sizga tegishli guruh topilmadi
        </div>
      ) : (
        <div className="teachers-grid">
          {myGroups.map(g => {
            const students = usersData.filter(u => u.group === g.name);
            const keldi = students.filter(u => (attendance[`${today}_${u.id}`] || {}).status === 'keldi').length;
            const kelmad = students.filter(u => (attendance[`${today}_${u.id}`] || {}).status === 'kelmadi').length;
            const isMyGroup = g.teacher === teacherName;
            const davPct = (keldi + kelmad) > 0
              ? Math.round(keldi / students.length * 100)
              : (g.davomat ?? null);
            return (
              <div className="tg-group-card" key={g.id} onClick={() => setSelectedGroup(g)}>
                <div className="tg-card-top">
                  <div>
                    <div className="tg-group-name">{g.name}</div>
                    <div className="tg-course">{g.course}</div>
                  </div>
                  <span className={`tg-role-badge ${isMyGroup ? 'tg-asosiy' : 'tg-yordam'}`}>
                    {isMyGroup ? 'Asosiy' : 'Yordamchi'}
                  </span>
                </div>
                <div className="tg-card-info">
                  <span>⏰ {g.time} – {g.endTime}</span>
                  <span>👥 {students.length} ta o'quvchi</span>
                </div>

                {/* 3 ta stat */}
                <div className="tg-card-stats">
                  <div className="tg-stat-item">
                    <span className="tg-stat-val" style={{color: davPct !== null ? (davPct >= 80 ? '#4caf50' : davPct >= 60 ? '#f5a623' : '#f35757') : '#bbb'}}>
                      {davPct !== null ? `${davPct}%` : '—'}
                    </span>
                    <span className="tg-stat-lbl">Davomat</span>
                    <div className="tg-mini-bar">
                      <div className="tg-mini-fill" style={{width: `${davPct ?? 0}%`, background: davPct !== null ? (davPct >= 80 ? '#4caf50' : davPct >= 60 ? '#f5a623' : '#f35757') : '#ddd'}}></div>
                    </div>
                  </div>
                  <div className="tg-stat-item">
                    <span className="tg-stat-val" style={{color: (g.ozlash ?? 0) >= 80 ? '#4caf50' : (g.ozlash ?? 0) >= 60 ? '#f5a623' : '#f35757'}}>
                      {g.ozlash ?? 0}%
                    </span>
                    <span className="tg-stat-lbl">O'zlashtirish</span>
                    <div className="tg-mini-bar">
                      <div className="tg-mini-fill" style={{width: `${g.ozlash ?? 0}%`, background: (g.ozlash ?? 0) >= 80 ? '#4caf50' : (g.ozlash ?? 0) >= 60 ? '#f5a623' : '#f35757'}}></div>
                    </div>
                  </div>
                  <div className="tg-stat-item">
                    <span className="tg-stat-val" style={{color: (g.avgBall ?? 0) >= 80 ? '#4caf50' : (g.avgBall ?? 0) >= 60 ? '#f5a623' : '#f35757'}}>
                      {g.avgBall ?? '—'}
                    </span>
                    <span className="tg-stat-lbl">O'rtacha ball</span>
                    <div className="tg-mini-bar">
                      <div className="tg-mini-fill" style={{width: `${g.avgBall ?? 0}%`, background: (g.avgBall ?? 0) >= 80 ? '#4caf50' : (g.avgBall ?? 0) >= 60 ? '#f5a623' : '#f35757'}}></div>
                    </div>
                  </div>
                </div>

                {lessonTopics[`${today}_${g.name}_topic`] && (
                  <div className="tg-card-topic">📖 {lessonTopics[`${today}_${g.name}_topic`]}</div>
                )}
                <button className="tg-davomat-btn">📋 Davomat belgilash</button>
              </div>
            );
          })}
        </div>
      )}
    </div>

    {/* Davomat belgilash modali */}
    {selectedGroup && (
      <div className="modal-overlay" onClick={() => setSelectedGroup(null)}>
        <div className="tg-modal" onClick={e => e.stopPropagation()}>
          <div className="tg-modal-header">
            <div>
              <span className="tg-modal-name">{selectedGroup.name}</span>
              <span className="tg-modal-course">{selectedGroup.course}</span>
            </div>
            <button className="modal-close" onClick={() => setSelectedGroup(null)}>✕</button>
          </div>

          <div className="tg-modal-date">📅 Bugungi davomat — {today}</div>

          <div className="tg-modal-summary">
            <span className="tg-sum-keldi">✅ {keldiCount} keldi</span>
            <span className="tg-sum-kelmad">❌ {kelmadCount} kelmadi</span>
            <span className="tg-sum-total">👥 {groupStudents.length} ta jami</span>
          </div>

          {groupStudents.length === 0 ? (
            <div style={{textAlign:'center',color:'#bbb',padding:'30px'}}>O'quvchi topilmadi</div>
          ) : (
            <div className="tg-table-wrap">
              <table className="tg-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Ism Familiya</th>
                    <th>Davomat</th>
                    <th>Kechikish</th>
                    <th>Uyga vazifa</th>
                    <th>Ball</th>
                  </tr>
                </thead>
                <tbody>
                  {groupStudents.map((u, i) => {
                    const att = getAtt(u.id);
                    return (
                      <tr key={u.id} className={att.status === 'keldi' ? 'row-keldi' : att.status === 'kelmadi' ? 'row-kelmad' : ''}>
                        <td>{i + 1}</td>
                        <td>{u.name}</td>
                        <td>
                          <div className="tg-att-btns">
                            <button
                              className={`tg-btn keldi ${att.status === 'keldi' ? 'sel' : ''}`}
                              onClick={() => setStatus(u.id, att.status === 'keldi' ? null : 'keldi')}
                            >✅ Keldi</button>
                            <button
                              className={`tg-btn kelmad ${att.status === 'kelmadi' ? 'sel' : ''}`}
                              onClick={() => setStatus(u.id, att.status === 'kelmadi' ? null : 'kelmadi')}
                            >❌ Kelmadi</button>
                          </div>
                        </td>
                        <td>
                          {att.status === 'keldi' ? (
                            <div className="tg-late-row">
                              <input
                                type="number"
                                className="tg-late-input"
                                min="0" max="120"
                                placeholder="0"
                                value={att.late || ''}
                                onChange={e => setLate(u.id, e.target.value)}
                              />
                              <span>daq</span>
                            </div>
                          ) : <span style={{color:'#ccc'}}>—</span>}
                        </td>
                        <td>
                          <div className="tg-hw-btns">
                            <button
                              className={`tg-hw-btn bajardi ${att.homework === 'bajardi' ? 'sel' : ''}`}
                              onClick={() => setHomework(u.id, att.homework === 'bajardi' ? null : 'bajardi')}
                            >✅</button>
                            <button
                              className={`tg-hw-btn bajarmadi ${att.homework === 'bajarmadi' ? 'sel' : ''}`}
                              onClick={() => setHomework(u.id, att.homework === 'bajarmadi' ? null : 'bajarmadi')}
                            >❌</button>
                          </div>
                        </td>
                        <td>
                          <input
                            type="number"
                            className="tg-ball-input"
                            min="0" max="100"
                            placeholder="—"
                            value={att.ball !== undefined && att.ball !== '' ? att.ball : (u.ball ?? '')}
                            onChange={e => setBall(u.id, e.target.value)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          <div className="tg-modal-footer">
            <button className="modal-cancel" onClick={() => setSelectedGroup(null)}>Yopish</button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

