import React, { useState, useEffect } from "react";
import ConfirmationModal from "./ConfirmationModal.jsx";
import GiftSuggestions from "./GiftSuggestions.jsx";
import { database, ref, onValue } from "../firebase.js";

const InvitationDetails = ({ onBack }) => {
  const [showModal, setShowModal] = useState(false);
  const [confirmedGuests, setConfirmedGuests] = useState([]);

  useEffect(() => {
    const guestsRef = ref(database, "confirmations");
    onValue(guestsRef, (snapshot) => {
      const data = snapshot.val() || {};
      setConfirmedGuests(Object.values(data));
    });
  }, []);

  const openMaps = () => {
    const address = "Sitio Garças, Russas CE";
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, "_blank");
  };

  return (
    <div style={{padding:"20px"}}>
      <h2>Chá de Revelação</h2>
      <p>Gabriel & Natalia</p>
      <p>Data: 21 de setembro de 2025</p>
      <p>Local: Sitio Garças, Russas CE</p>

      <button className="pulse" onClick={() => setShowModal(true)}>Confirmar Presença</button>
      <button onClick={openMaps}>Como Chegar</button>
      <GiftSuggestions />

      <h3>Pessoas Confirmadas:</h3>
      <ul>
        {confirmedGuests.map((guest, index) => <li key={index}>{guest.name}</li>)}
      </ul>

      <button onClick={onBack}>← Voltar</button>

      {showModal && <ConfirmationModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default InvitationDetails;
