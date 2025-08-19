// Importando funções do Firebase
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Configuração do seu Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBvE4UhFOapllHbXxwxhW5o_y9dgsZUEtg",
  authDomain: "convite-cha-revelacao-511a2.firebaseapp.com",
  databaseURL: "https://convite-cha-revelacao-511a2-default-rtdb.firebaseio.com",
  projectId: "convite-cha-revelacao-511a2",
  storageBucket: "convite-cha-revelacao-511a2.appspot.com",
  messagingSenderId: "60150164299",
  appId: "1:60150164299:web:65c2fadb6024bce78556ce",
  measurementId: "G-LQ8DZK3GNP"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Exportando para usar nos componentes
export { database, ref, push, onValue };
