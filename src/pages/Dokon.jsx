import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Dokon.css';

const MY_KUMUSH = 4730;

const PRODUCTS = [
  { id: 1,  name: "Najot Ta'lim ruchkasi",         price: 800,   category: 'Aksessuarlar', bg: '#f8f9fa', emoji: '✏️' },
  { id: 2,  name: "Stikerlar to'plami",             price: 1100,  category: 'Aksessuarlar', bg: '#1a1a2e', emoji: '🎨' },
  { id: 3,  name: "Najot Ta'lim stakani",           price: 1400,  category: 'Aksessuarlar', bg: '#00b894', emoji: '☕' },
  { id: 4,  name: "Sichqoncha uchun gilamcha",      price: 1800,  category: 'Elektronika',  bg: '#2d3436', emoji: '🖱️' },
  { id: 5,  name: "Najot Ta'lim termosi",           price: 2200,  category: 'Aksessuarlar', bg: '#f5f6fa', emoji: '🥤' },
  { id: 6,  name: "Yondaftar",                      price: 3000,  category: 'Kitoblar',     bg: '#1a1a2e', emoji: '📔' },
  { id: 7,  name: "Najot Ta'lim futbolkasi",        price: 4400,  category: 'Kiyim',        bg: '#2d3436', emoji: '👕' },
  { id: 8,  name: "Osmondagi Bolalar futbolkasi",   price: 4400,  category: 'Kiyim',        bg: '#1e2a3a', emoji: '👕' },
  { id: 9,  name: "Najot Ta'lim kepkasi",           price: 1600,  category: 'Kiyim',        bg: '#00b894', emoji: '🧢' },
  { id: 10, name: "Najot Ta'lim sumkasi",           price: 5500,  category: 'Aksessuarlar', bg: '#6c5ce7', emoji: '👜' },
  { id: 11, name: "Najot Ta'lim ko'ylagi",          price: 6000,  category: 'Kiyim',        bg: '#0984e3', emoji: '👔' },
  { id: 12, name: "USB Hub 4-port",                 price: 7000,  category: 'Elektronika',  bg: '#2d3436', emoji: '🔌' },
  { id: 13, name: "Noutbuk sovutgich",              price: 8500,  category: 'Elektronika',  bg: '#636e72', emoji: '💻' },
  { id: 14, name: "Najot Ta'lim bilakuzi",          price: 500,   category: 'Aksessuarlar', bg: '#fdcb6e', emoji: '📿' },
  { id: 15, name: "Stiker pack 2.0",                price: 900,   category: 'Aksessuarlar', bg: '#1a1a2e', emoji: '🏷️' },
  { id: 16, name: "Najot Ta'lim qoshiqcha",         price: 2500,  category: 'Aksessuarlar', bg: '#00b894', emoji: '🥄' },
  { id: 17, name: "Najot Ta'lim piyolasi",          price: 3500,  category: 'Aksessuarlar', bg: '#74b9ff', emoji: '🍵' },
  { id: 18, name: "Bluetooth quloqchin",            price: 12000, category: 'Elektronika',  bg: '#2d3436', emoji: '🎧' },
  { id: 19, name: "Najot Ta'lim kamar",             price: 2800,  category: 'Aksessuarlar', bg: '#a29bfe', emoji: '🎀' },
  { id: 20, name: "Najot Ta'lim kiyim seti",        price: 9000,  category: 'Kiyim',        bg: '#1a1a2e', emoji: '🧥' },
  { id: 21, name: "Najot Ta'lim oyoq kiyim",       price: 15000, category: 'Kiyim',        bg: '#dfe6e9', emoji: '👟' },
  { id: 22, name: "Premium Online Kurs",            price: 10000, category: 'Kurslar',      bg: '#6c5ce7', emoji: '🎓' },
];

const CATEGORIES = ['Barchasi', 'Aksessuarlar', 'Kiyim', 'Elektronika', 'Kitoblar', 'Kurslar'];
const PAGE_SIZE = 8;

