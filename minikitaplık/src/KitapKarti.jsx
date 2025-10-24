import React from 'react';

function KitapKarti({ baslik, yazar, kategori, favorideMi, onToggleFavori }) {
  const buttonStyle = {
    padding: '5px 10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: favorideMi ? 'gold' : '#a10f0fff',
    cursor: 'pointer',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '6px' }}>
      <div>
        <h3>{baslik}</h3>
        <p style={{ fontSize: '14px', color: '#ae2268ff' }}>{yazar} · {kategori}</p>
      </div>
      <button style={buttonStyle} onClick={onToggleFavori}>
        {favorideMi ? '★ Favoride' : '☆ Favori Ekle'}
      </button>
    </div>
  );
}

export default KitapKarti;
