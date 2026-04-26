import './Courses.css';

const courses = [
  {
    id: 1, name: 'Dasturlash foundation', duration: 4, category: 'Dasturlash', type: 'Bootcamp', top: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    id: 2, name: 'Grafik dizayn', duration: 6, category: 'Design', type: 'Bootcamp', top: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
      </svg>
    ),
  },
  {
    id: 3, name: 'Grafik Dizayn', duration: 6, category: 'Design', type: 'Standard', top: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
  {
    id: 4, name: 'SMM', duration: 4, category: 'Marketing', type: 'Boshqa', top: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    id: 5, name: 'Data analitika', duration: 7, category: 'Dasturlash', type: 'Standard', top: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    id: 6, name: "Sun'iy intellekt asoslari", duration: 2, category: 'Marketing', type: 'Standard', top: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    id: 7, name: 'Mobilografiya', duration: 2, category: 'Marketing', type: 'Standard', top: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    id: 8, name: 'Kiberxavfsizlik', duration: 8, category: 'Dasturlash', type: 'Standard', top: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: 9, name: 'Videografiya', duration: 6, category: 'Design', type: 'Standard', top: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    id: 10, name: 'Start Junior', duration: 12, category: 'Dasturlash', type: 'Standard', top: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="32" height="32">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
  },
];

const typeColors = {
  Bootcamp: { bg: '#fde8cc', color: '#c97a2a' },
  Standard: { bg: '#d4f5e9', color: '#27a96c' },
  Boshqa:   { bg: '#cce6ff', color: '#2a7ac9' },
};

export default function Courses() {
  return (
    <div className="courses-container">
      <h1 className="courses-title">Barcha kurslar</h1>

      <div className="courses-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-card-top">
              <div className="course-icon-wrap">
                {course.top && <span className="top-badge">+TOP</span>}
                {course.icon}
              </div>
              <div className="course-meta">
                <div className="course-name">{course.name}</div>
                <div className="course-duration">{course.duration} oy</div>
              </div>
            </div>
            <div className="course-tags">
              <span className="category-tag">{course.category}</span>
              <span
                className="type-tag"
                style={{
                  background: typeColors[course.type].bg,
                  color: typeColors[course.type].color,
                }}
              >
                {course.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}