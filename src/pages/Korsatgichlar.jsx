import './Korsatgichlar.css';

const XP_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const DIAMOND_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12l4 6-10 13L2 9z"/>
    <path d="M2 9h20"/>
    <path d="M6 3l4 6m8-6l-4 6"/>
  </svg>
);

const IMPORT_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12m0 0l-4-4m4 4l4-4"/>
    <path d="M3 17h18v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2z"/>
  </svg>
);

const TREND_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

const data = {
  bosqich: 3,
  xp: 920,
  xpMax: 1100,
  kumushlar: 5060,
  monitoringRows: [
    { text: "Darsga ishtirok bo'yicha",   xp: 300, kumush: 1650 },
    { text: "Uyga vazifa bo'yicha",        xp: 566, kumush: 3113 },
    { text: "Imtihondan o'tish bo'yicha",  xp: 46,  kumush: 253  },
    { text: "Administratsiya tomonidan berilgan", xp: 8, kumush: 44 },
  ],
};

export default function Korsatgichlar() {
  const progress = Math.round((data.xp / data.xpMax) * 100);

  return (
    <div className="kors-page">
      {/* Header */}
      <div className="kors-header">
        <h2 className="kors-title">Mening natijalarim</h2>
        <div className="kors-kumush-badge">
          {DIAMOND_ICON}
          <span>Kumushlar: <b>{data.kumushlar.toLocaleString()}</b></span>
        </div>
      </div>

      {/* Bosqich card */}
      <div className="kors-card kors-bosqich-card">
        <div className="kors-bosqich-row">
          {TREND_ICON}
          <span className="kors-bosqich-label">Bosqich: <b>{data.bosqich}</b></span>
        </div>
        <div className="kors-progress-wrap">
          <div className="kors-progress-label">
            <span className="kors-prog-badge">{data.xp} / {data.xpMax}</span>
          </div>
          <div className="kors-progress-bar">
            <div className="kors-progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="kors-xp-row">
          {XP_ICON}
          <span className="kors-xp-label">XP: <b>{data.xp}</b></span>
        </div>
      </div>

      {/* Monitoring */}
      <div className="kors-card">
        <h3 className="kors-section-title">Yig'ilgan natijalar monitoringi</h3>
        <div className="kors-monitor-list">
          {data.monitoringRows.map((row, i) => (
            <div key={i} className="kors-monitor-row">
              <span className="kors-monitor-text">
                {row.text} jami XP <b>{row.xp}</b>, Jami Kumush <b>{row.kumush}</b>
              </span>
              <span className="kors-monitor-icon">{IMPORT_ICON}</span>
            </div>
          ))}
        </div>
        <div className="kors-totals">
          <div className="kors-total-row">
            {XP_ICON}
            <span>Jami yig'ilgan XP: <b className="kors-green">{data.xp}</b></span>
          </div>
          <div className="kors-total-row">
            {DIAMOND_ICON}
            <span>Jami yig'ilgan Kumushlar: <b className="kors-purple">{data.kumushlar.toLocaleString()}</b></span>
          </div>
        </div>
      </div>
    </div>
  );
}
