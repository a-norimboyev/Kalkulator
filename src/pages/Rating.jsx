import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { usersData } from './Users';
import { groupsData } from './Groups';
import './Rating.css';

export default function Rating() {
  const { user } = useAuth();
  const [filter, setFilter] = useState('all');

  // Barcha faol o'quvchilar — ball, xp, kumush har doim bir formuladan
  const activeStudents = usersData
    .filter(u => u.status === 'Faol')
    .map(u => {
      const ball   = u.ball ?? (55 + (u.id * 37) % 44);
      const xp     = ball * 10;
      const kumush = Math.round(xp * 5.5);
      return { ...u, ball, xp, kumush };
    })
    .sort((a, b) => b.ball - a.ball)
    .map((u, i) => ({ ...u, rank: i + 1 }))
    .slice(0, 100);

  // Ustoz guruhlarini aniqlash
  const teacherName = user?.teacherName;
  const myGroupNames = teacherName
    ? groupsData.filter(g => g.teacher === teacherName || g.assistant === teacherName).map(g => g.name)
    : [];

  const filtered = filter === 'all'
    ? activeStudents
    : filter === 'group'
    ? activeStudents.filter(u => myGroupNames.includes(u.group))
    : activeStudents.filter(u => u.course === 'Python');

  // Reranked for filtered view
  const ranked = filtered.map((u, i) => ({ ...u, rank: i + 1 }));

  const top3 = ranked.slice(0, 3);
  // Podium tartib: 2, 1, 3
  const podium = [top3[1], top3[0], top3[2]].filter(Boolean);

  // O'quvchining o'z ma'lumoti
  const myName = user?.role === 'student'
    ? `${user.firstName || ''} ${user.lastName || ''}`.trim()
    : null;

  const myEntry = myName
    ? ranked.find(u => u.name.toLowerCase() === myName.toLowerCase())
    : null;

  // Agar o'quvchi top 10 da bo'lmasa, uni alohida ko'rsatish uchun
  const showMyRow = myEntry && myEntry.rank > 10;

  const medalIcon = (rank) => rank === 1 ? '🥇' : rank === 2 ? '🥈' : '🥉';

  const MEDAL_COLORS = {
    1: { circle: '#F5A623', num: '#fff', ribbon: '#4C6EF5' },
    2: { circle: '#C0C0C0', num: '#fff', ribbon: '#4C6EF5' },
    3: { circle: '#CD7F32', num: '#fff', ribbon: '#4C6EF5' },
  };

  const MedalSVG = ({ rank }) => {
    const c = MEDAL_COLORS[rank] || MEDAL_COLORS[3];
    return (
      <svg width="64" height="72" viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ribbon left */}
        <path d="M32 4 L16 24 L26 24 L32 4Z" fill={c.ribbon} opacity="0.85"/>
        {/* Ribbon right */}
        <path d="M32 4 L48 24 L38 24 L32 4Z" fill={c.ribbon} opacity="0.85"/>
        {/* Ribbon center overlap */}
        <path d="M26 24 L38 24 L32 30Z" fill={c.ribbon}/>
        {/* Medal circle */}
        <circle cx="32" cy="50" r="20" fill={c.circle}/>
        <circle cx="32" cy="50" r="17" fill={c.circle} stroke="rgba(0,0,0,0.08)" strokeWidth="1.5"/>
        {/* Number */}
        <text x="32" y="56" textAnchor="middle" fill={c.num} fontSize="16" fontWeight="bold" fontFamily="Arial">{rank}</text>
      </svg>
    );
  };

  return (
    <div className="rating-container">
      <h1 className="rating-title">Reyting</h1>

      {top3.length >= 2 && (
        <div className="rating-header">
        <div className="top-three">
            {podium.map((student) => (
              <div key={student.id} className={`podium-card rank-${student.rank}`}>
                <MedalSVG rank={student.rank} />
                <div className="podium-rank">#{student.rank}</div>
                <div className="podium-name">{student.name}</div>
                <div className="podium-group">{student.group}</div>
                <div className="podium-points">🌐 {student.xp} XP</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="rating-filters">
        <button
          className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('all')}
        >
          Barcha o'quvchilar
        </button>
        {user?.role === 'teacher' && (
          <button
            className={filter === 'group' ? 'filter-btn active' : 'filter-btn'}
            onClick={() => setFilter('group')}
          >
            Mening guruhim
          </button>
        )}
        <button
          className={filter === 'course' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('course')}
        >
          Python bo'yicha
        </button>
      </div>

      <div className="rating-table-container">
        {ranked.length === 0 ? (
          <div style={{textAlign:'center', color:'#bbb', padding:'40px'}}>Ma'lumot topilmadi</div>
        ) : (
          <table className="rating-table">
            <thead>
              <tr>
                <th>O'rin</th>
                <th>O'quvchi</th>
                <th>Guruh</th>
                <th>Kurs</th>
                <th>XP</th>
                <th>Kumush</th>
              </tr>
            </thead>
            <tbody>
              {/* O'z o'rni yuqorida (agar top 10 dan tashqarida bo'lsa) */}
              {showMyRow && (
                <>
                  <tr className="my-rank-row">
                    <td>
                      <div className="rank-cell">
                        <span className="rank-number my-rank-num">#{myEntry.rank}</span>
                      </div>
                    </td>
                    <td className="student-name">
                      {myEntry.name}
                      <span className="my-label">Siz</span>
                    </td>
                    <td><span className="r-group-badge">{myEntry.group}</span></td>
                    <td style={{color:'#888', fontSize:'0.9rem'}}>{myEntry.course}</td>
                    <td>{myEntry.xp ? <span className="r-xp-cell">{myEntry.xp}</span> : ''}</td>
                    <td>{myEntry.kumush ? <span className="r-kumush-cell">{myEntry.kumush.toLocaleString()}</span> : ''}</td>
                  </tr>
                  <tr><td colSpan={6} className="my-rank-divider"><span>· · ·</span></td></tr>
                </>
              )}
              {ranked.map((student) => {
                const isMe = myName && student.name.toLowerCase() === myName.toLowerCase();
                return (
                  <tr key={student.id} className={`${student.rank <= 3 ? 'top-student' : ''} ${isMe ? 'my-rank-row' : ''}`}>
                    <td>
                      <div className="rank-cell">
                        {student.rank <= 3 && <span className="medal">{medalIcon(student.rank)}</span>}
                        <span className={`rank-number ${isMe ? 'my-rank-num' : ''}`}>#{student.rank}</span>
                      </div>
                    </td>
                    <td className="student-name">
                      {student.name}
                      {isMe && <span className="my-label">Siz</span>}
                    </td>
                    <td><span className="r-group-badge">{student.group}</span></td>
                    <td style={{color:'#888', fontSize:'0.9rem'}}>{student.course}</td>
                    <td>{student.xp ? <span className="r-xp-cell">{student.xp}</span> : ''}</td>
                    <td>{student.kumush ? <span className="r-kumush-cell">{student.kumush.toLocaleString()}</span> : ''}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
