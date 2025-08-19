import React from "react";
import ConfirmationButton from "./components/ConfirmationButton.jsx";
import DirectionsButton from "./components/DirectionsButton.jsx";
import Suggestions from "./components/Suggestions.jsx";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Chá de Revelação - Gabriel & Natalia</h1>
      <p>Dia 21 de setembro, 2025 - Sítio Garças, Russas CE</p>
      <ConfirmationButton />
      <DirectionsButton />
      <Suggestions />
    </div>
  );
}
