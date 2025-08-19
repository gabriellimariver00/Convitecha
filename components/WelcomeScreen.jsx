import React from "react";

const WelcomeScreen = ({ onContinue }) => {
  return (
    <div className="text-center" style={{padding:"50px"}}>
      <h1>Chá de Revelação</h1>
      <p>Gabriel & Natalia</p>
      <button className="pulse" onClick={onContinue}>
        ✨ Mais Informações ✨
      </button>
    </div>
  );
};

export default WelcomeScreen;
