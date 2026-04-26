import './Reports.css';

const stats = [
  { label: "Jami o'quvchilar", value: '1,240', icon: '👥', color: 'purple' },
  { label: "Jami o'qituvchilar", value: '48', icon: '👨‍🏫', color: 'blue' },
  { label: 'Faol guruhlar', value: '62', icon: '📚', color: 'green' },
  { label: 'Oylik daromad', value: "124,000,000 so'm", icon: '💰', color: 'orange' },
];

const monthlyData = [
  { month: 'Yanvar', students: 180, income: 90000000 },
  { month: 'Fevral', students: 210, income: 105000000 },
  { month: 'Mart', students: 240, income: 120000000 },
  { month: 'Aprel', students: 260, income: 124000000 },
];

export default function Reports() {
  return (
    <div className="reports-page">
      <h2>Hisobotlar</h2>

      <div className="rep-stats">
        {stats.map((s, i) => (
          <div className={`rep-stat ${s.color}`} key={i}>
            <div className="rep-stat-icon">{s.icon}</div>
            <div>
              <div className="rep-stat-label">{s.label}</div>
              <div className="rep-stat-value">{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="monthly-table-wrapper">
        <h3>Oylik ko'rsatkichlar</h3>
        <table className="monthly-table">
          <thead>
            <tr>
              <th>Oy</th>
              <th>Yangi o'quvchilar</th>
              <th>Daromad</th>
            </tr>
          </thead>
          <tbody>
            {monthlyData.map((row, i) => (
              <tr key={i}>
                <td>{row.month}</td>
                <td>{row.students} ta</td>
                <td>{row.income.toLocaleString()} so'm</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
