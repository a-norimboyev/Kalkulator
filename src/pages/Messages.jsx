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
  const [replies, setReplies] = useState({});
  const [replyText, setReplyText] = useState('');

  const selectMsg = (m) => {
    setMessages(prev => prev.map(x => x.id === m.id ? { ...x, read: true } : x));
    setSelected(m);
    setReplyText('');
  };

  const sendReply = () => {
    if (!replyText.trim() || !selected) return;
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    setReplies(prev => ({
      ...prev,
      [selected.id]: [...(prev[selected.id] || []), { text: replyText.trim(), time }]
    }));
    setReplyText('');
  };

  const unreadCount = messages.filter(m => !m.read).length;

  return (
    <div className="messages-page">
      <h2>Xabarlar {unreadCount > 0 && <span className="msg-unread-badge">{unreadCount}</span>}</h2>
      <div className="messages-layout">
        <div className="messages-list">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`message-item ${!m.read ? 'unread' : ''} ${selected?.id === m.id ? 'selected' : ''}`}
              onClick={() => selectMsg(m)}
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
              <div className="detail-messages">
                <div className="detail-bubble detail-bubble-in">
                  <div className="detail-body">{selected.text}</div>
                  <div className="detail-time">{selected.time}</div>
                </div>
                {(replies[selected.id] || []).map((r, i) => (
                  <div key={i} className="detail-bubble detail-bubble-out">
                    <div className="detail-body">{r.text}</div>
                    <div className="detail-time">{r.time}</div>
                  </div>
                ))}
              </div>
              <div className="detail-reply">
                <input
                  className="detail-reply-input"
                  value={replyText}
                  onChange={e => setReplyText(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendReply()}
                  placeholder="Javob yozing..."
                />
                <button className="detail-reply-btn" onClick={sendReply}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <div className="detail-empty">Xabarni tanlang</div>
          )}
        </div>
      </div>
    </div>
  );
}
