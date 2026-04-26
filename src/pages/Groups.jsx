import { useState, useEffect } from 'react';
import './Groups.css';
import { usersData } from './Users';

export const groupsData = [
  { id: 1,  name: 'N45', course: 'Frontend React.js', teacher: 'Malika Yusupova',   assistant: 'Zulfiya Ergasheva', students: 18, startDate: '01.02.2026', endDate: '01.06.2026', status: 'Faol', time: '09:00', endTime: '11:00', ozlash: 74 },
  { id: 2,  name: 'N46', course: 'Python',            teacher: 'Sardor Xolmatov',   assistant: 'Feruz Qodirov',     students: 22, startDate: '15.02.2026', endDate: '15.06.2026', status: 'Faol', time: '11:00', endTime: '13:00', ozlash: 81, avgBall: 76 },
  { id: 3,  name: 'N44', course: 'Flutter',           teacher: 'Bobur Aliyev',      assistant: 'Dilshod Tursunov',  students: 15, startDate: '01.01.2026', endDate: '01.05.2026', status: 'Faol', time: '14:00', endTime: '16:00', ozlash: 68, avgBall: 64 },
  { id: 4,  name: 'N43', course: 'Java',              teacher: 'Dilnoza Karimova',  assistant: 'Murod Toshev',      students: 20, startDate: '01.12.2025', endDate: '01.04.2026', status: 'Tugagan', time: '10:00', endTime: '12:00', ozlash: 77, avgBall: 70 },
  { id: 5,  name: 'N47', course: 'Python',            teacher: 'Umid Nazarov',      assistant: 'Sardor Xolmatov',   students: 12, startDate: '01.03.2026', endDate: '01.07.2026', status: 'Faol', time: '16:00', endTime: '18:00', ozlash: 88, avgBall: 84 },
  { id: 29, name: 'N69', course: 'Python',            teacher: 'Sardor Xolmatov',   assistant: 'Feruz Qodirov',     students: 20, startDate: '01.04.2026', endDate: '01.08.2026', status: 'Faol', time: '14:00', endTime: '16:00', ozlash: 73, avgBall: 68 },
  { id: 6,  name: 'N48', course: 'SMM',               teacher: 'Sherzod Tursunov',  assistant: 'Nozima Yusupova',   students: 24, startDate: '10.03.2026', endDate: '10.07.2026', status: 'Faol', time: '09:00', endTime: '11:00' },
  { id: 7,  name: 'N49', course: 'Node.js',           teacher: 'Kamola Mirzayeva',  assistant: 'Jasur Kamolov',     students: 16, startDate: '01.04.2026', endDate: '01.08.2026', status: 'Faol', time: '11:00', endTime: '13:00' },
  { id: 8,  name: 'N42', course: 'Grafik dizayn',     teacher: 'Otabek Hasanov',    assistant: 'Lobar Nazarova',    students: 19, startDate: '01.11.2025', endDate: '01.03.2026', status: 'Tugagan', time: '15:00', endTime: '17:00' },
  { id: 9,  name: 'N50', course: 'Data analitika',    teacher: 'Feruz Qodirov',     assistant: 'Sarvar Olimov',     students: 21, startDate: '01.05.2026', endDate: '01.09.2026', status: 'Faol', time: '14:00', endTime: '16:00' },
  { id: 10, name: 'N51', course: 'Kiberxavfsizlik',   teacher: 'Zulfiya Ergasheva', assistant: 'Murod Toshev',      students: 14, startDate: '05.05.2026', endDate: '05.09.2026', status: 'Faol', time: '17:00', endTime: '19:00' },
  { id: 12, name: 'N53', course: 'Videografiya',      teacher: 'Nozima Yusupova',   assistant: 'Dilshod Tursunov',  students: 13, startDate: '12.05.2026', endDate: '12.09.2026', status: 'Faol', time: '10:00', endTime: '12:00' },
  { id: 13, name: 'N54', course: 'Mobilografiya',     teacher: 'Jasur Kamolov',     assistant: 'Feruz Qodirov',     students: 17, startDate: '15.05.2026', endDate: '15.07.2026', status: 'Faol', time: '09:00', endTime: '11:00' },
  { id: 14, name: 'N55', course: 'Start Junior',      teacher: 'Murod Toshev',      assistant: 'Zulfiya Ergasheva', students: 25, startDate: '01.04.2026', endDate: '01.10.2026', status: 'Faol', time: '11:00', endTime: '13:00' },
  { id: 15, name: 'N41', course: 'Grafik Dizayn',     teacher: 'Lobar Nazarova',    assistant: 'Nozima Yusupova',   students: 16, startDate: '01.10.2025', endDate: '01.02.2026', status: 'Tugagan', time: '13:00', endTime: '15:00' },
  { id: 16, name: 'N56', course: "Sun'iy intellekt",  teacher: 'Sarvar Olimov',     assistant: 'Jasur Kamolov',     students: 20, startDate: '20.05.2026', endDate: '20.07.2026', status: 'Faol', time: '16:00', endTime: '18:00' },
  { id: 17, name: 'N57', course: 'Frontend React.js', teacher: 'Dilshod Tursunov',  assistant: 'Zulfiya Ergasheva', students: 22, startDate: '25.05.2026', endDate: '25.09.2026', status: 'Faol', time: '14:00', endTime: '16:00' },
  { id: 18, name: 'N58', course: 'Python',            teacher: 'Maftuna Holiqova',  assistant: 'Feruz Qodirov',     students: 19, startDate: '01.06.2026', endDate: '01.10.2026', status: 'Faol', time: '09:00', endTime: '11:00' },
  { id: 19, name: 'N59', course: 'Flutter',           teacher: 'Behruz Mirzayev',   assistant: 'Sarvar Olimov',     students: 20, startDate: '05.06.2026', endDate: '05.10.2026', status: 'Faol', time: '11:00', endTime: '13:00' },
  { id: 20, name: 'N60', course: 'UI/UX',             teacher: 'Gulnora Tosheva',   assistant: 'Lobar Nazarova',    students: 15, startDate: '10.06.2026', endDate: '10.10.2026', status: 'Faol', time: '15:00', endTime: '17:00' },
  { id: 21, name: 'N61', course: 'Java',              teacher: 'Shokir Nazarov',    assistant: 'Murod Toshev',      students: 18, startDate: '12.06.2026', endDate: '12.10.2026', status: 'Faol', time: '17:00', endTime: '19:00' },
  { id: 22, name: 'N62', course: 'SMM',               teacher: 'Nilufar Xasanova',  assistant: 'Nozima Yusupova',   students: 23, startDate: '15.06.2026', endDate: '15.10.2026', status: 'Faol', time: '10:00', endTime: '12:00' },
  { id: 23, name: 'N63', course: 'Node.js',           teacher: 'Eldor Yusupov',     assistant: 'Jasur Kamolov',     students: 17, startDate: '18.06.2026', endDate: '18.10.2026', status: 'Faol', time: '14:00', endTime: '16:00' },
  { id: 24, name: 'N64', course: 'Data analitika',    teacher: 'Kamola Raximova',   assistant: 'Sarvar Olimov',     students: 21, startDate: '20.06.2026', endDate: '20.10.2026', status: 'Faol', time: '09:00', endTime: '11:00' },
  { id: 25, name: 'N65', course: 'Grafik dizayn',     teacher: 'Zafar Xoliqov',     assistant: 'Lobar Nazarova',    students: 14, startDate: '22.06.2026', endDate: '22.10.2026', status: 'Faol', time: '11:00', endTime: '13:00' },
  { id: 26, name: 'N66', course: 'Kiberxavfsizlik',   teacher: 'Mohira Sultonova',  assistant: 'Dilshod Tursunov',  students: 16, startDate: '25.06.2026', endDate: '25.10.2026', status: 'Faol', time: '16:00', endTime: '18:00' },
  { id: 27, name: 'N67', course: 'Frontend React.js', teacher: 'Sanjar Abdullayev', assistant: 'Zulfiya Ergasheva', students: 24, startDate: '01.07.2026', endDate: '01.11.2026', status: 'Faol', time: '13:00', endTime: '15:00' },
  { id: 28, name: 'N68', course: "Sun'iy intellekt",  teacher: 'Iroda Karimova',    assistant: 'Sarvar Olimov',     students: 13, startDate: '05.07.2026', endDate: '05.09.2026', status: 'Faol', time: '15:00', endTime: '17:00' },
];

