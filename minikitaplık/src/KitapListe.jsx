import React from 'react';
import KitapKarti from './KitapKarti';

function KitapListe({ kitaplar, favoriler, onToggleFavori }) {
  return (
    <div>
      {kitaplar.map((kitap) => (
        <KitapKarti
          key={kitap.id}
          baslik={kitap.baslik}
          yazar={kitap.yazar}
          kategori={kitap.kategori}
          favorideMi={favoriler.some((f) => f.id === kitap.id)}
          onToggleFavori={() => onToggleFavori(kitap)}
        />
      ))}
    </div>
  );
}

export default KitapListe;
