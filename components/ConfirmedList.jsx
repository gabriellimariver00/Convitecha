import React from "react";

export default function ConfirmedList({ confirmados }) {
  return (
    <div>
      <h3>Confirmados ✅</h3>
      {confirmados.length === 0 ? (
        <p>Ninguém confirmou ainda</p>
      ) : (
        <ul>
          {confirmados.map((item, index) => (
            <li key={index}>{item.nome}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

