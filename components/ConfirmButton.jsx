import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBvE4UhFOapllHbXxwxhW5o_y9dgsZUEtg",
  authDomain: "convite-cha-revelacao-511a2.firebaseapp.com",
  databaseURL: "https://convite-cha-revelacao-511a2-default-rtdb.firebaseio.com",
  projectId: "convite-cha-revelacao-511a2",
  storageBucket: "convite-cha-revelacao-511a2.appspot.com",
  messagingSenderId: "60150164299",
  appId: "1:60150164299:web:65c2fadb6024bce78556ce",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default function ConfirmationButton() {
  const [name, setName] = useState("");
  const [confirmed, setConfirmed] = useState([]);

  useEffect(() => {
    const confRef = ref(db, "confirmations");
    onValue(confRef, (snapshot) => {
      const data = snapshot.val() || {};
      setConfirmed(Object.values(data));
    });
  }, []);

  const handleConfirm = () => {
    if (!name.trim()) return alert("Digite seu nome");
    const confRef = ref(db, "confirmations");
    push(confRef, { name: name.trim(), confirmedAt: new Date().toISOString() });
    setName("");
    alert("Sua presença foi confirmada! 🎉");
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <button
        onClick={handleConfirm}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          backgroundColor: "#f5a623",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          animation: "vibrate 0.5s infinite alternate",
        }}
      >
        Confirmar Presença
      </button>

      <div style={{ marginTop: "20px", textAlign: "left" }}>
        <h3>Pessoas que confirmaram (somente você vê):</h3>
        <ul>
          {confirmed.map((c, i) => (
            <li key={i}>{c.name}</li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes vibrate {
          0% { transform: translateX(0); }
          25% { transform: translateX(-2px); }
          50% { transform: translateX(2px); }
          75% { transform: translateX(-2px); }
          100% { transform: translateX(2px); }
        }
      `}</style>
    </div>
  );
}