export default function Groups() {
  const [activeTab, setActiveTab] = useState('Faol');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [attendance] = useState(() => {
    try { return JSON.parse(localStorage.getItem('lms_attendance') || '{}'); } catch { return {}; }
  });

  const today = new Date().toISOString().slice(0, 10);

  const filtered = groupsData.filter((g) => g.status === activeTab);

  const groupStudents = selectedGroup
    ? usersData.filter(u => u.group === selectedGroup.name)
    : [];

  const getAttendance = (uid) => attendance[`${today}_${uid}`] || { status: null, late: 0 };

  const getGroupStats = (groupName) => {
    const students = usersData.filter(u => u.group === groupName);
    const keldi = students.filter(u => (attendance[`${today}_${u.id}`] || {}).status === 'keldi').length;
    const kelmad = students.filter(u => (attendance[`${today}_${u.id}`] || {}).status === 'kelmadi').length;
    return { keldi, kelmad };
  };

  const keldiCount = groupStudents.filter(u => getAttendance(u.id).status === 'keldi').length;
  const kelmadCount = groupStudents.filter(u => getAttendance(u.id).status === 'kelmadi').length;

  return (
    <>
    <div className="groups-page">
      <div className="groups-header">
        <h2>Guruhlar</h2>
        <button className="add-btn">+ Yangi guruh</button>
      </div>

      {/* Filter tablar */}
      <div className="groups-tabs">
        <button
          className={`groups-tab ${activeTab === 'Faol' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('Faol')}
        >
          Faol
        </button>
        <button
          className={`groups-tab ${activeTab === 'Tugagan' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('Tugagan')}
        >
          Tugagan
        </button>
      </div>

      <div className="groups-cards">
        {filtered.map((g) => {
          const stats = getGroupStats(g.name);
          const total = usersData.filter(u => u.group === g.name).length;
          const hasAttendance = stats.keldi > 0 || stats.kelmad > 0;
          return (
          <div className="group-card" key={g.id} onClick={() => setSelectedGroup(g)} style={{cursor:'pointer'}}>
            <div className="group-card-top">
              <span className="group-name">{g.name}</span>
              <span className={`group-status ${g.status === 'Faol' ? 'active' : 'ended'}`}>
                {g.status}
              </span>
            </div>
            <div className="group-course">📚 {g.course}</div>
            <div className="group-info">
              <span>👨‍🏫 {g.teacher}</span>
              <span>🧑‍💼 {g.assistant}</span>
              <span>👥 {total} ta o'quvchi</span>
            </div>
            {hasAttendance && (
              <div className="group-card-attendance">
                <span className="gca-keldi">✅ {stats.keldi} keldi</span>
                <span className="gca-kelmad">❌ {stats.kelmad} kelmadi</span>
                <span className="gca-total">{total - stats.keldi - stats.kelmad} belgilanmagan</span>
              </div>
            )}
            <div className="group-date">⏰ Dars vaqti: {g.time} – {g.endTime}</div>
            <div className="group-date">🗓 Boshlanish: {g.startDate}</div>
            <div className="group-date">🏁 Tugash: {g.endDate}</div>
          </div>
          );
        })}
      </div>
    </div>

    {/* Guruh detail modali */}
    {selectedGroup && (
      <div className="modal-overlay" onClick={() => setSelectedGroup(null)}>
        <div className="group-modal" onClick={e => e.stopPropagation()}>
          <div className="group-modal-header">
            <div>
              <span className="group-modal-name">{selectedGroup.name}</span>
              <span className="group-modal-course">{selectedGroup.course}</span>
            </div>
            <button className="modal-close" onClick={() => setSelectedGroup(null)}>✕</button>
          </div>

          {/* Ustoz ma'lumotlari */}
          <div className="group-modal-teachers">
            <div className="gm-teacher-card">
              <span className="gm-teacher-icon">👨‍🏫</span>
              <div>
                <div className="gm-teacher-role">Asosiy ustoz</div>
                <div className="gm-teacher-name">{selectedGroup.teacher}</div>
              </div>
            </div>
            <div className="gm-teacher-card">
              <span className="gm-teacher-icon">🧑‍💼</span>
              <div>
                <div className="gm-teacher-role">Yordamchi ustoz</div>
                <div className="gm-teacher-name">{selectedGroup.assistant}</div>
              </div>
            </div>
          </div>

          {/* Davomat statistikasi — admin ko'rinishi */}
          <div className="gm-stat-wrap">
            <div className="gm-stat-title">📅 Bugungi davomat — {today}</div>
            <div className="gm-stat-cards">
              <div className="gm-stat-card keldi-card">
                <div className="gm-stat-num">{keldiCount}</div>
                <div className="gm-stat-label">✅ Keldi</div>
              </div>
              <div className="gm-stat-card kelmad-card">
                <div className="gm-stat-num">{kelmadCount}</div>
                <div className="gm-stat-label">❌ Kelmadi</div>
              </div>
              <div className="gm-stat-card pending-card">
                <div className="gm-stat-num">{groupStudents.length - keldiCount - kelmadCount}</div>
                <div className="gm-stat-label">⏳ Noma'lum</div>
              </div>
              <div className="gm-stat-card total-card">
                <div className="gm-stat-num">{groupStudents.length}</div>
                <div className="gm-stat-label">👥 Jami</div>
              </div>
            </div>
            {(keldiCount + kelmadCount) === 0 && (
              <div className="gm-stat-note">Davomat hali ustoz tomonidan belgilanmagan</div>
            )}
          </div>

          {/* O'quvchilar ro'yxati — read only */}
          <div className="gm-student-list-wrap">
            <div className="gm-student-list-title">👥 O'quvchilar ro'yxati ({groupStudents.length} ta)</div>
            {groupStudents.length === 0 ? (
              <div className="gm-empty">Bu guruh uchun o'quvchi topilmadi</div>
            ) : (
              <div className="gm-student-list">
                {groupStudents.map((u, i) => {
                  const att = getAttendance(u.id);
                  return (
                    <div
                      key={u.id}
                      className={`gm-student-row ${att.status === 'keldi' ? 'srow-keldi' : att.status === 'kelmadi' ? 'srow-kelmad' : 'srow-pending'}`}
                    >
                      <span className="gm-srow-num">{i + 1}</span>
                      <span className="gm-srow-name">{u.name}</span>
                      <span className={`gm-srow-badge ${att.status || 'none'}`}>
                        {att.status === 'keldi' ? '✅ Keldi' : att.status === 'kelmadi' ? '❌ Kelmadi' : '—'}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="group-modal-footer">
            <button className="modal-cancel" onClick={() => setSelectedGroup(null)}>Yopish</button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
