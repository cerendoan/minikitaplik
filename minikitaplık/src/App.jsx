import React, { useState, useEffect } from 'react';
import KitapListe from './KitapListe';
import FavoriPaneli from './FavoriPaneli';
import Arama from './Arama';
import KategoriFiltre from './KategoriFiltre';

function App() {
  const kitaplar = [
    { id: 1, baslik: "React’e Giriş", yazar: "D.Usta", kategori: "Web" },
    { id: 2, baslik: "İleri JavaScript", yazar: "S.Kılıç", kategori: "Web" },
    { id: 3, baslik: "Veri Yapıları", yazar: "A.Demir", kategori: "CS" },
    { id: 4, baslik: "Algoritmalar", yazar: "E.Kaya", kategori: "CS" },
    { id: 5, baslik: "UI/UX Temelleri", yazar: "N.Akın", kategori: "Tasarım" },
  ];

  const [aramaMetni, setAramaMetni] = useState("");
  const [kategori, setKategori] = useState("Tümü");
  const [favoriler, setFavoriler] = useState(
    JSON.parse(localStorage.getItem("favoriler")) || []
  );
  const [sonArama, setSonArama] = useState(localStorage.getItem("aranan") || " ");

  
  const handleSearch = (event) => {
    setAramaMetni(event.target.value);
    localStorage.setItem("aranan", event.target.value);
    setSonArama(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [favoriler]);

  const filtreliKitaplar = kitaplar.filter((kitap) => {
    const aramaUyum =
      kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriUyum = kategori === "Tümü" || kitap.kategori === kategori;
    return aramaUyum && kategoriUyum;
  });

  const toggleFavori = (kitap) => {
    if (favoriler.some(f => f.id === kitap.id)) {
      setFavoriler(favoriler.filter(f => f.id !== kitap.id));
    } else {
      setFavoriler([...favoriler, kitap]);
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <h1>Mini Kitaplık</h1>

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
        <Arama aramaMetni={aramaMetni} onSearch={handleSearch} />
        <KategoriFiltre kategori={kategori} onChange={e => setKategori(e.target.value)} />
      </div>

      
      <p style={{ marginTop: '10px', fontStyle: 'italic', color: 'gray' }}>
        Son arama: {sonArama}
      </p>

      <div style={{ display: 'flex', gap: '40px', paddingTop: '20px' }}>
        <div style={{ flex: 1 }}>
          <KitapListe 
            kitaplar={filtreliKitaplar} 
            favoriler={favoriler} 
            onToggleFavori={toggleFavori} 
          />
        </div>

        <div style={{ width: '300px', flexShrink: 0 }}>
          <FavoriPaneli favoriler={favoriler} onKaldir={toggleFavori} />
        </div>
      </div>
    </div>
  );
}

export default App;
