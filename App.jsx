import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import InvitationDetails from "./components/InvitationDetails";
import ConfirmButton from "./components/ConfirmButton";
import ConfirmedList from "./components/ConfirmedList";
import DirectionsButton from "./components/DirectionsButton";
import GiftSuggestions from "./components/GiftSuggestions";

function App() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="container">
      {!confirmed && <WelcomeScreen />}
      <InvitationDetails />
      <ConfirmButton onConfirm={() => setConfirmed(true)} />
      {confirmed && <ConfirmedList />}
      <DirectionsButton />
      <GiftSuggestions />
    </div>
  );
}

export default App;
