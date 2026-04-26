import { useState } from 'react';
import './ExtraLessons.css';

const COURSE = {
  title: "HR Suhbatlari kursi",
  sections: [
    {
      id: 1,
      title: "Ish izlash va suhbatgacha bo'lgan jarayonlar",
      lessons: [
        "HR: Ijtimoiy tarmoqlardagi profil holatini to'g'rilash",
        "HR: Ish e'lonlari bilan tanishib chiqish",
        "HR: Ishga topshirmoqchi bo'layotgan kompaniya va ish o'rni haqida o'rganib chiqish.mp4",
        "HR: Ish izlash",
        "HR: kirish darsi",
        "HR: Rekruterlar bilan yozishish",
        "HR: Telefon suhbatlarida nimalarga e'tibor berish kerak?",
        "HR: Xabar yozish",
        "HR: Telefon suhbatlari nimaga o'tkaziladi.mp4",
      ],
    },
    {
      id: 2,
      title: "Ish izlash va suhbatgacha bo'lgan jarayonlar: Rezyume",
      lessons: [
        "01.Rekruterlar rezyumengizni qanday o'qiydi.mp4",
        "01.Rezyume va CV orasidagi farq.mp4",
        "02.Rezyume va CV orasidagi farq.mp4",
        "Fayl formati va nomlanishi.mp4",
        "HR: Rezyume: Ish tajriba qismi",
        "Hr: Rezyume: Ko'nikmalar qismi ma'lumotlarini to'g'rilash",
        "HR: Rezyume: Mukofot va yutuqlar",
        "HR: Rezyume: Rang",
        "HR: Rezyume: Rasm",
        "HR: Rezyume: References",
      ],
    },
    {
      id: 3,
      title: "Ish izlash va suhbatgacha bo'lgan jarayonlar: Linkedin",
      lessons: [
        "HR: Linkedin: About - Haqida qismini to'g'rilash",
        "HR: Linkedin: Background image - Orqa fonga rasm qo'yish",
        "HR: LinkedIn: Boshqa qismlar haqida",
        "HR: Linkedin: Education - Ta'lim qismini to'g'rilash",
        "HR: LinkedIn: Feature qo'shish",
        "HR: LinkedIn: Guruhlar qismi haqida",
        "HR: Linkedin: Headline - Sarlavha qismini to'g'rilash",
        "HR: LinkedIn: Ish qidirish",
        "HR: LinkedIn: Jobs - Ishlar qismi",
        "HR: Linkedin: Profile picture - Asosiy rasmni qo'yish",
      ],
    },
    {
      id: 4,
      title: "Ish suhbati",
      lessons: [
        "22-DARS.mp4",
        "23-DARS.mp4",
        "HR: Ish suhbatida so'ralmaydigan savollar",
        "HR: Kamchiliklaringiz haqida gapirib bering",
        "HR: Kompaniya binosiga kirib kelganda e'tibor berilishi kerak bo'lgan jihatlar",
        "HR: Noqulay savollarga to'g'ri uslubda javob berish",
        "HR: Oflayn suhbatlar.mp4",
        "HR: Online suhbat",
        "HR: O'zingiz haqingizda gaprib bering.mp4",
        "HR: Qobiliyatlaringiz va kuchli tomonlaringiz haqida gapirib bering",
      ],
    },
    {
      id: 5,
      title: "HR: Ishga kirgandan keyingi jarayonlar",
      lessons: [
        "10-DARS.mp4",
        "11-DARS.mp4",
        "2-DARS.mp4",
        "3-DARS.mp4",
        "4-DARS.mp4",
        "5-DARS.mp4",
        "6-DARS.mp4",
        "7-DARS.mp4",
        "8-DARS.mp4",
        "9-DARS.mp4",
      ],
    },
    {
      id: 6,
      title: "HR: Ishdan bo'shash",
      lessons: [
        "20-DARS.mp4",
        "21-DARS.mp4",
      ],
    },
  ],
};

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="el-play-icon">
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: 'transform 0.25s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function ExtraLessons() {
  const [openSections, setOpenSections] = useState({ 1: true });

  const toggle = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // dummy to keep linter happy — remove old buyProduct
  const _unused = null; void _unused;

  return (
    <div className="el-page">
      <h2 className="el-course-title">{COURSE.title}</h2>

      <div className="el-accordion">
        {COURSE.sections.map((section) => {
          const isOpen = !!openSections[section.id];
          return (
            <div className={`el-section ${isOpen ? 'el-section-open' : ''}`} key={section.id}>
              <button className="el-section-header" onClick={() => toggle(section.id)}>
                <span className="el-section-title">
                  {section.id}. {section.title}
                </span>
                <ChevronIcon open={isOpen} />
              </button>

              {isOpen && (
                <div className="el-section-body">
                  {section.lessons.map((lesson, idx) => (
                    <div className="el-lesson-row" key={idx}>
                      <PlayIcon />
                      <span className="el-lesson-text">
                        {idx + 1} - Mavzu: {lesson}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}