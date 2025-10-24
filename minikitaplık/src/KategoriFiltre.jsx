import React from 'react';
function KategoriFiltre({ kategori, onChange }) {
  const kategoriler = ["Tümü", "Web", "CS", "Tasarım"];

  return (
    <select value={kategori} onChange={onChange} className="border p-2 rounded">
      {kategoriler.map((k) => (
        <option key={k} value={k}>
          {k}
        </option>
      ))}
    </select>
  );
}

export default KategoriFiltre;
