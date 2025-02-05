// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, get, set } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    databaseURL: "https://employeeprofiles-75652-default-rtdb.firebaseio.com",
    projectId: "employeeprofiles-75652",
    storageBucket: "employeeprofiles-75652.appspot.com",
    messagingSenderId: "436210594516",
    appId: "1:436210594516:web:4d19dcc66d42929d86c141"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, get, set };