export default function Dokon() {
  const [tab, setTab]           = useState('sotuvda');
  const [category, setCategory] = useState('Barchasi');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo]   = useState('');
  const [search, setSearch]     = useState('');
  const [affordable, setAffordable] = useState(false);
  const [page, setPage]         = useState(1);

  const resetFilters = () => {
    setCategory('Barchasi'); setPriceFrom(''); setPriceTo('');
    setSearch(''); setAffordable(false); setPage(1);
  };

  const source = tab === 'sotuvda' ? PRODUCTS : [];

  const filtered = source.filter(p => {
    if (category !== 'Barchasi' && p.category !== category) return false;
    if (priceFrom !== '' && p.price < Number(priceFrom)) return false;
    if (priceTo   !== '' && p.price > Number(priceTo))   return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (affordable && p.price > MY_KUMUSH) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleTabChange = (t) => { setTab(t); setPage(1); };

  return (
    <div className="dk-page">
      {/* Tabs */}
      <div className="dk-tabs">
        <button
          className={`dk-tab ${tab === 'sotuvda' ? 'dk-tab-active' : ''}`}
          onClick={() => handleTabChange('sotuvda')}
        >Sotuvda</button>
        <button
          className={`dk-tab ${tab === 'sotilgan' ? 'dk-tab-active' : ''}`}
          onClick={() => handleTabChange('sotilgan')}
        >Sotib olganlarim</button>
      </div>

      {/* Filters */}
      <div className="dk-filters">
        <div className="dk-filter-group">
          <label className="dk-filter-label">Kategoriya</label>
          <select
            className="dk-select"
            value={category}
            onChange={e => { setCategory(e.target.value); setPage(1); }}
          >
            {CATEGORIES.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="dk-filter-group">
          <label className="dk-filter-label">Akssesuar qiymati</label>
          <div className="dk-price-range">
            <input
              className="dk-price-input"
              type="number"
              min="0"
              value={priceFrom}
              onChange={e => { setPriceFrom(e.target.value); setPage(1); }}
            />
            <span className="dk-price-sep">dan</span>
            <input
              className="dk-price-input"
              type="number"
              min="0"
              value={priceTo}
              onChange={e => { setPriceTo(e.target.value); setPage(1); }}
            />
            <span className="dk-price-sep">gacha</span>
          </div>
        </div>

        <div className="dk-filter-group dk-filter-search">
          <label className="dk-filter-label">Akssesuar nomi</label>
          <div className="dk-search-wrap">
            <input
              className="dk-search-input"
              type="text"
              placeholder="Qidirish..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
            />
            <svg className="dk-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </div>
        </div>

        {tab === 'sotuvda' && (
          <div className="dk-filter-group">
            <label className="dk-filter-label">Kumushlarim yetadi</label>
            <div
              className={`dk-toggle ${affordable ? 'dk-toggle-on' : ''}`}
              onClick={() => { setAffordable(v => !v); setPage(1); }}
            >
              <div className="dk-toggle-knob" />
            </div>
          </div>
        )}

        <button className="dk-clear-btn" onClick={resetFilters} title="Tozalash">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8A838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18M8 6V4h8v2M5 6l1 14h12l1-14"/>
            <line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      {tab === 'sotuvda' ? (
        <>
          <div className="dk-grid">
            {paged.map(p => (
              <div className="dk-card" key={p.id}>
                <div className="dk-card-img" style={{ background: p.bg }}>
                  <span className="dk-emoji">{p.emoji}</span>
                </div>
                <div className="dk-card-body">
                  <div className="dk-card-name">{p.name}</div>
                  <div className="dk-card-footer">
                    <div className="dk-card-price">
                      <span>{p.price.toLocaleString()}</span>
                      <span className="dk-coin">🪙</span>
                    </div>
                    <button className={`dk-buy-btn ${p.price <= MY_KUMUSH ? 'dk-buy-ok' : 'dk-buy-no'}`}>
                      {p.price <= MY_KUMUSH ? 'Kumushingiz yetarli' : "Kumush yetarli emas"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="dk-pagination">
              <span className="dk-pg-size">{PAGE_SIZE} ▾</span>
              <span className="dk-pg-range">
                {(page - 1) * PAGE_SIZE + 1}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}
              </span>
              <button className="dk-pg-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>‹</button>
              <button className="dk-pg-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>›</button>
            </div>
          )}
        </>
      ) : (
        <div className="dk-empty">Sotib olingan aksessuarlar mavjud emas</div>
      )}
    </div>
  );
}
