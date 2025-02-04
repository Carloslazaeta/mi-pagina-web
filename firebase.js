// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDxEhmpYBS0-fFxXNYDm6KMFlSoDBqgyF8",
    authDomain: "employeeprofiles-75652.firebaseapp.com",
    databaseURL: "https://employeeprofiles-75652-default-rtdb.firebaseio.com",
    projectId: "employeeprofiles-75652",
    storageBucket: "employeeprofiles-75652.appspot.com",
    messagingSenderId: "436210594516",
    appId: "1:436210594516:web:4d19dcc66d42929d86c141"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Función para obtener los datos de un empleado por nombre
export async function loadProfileData(name) {
    const dbRef = ref(database);
    try {
        const snapshot = await get(child(dbRef, `employees/${name}`));
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data found");
            return null;
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Función para guardar los datos del empleado en Firebase
export function saveProfile(name, data) {
    set(ref(database, `employees/${name}`), data)
        .then(() => {
            alert("Profile saved successfully!");
        })
        .catch((error) => {
            console.error("Error saving profile:", error);
        });
}
