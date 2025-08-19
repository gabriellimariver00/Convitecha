import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen.jsx";
import InvitationDetails from "./components/InvitationDetails.jsx";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("welcome");

  return (
    <>
      {currentScreen === "welcome" ? (
        <WelcomeScreen onContinue={() => setCurrentScreen("details")} />
      ) : (
        <InvitationDetails onBack={() => setCurrentScreen("welcome")} />
      )}
    </>
  );
};

export default App;
