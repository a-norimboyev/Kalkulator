import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Payments.css';

// O'quvchi (Azizjon Norimboyev) ning shaxsiy to'lov tarixi
const studentPayments = [
  { id: 1, kurs: 'Python', guruh: 'Foundation-N12', summa: 1000000, sana: '01.03.2026', method: 'Click',         status: "To'langan", oy: 'Mart 2026' },
  { id: 2, kurs: 'Python', guruh: 'Foundation-N12', summa: 1000000, sana: '01.04.2026', method: 'Payme',         status: "To'langan", oy: 'Aprel 2026' },
  { id: 3, kurs: 'Python', guruh: 'Foundation-N12', summa: 1000000, sana: '01.05.2026', method: 'Plastik karta', status: 'Kutilmoqda', oy: 'May 2026' },
];

function StudentPayments() {
  const totalPaid    = studentPayments.filter(p => p.status === "To'langan").reduce((s, p) => s + p.summa, 0);
  const totalPending = studentPayments.filter(p => p.status === 'Kutilmoqda').reduce((s, p) => s + p.summa, 0);
  const nextPay = studentPayments.find(p => p.status === 'Kutilmoqda');

  return (
    <div className="pay-page">
      <div className="pay-header"><h2>To'lovlarim</h2></div>

      {/* Stat kartochkalar */}
      <div className="pay-stats">
        <div className="pay-stat green">
          <div className="pay-stat-icon">💰</div>
          <div>
            <div className="pay-stat-label">Jami to'langan</div>
            <div className="pay-stat-value">{totalPaid.toLocaleString()} so'm</div>
          </div>
        </div>
        <div className="pay-stat orange">
          <div className="pay-stat-icon">⏳</div>
          <div>
            <div className="pay-stat-label">Kutilmoqda</div>
            <div className="pay-stat-value">{totalPending > 0 ? `${totalPending.toLocaleString()} so'm` : '—'}</div>
          </div>
        </div>
        <div className="pay-stat purple">
          <div className="pay-stat-icon">📚</div>
          <div>
            <div className="pay-stat-label">Kursim</div>
            <div className="pay-stat-value">Python</div>
          </div>
        </div>
        <div className="pay-stat blue">
          <div className="pay-stat-icon">📅</div>
          <div>
            <div className="pay-stat-label">Keyingi to'lov</div>
            <div className="pay-stat-value">{nextPay ? nextPay.sana : '—'}</div>
          </div>
        </div>
      </div>

      {/* Jadval */}
      <div className="pay-table-wrapper" style={{ marginTop: 24 }}>
        <table className="pay-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Oy</th>
              <th>Kurs</th>
              <th>Guruh</th>
              <th>Summa</th>
              <th>Sana</th>
              <th>To'lov turi</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {studentPayments.map((p, i) => (
              <tr key={p.id}>
                <td>{i + 1}</td>
                <td style={{ fontWeight: 600 }}>{p.oy}</td>
                <td>{p.kurs}</td>
                <td><span className="pay-group">{p.guruh}</span></td>
                <td className="pay-amount">{p.summa.toLocaleString()} so'm</td>
                <td>{p.sana}</td>
                <td>{p.method}</td>
                <td>
                  <span className={`pay-badge ${p.status === "To'langan" ? 'paid' : 'pending'}`}>
                    {p.status === "To'langan" ? "✓ To'langan" : '⏳ Kutilmoqda'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const paymentsData = [
  { id: 1,  student: 'Azizjon Norimboyev',  group: 'N45', course: 'Frontend React.js', amount: 1200000, date: '01.04.2026', method: 'Click',        status: "To'langan" },
  { id: 2,  student: 'Jasur Toshmatov',      group: 'N45', course: 'Frontend React.js', amount: 1200000, date: '02.04.2026', method: 'Payme',        status: "To'langan" },
  { id: 3,  student: 'Bekzod Mirzayev',      group: 'N46', course: 'Python',            amount: 1000000, date: '03.04.2026', method: 'Plastik karta', status: "To'langan" },
  { id: 4,  student: 'Sanjar Qodirov',       group: 'N46', course: 'Python',            amount: 1000000, date: '04.04.2026', method: 'Naqd pul',     status: "To'langan" },
  { id: 5,  student: 'Asilbek Ergashev',     group: 'N47', course: 'UI/UX',             amount:  900000, date: '05.04.2026', method: 'Click',        status: "To'langan" },
  { id: 6,  student: 'Fotima Zokirova',      group: 'N47', course: 'UI/UX',             amount:  900000, date: '06.04.2026', method: 'Payme',        status: "To'langan" },
  { id: 7,  student: 'Muhammadali Aliyev',   group: 'N48', course: 'SMM',               amount:  800000, date: '07.04.2026', method: 'Click',        status: "To'langan" },
  { id: 8,  student: 'Shohruh Olimov',       group: 'N48', course: 'SMM',               amount:  800000, date: '08.04.2026', method: 'Plastik karta', status: "To'langan" },
  { id: 9,  student: 'Ulugbek Karimov',      group: 'N49', course: 'Node.js',           amount: 1100000, date: '09.04.2026', method: 'Naqd pul',     status: "To'langan" },
  { id: 10, student: 'Shoira Yusupova',      group: 'N49', course: 'Node.js',           amount: 1100000, date: '10.04.2026', method: 'Payme',        status: "To'langan" },
  { id: 11, student: 'Shokir Abdullayev',    group: 'N50', course: 'Data analitika',    amount: 1050000, date: '11.04.2026', method: 'Click',        status: "To'langan" },
  { id: 12, student: 'Gulbahor Tosheva',     group: 'N50', course: 'Data analitika',    amount: 1050000, date: '12.04.2026', method: 'Plastik karta', status: "To'langan" },
  { id: 13, student: 'Ibrohim Salimov',      group: 'N51', course: 'Kiberxavfsizlik',   amount: 1150000, date: '13.04.2026', method: 'Payme',        status: "To'langan" },
  { id: 14, student: 'Nuriddin Hasanov',     group: 'N51', course: 'Kiberxavfsizlik',   amount: 1150000, date: '14.04.2026', method: 'Click',        status: "To'langan" },
  { id: 15, student: 'Mansur Rashidov',      group: 'N53', course: 'Videografiya',      amount:  850000, date: '15.04.2026', method: 'Naqd pul',     status: "To'langan" },
  { id: 16, student: 'Dilrabo Umarova',      group: 'N53', course: 'Videografiya',      amount:  850000, date: '16.04.2026', method: 'Click',        status: "To'langan" },
  { id: 17, student: 'Nodir Xasanov',        group: 'N54', course: 'Mobilografiya',     amount:  750000, date: '17.04.2026', method: 'Payme',        status: "To'langan" },
  { id: 18, student: 'Sarvinoz Mirzayeva',   group: 'N54', course: 'Mobilografiya',     amount:  750000, date: '18.04.2026', method: 'Plastik karta', status: "To'langan" },
  { id: 19, student: 'Amir Tursunov',        group: 'N55', course: 'Start Junior',      amount:  700000, date: '19.04.2026', method: 'Click',        status: "To'langan" },
  { id: 20, student: 'Xurshida Nazarova',    group: 'N55', course: 'Start Junior',      amount:  700000, date: '20.04.2026', method: 'Naqd pul',     status: "To'langan" },
  { id: 21, student: 'Eldor Yusupov',        group: 'N56', course: "Sun'iy intellekt",  amount: 1300000, date: '21.04.2026', method: 'Payme',        status: "To'langan" },
  { id: 22, student: 'Farrux Ergashev',      group: 'N56', course: "Sun'iy intellekt",  amount: 1300000, date: '22.04.2026', method: 'Click',        status: "To'langan" },
  { id: 23, student: 'Behruz Mirzayev',      group: 'N57', course: 'Frontend React.js', amount: 1200000, date: '23.04.2026', method: 'Plastik karta', status: "To'langan" },
  { id: 24, student: 'Ozoda Xoliqova',       group: 'N57', course: 'Frontend React.js', amount: 1200000, date: '24.04.2026', method: 'Click',        status: "To'langan" },
  { id: 25, student: 'Ravshan Nazarov',      group: 'N58', course: 'Python',            amount: 1000000, date: '25.04.2026', method: 'Payme',        status: "Kutilmoqda" },
  { id: 26, student: 'Nargiza Aliyeva',      group: 'N58', course: 'Python',            amount: 1000000, date: '25.04.2026', method: 'Click',        status: "Kutilmoqda" },
  { id: 27, student: 'Otabek Salimov',       group: 'N59', course: 'Flutter',           amount: 1100000, date: '26.04.2026', method: 'Naqd pul',     status: "Kutilmoqda" },
  { id: 28, student: 'Sherzod Holmatov',     group: 'N60', course: 'UI/UX',             amount:  900000, date: '26.04.2026', method: 'Plastik karta', status: "Kutilmoqda" },
  { id: 29, student: 'Bobur Toshmatov',      group: 'N61', course: 'Java',              amount: 1050000, date: '27.04.2026', method: 'Click',        status: "Kutilmoqda" },
  { id: 30, student: 'Jasur Abdullayev',     group: 'N62', course: 'SMM',               amount:  800000, date: '27.04.2026', method: 'Payme',        status: "Kutilmoqda" },
];

export default function Payments() {
  const { user } = useAuth();

  if (user?.role === 'student') return <StudentPayments />;

  // Admin / Teacher view
  const [activeTab, setActiveTab] = useState("To'langan");
  const [search, setSearch] = useState('');

  const totalPaid    = paymentsData.filter(p => p.status === "To'langan").reduce((s, p) => s + p.amount, 0);
  const totalPending = paymentsData.filter(p => p.status === 'Kutilmoqda').reduce((s, p) => s + p.amount, 0);
  const paidCount    = paymentsData.filter(p => p.status === "To'langan").length;
  const pendingCount = paymentsData.filter(p => p.status === 'Kutilmoqda').length;

  const filtered = paymentsData.filter(p => {
    const matchTab = p.status === activeTab;
    const matchSearch = p.student.toLowerCase().includes(search.toLowerCase()) ||
      p.group.toLowerCase().includes(search.toLowerCase()) ||
      p.course.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="pay-page">
      <div className="pay-header">
        <h2>Moliya</h2>
      </div>

      {/* Stat kartochkalar */}
      <div className="pay-stats">
        <div className="pay-stat green">
          <div className="pay-stat-icon">💰</div>
          <div>
            <div className="pay-stat-label">Jami to'langan</div>
            <div className="pay-stat-value">{totalPaid.toLocaleString()} so'm</div>
          </div>
        </div>
        <div className="pay-stat orange">
          <div className="pay-stat-icon">⏳</div>
          <div>
            <div className="pay-stat-label">Kutilmoqda</div>
            <div className="pay-stat-value">{totalPending.toLocaleString()} so'm</div>
          </div>
        </div>
        <div className="pay-stat purple">
          <div className="pay-stat-icon">👥</div>
          <div>
            <div className="pay-stat-label">To'lagan o'quvchilar</div>
            <div className="pay-stat-value">{paidCount} ta</div>
          </div>
        </div>
        <div className="pay-stat blue">
          <div className="pay-stat-icon">📋</div>
          <div>
            <div className="pay-stat-label">Kutilayotgan to'lovlar</div>
            <div className="pay-stat-value">{pendingCount} ta</div>
          </div>
        </div>
      </div>

      {/* Tablar */}
      <div className="pay-tabs">
        <button
          className={`pay-tab ${activeTab === "To'langan" ? 'tab-active' : ''}`}
          onClick={() => setActiveTab("To'langan")}
        >
          To'langan
        </button>
        <button
          className={`pay-tab ${activeTab === 'Kutilmoqda' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('Kutilmoqda')}
        >
          Kutilmoqda
        </button>
      </div>

      {/* Qidiruv */}
      <div className="pay-search-row">
        <input
          className="pay-search"
          type="text"
          placeholder="O'quvchi, guruh yoki kurs bo'yicha qidirish..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <span className="pay-count">Jami: {filtered.length} ta to'lov</span>
      </div>

      {/* Jadval */}
      <div className="pay-table-wrapper">
        <table className="pay-table">
          <thead>
            <tr>
              <th>#</th>
              <th>O'quvchi</th>
              <th>Guruh</th>
              <th>Kurs</th>
              <th>Summa</th>
              <th>Sana</th>
              <th>To'lov turi</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p, i) => (
              <tr key={p.id}>
                <td>{i + 1}</td>
                <td>{p.student}</td>
                <td><span className="pay-group">{p.group}</span></td>
                <td>{p.course}</td>
                <td className="pay-amount">{p.amount.toLocaleString()} so'm</td>
                <td>{p.date}</td>
                <td>{p.method}</td>
                <td>
                  <span className={`pay-badge ${p.status === "To'langan" ? 'paid' : 'pending'}`}>
                    {p.status === "To'langan" ? '✓ To\'langan' : '⏳ Kutilmoqda'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}