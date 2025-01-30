import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxEhmpYBS0-fFxXNYDm6KMFlSoDBqgyF8",
  authDomain: "employeeprofiles-75652.firebaseapp.com",
  databaseURL: "https://employeeprofiles-75652-default-rtdb.firebaseio.com",
  projectId: "employeeprofiles-75652",
  storageBucket: "employeeprofiles-75652.firebasestorage.app",
  messagingSenderId: "436210594516",
  appId: "1:436210594516:web:4d19dcc66d42929d86c141"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database };
