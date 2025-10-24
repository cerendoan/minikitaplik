import React from 'react';

function FavoriPaneli({ favoriler, onKaldir }) {
  return (
    <div className="border rounded-lg p-3">
      <h2 className="font-semibold mb-2">Favoriler ({favoriler.length})</h2>
      {favoriler.length === 0 ? (
        <p className="text-sm text-gray-500">Henüz favori yok.</p>
      ) : (
        <ul className="list-disc pl-5">
          {favoriler.map((f) => (
            <li key={f.id} className="flex justify-between items-center mb-1 text-sm">
              <span>{f.baslik}</span>
              <button
                onClick={() => onKaldir(f)}
                className="text-xs border px-2 py-0.5 rounded hover:bg-gray-100"
              >
                Kaldır
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriPaneli;
