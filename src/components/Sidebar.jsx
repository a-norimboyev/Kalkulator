import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

const I = {
  home:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  card:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  group:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  chart:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  star:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  cart:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  monitor: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  gear:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  book:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  money:   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  mail:    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  report:  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
};

export default function Sidebar({ isOpen = true }) {
  const { user } = useAuth();

  const studentMenu = [
    { to: '/', icon: I.home,    label: 'Bosh sahifa', end: true },
    { to: '/payments', icon: I.card,    label: "To'lovlarim" },
    { to: '/teachers', icon: I.group,   label: 'Guruhlarim' },
    { to: '/korsatgichlar', icon: I.chart, label: "Ko'rsatgichlarim" },
    { to: '/rating',   icon: I.star,    label: 'Reyting' },
    { to: '/dokon', icon: I.cart, label: "Do'kon" },
    { to: '/extralessons', icon: I.monitor, label: "Qo'shimcha darslar" },
    { to: '/settings', icon: I.gear,    label: 'Sozlamalar' },
  ];

  const teacherMenu = [
    { to: '/', icon: I.home,    label: 'Bosh sahifa', end: true },
    { to: '/teachers', icon: I.group,   label: 'Guruhlarim' },
    { to: '/rating',   icon: I.star,    label: "O'quvchilar reytingi" },
    { to: '/settings', icon: I.gear,    label: 'Sozlamalar' },
  ];

  const adminMenu = [
    { to: '/', icon: I.home,    label: 'Bosh sahifa', end: true },
    { to: '/users',    icon: I.group,   label: "O'quvchilar" },
    { to: '/groups',   icon: I.book,    label: 'Guruhlar' },
    { to: '/courses',  icon: I.chart,   label: 'Barcha kurslar' },
    { to: '/teachers', icon: I.group,   label: "O'qituvchilar" },
    { to: '/payments', icon: I.money,   label: 'Moliya' },
    { to: '/reports',  icon: I.report,  label: 'Hisobotlar' },
    { to: '/messages', icon: I.mail,    label: 'Xabarlar' },
    { to: '/settings', icon: I.gear,    label: 'Tizim sozlamalari' },
  ];

  let menu = studentMenu;
  if (user?.role === 'teacher') menu = teacherMenu;
  if (user?.role === 'admin') menu = adminMenu;

  return (
    <aside className={`sidebar ${isOpen ? '' : 'sidebar-hidden'}`}>
      <div className="sidebar-header">
        <div className="logo">
          <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
            <path d="M16 6c1.5-2 5-4 8-2-1 3-4 5-6 4 2 1 5 4 4 8-2-2-5-3-6-6 0 3-2 6-4 7-1-4 1-8 4-11z" fill="#E8A838"/>
            <path d="M16 18v8" stroke="#8B6914" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <div className="logo-text">NAJOT <span>TA'LIM</span></div>
          <span className="beta-badge">Beta</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            end={item.end}
            className={({ isActive }) => isActive ? 'sidebar-item active' : 'sidebar-item'}
          >
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
