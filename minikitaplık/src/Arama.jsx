
import React from 'react';

function Arama({ aramaMetni, onSearch }) {
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={aramaMetni}
        onChange={onSearch}
        className="border p-2 rounded w-64 text-sm"
        placeholder="Başlık veya yazar ara..."
      />
    </div>
  );
}

export default Arama;