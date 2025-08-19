import React, { useState, useEffect } from "react";
import WelcomeScreen from "./componentes/WelcomeScreen";
import InvitationDetails from "./componentes/InvitationDetails";
import ConfirmButton from "./componentes/ConfirmButton";
import ConfirmedList from "./componentes/ConfirmedList";
import DirectionsButton from "./componentes/DirectionsButton";
import Gifts from "./componentes/Gifts";
import Suggestions from "./componentes/Suggestions";
import { db } from "../firebase";
import { ref, push, onValue } from "firebase/database";

export default function App() {
  const [confirmed, setConfirmed] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const confirmedRef = ref(db, "confirmados");
    onValue(confirmedRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setConfirmed(Object.values(data));
      } else {
        setConfirmed([]);
      }
    });
  }, []);

  const handleConfirm = () => {
    if (!name.trim()) return alert("Digite seu nome!");
    push(ref(db, "confirmados"), { nome: name });
    setName("");
  };

  return (
    <div className="container">
      <WelcomeScreen />
      <InvitationDetails />
      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <ConfirmButton onClick={handleConfirm} />
      <ConfirmedList confirmados={confirmed} />
      <DirectionsButton />
      <Gifts />
      <Suggestions />
    </div>
  );
}
