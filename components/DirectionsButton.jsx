import React from "react";

export default function DirectionsButton() {
  const handleClick = () => {
    window.open("https://maps.google.com", "_blank");
  };

  return (
    <button onClick={handleClick}>
      Ver Local no Mapa 📍
    </button>
  );
}

