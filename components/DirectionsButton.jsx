import React from "react";

export default function DirectionsButton() {
  const handleClick = () => {
    window.open("https://www.google.com/maps?q=Sítio+Garças,+Russas+CE", "_blank");
  };

  return (
    <button
      onClick={handleClick}
      style={{
        margin: "10px",
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#4caf50",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
    >
      Como Chegar
    </button>
  );
}
