import { useState } from 'react';
import './Messages.css';

const initialMessages = [
  { id: 1, from: 'Azizjon Norimboyev', text: "To'lov chekini yubordim, tekshirib ko'ring.", time: '10:30', read: false },
  { id: 2, from: 'Malika Yusupova', text: "Bugungi dars bekor qilindi, o'quvchilarga xabar bering.", time: '09:15', read: false },
  { id: 3, from: 'Jasur Toshmatov', text: "Guruh jadvalidagi o'zgarishni ko'rdim, rahmat!", time: '08:50', read: true },
  { id: 4, from: 'Nilufar Rahimova', text: 'Sertifikatimni qachon olaman?', time: 'Kecha', read: true },
  { id: 5, from: 'Sardor Xolmatov', text: "Yangi kurs materiallari tayyor, saytga qo'yishim mumkinmi?", time: 'Kecha', read: true },
];

export default function Messages() {
  const [messages, setMessages] = useState(initialMessages);
  const [selected, setSelected] = useState(null);

  const markRead = (id) => {
    setMessages((prev) => prev.map((m) => m.id === id ? { ...m, read: true } : m));
    setSelected(messages.find((m) => m.id === id));
  };

  return (
    <div className="messages-page">
      <h2>Xabarlar</h2>
      <div className="messages-layout">
        <div className="messages-list">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`message-item ${!m.read ? 'unread' : ''} ${selected?.id === m.id ? 'selected' : ''}`}
              onClick={() => markRead(m.id)}
            >
              <div className="message-avatar">{m.from[0]}</div>
              <div className="message-content">
                <div className="message-from">{m.from}</div>
                <div className="message-preview">{m.text}</div>
              </div>
              <div className="message-time">{m.time}</div>
              {!m.read && <span className="unread-dot" />}
            </div>
          ))}
        </div>

        <div className="message-detail">
          {selected ? (
            <>
              <div className="detail-header">{selected.from}</div>
              <div className="detail-body">{selected.text}</div>
              <div className="detail-time">{selected.time}</div>
            </>
          ) : (
            <div className="detail-empty">Xabarni tanlang</div>
          )}
        </div>
      </div>
    </div>
  );
}
