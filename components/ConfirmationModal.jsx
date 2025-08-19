import { useState, useEffect } from "react";
import { database, ref, push, onValue } from "../firebase"; // ajusta o caminho se necessário
import "./ConfirmationModal.css"; // aqui você coloca o estilo do botão piscando/vibrando

export default function ConfirmationModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [confirmations, setConfirmations] = useState([]);

  useEffect(() => {
    const confirmationsRef = ref(database, "confirmations");
    onValue(confirmationsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) setConfirmations(Object.values(data));
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Digite seu nome!");

    const confirmationsRef = ref(database, "confirmations");
    push(confirmationsRef, { name: name.trim(), timestamp: Date.now() });

    setName("");
    onClose();
    alert(`Obrigada, ${name}, por confirmar sua presença!`);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Confirmar Presença</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn-pulse">Confirmar</button>
        </form>

        <h3>Pessoas que confirmaram:</h3>
        <ul>
          {confirmations.map((c, i) => (
            <li key={i}>{c.name}</li>
          ))}
        </ul>

        <button onClick={onClose} className="btn-back">
          ← Voltar
        </button>
      </div>
    </div>
  );
}
