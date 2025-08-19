// Importando SDK do Firebase
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Configurações do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBvE4UhFOapllHbXxwxhW5o_y9dgsZUEtg",
  authDomain: "convite-cha-revelacao-511a2.firebaseapp.com",
  databaseURL: "https://convite-cha-revelacao-511a2-default-rtdb.firebaseio.com",
  projectId: "convite-cha-revelacao-511a2",
  storageBucket: "convite-cha-revelacao-511a2.firebasestorage.app",
  messagingSenderId: "60150164299",
  appId: "1:60150164299:web:65c2fadb6024bce78556ce",
  measurementId: "G-LQ8DZK3GNP"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
