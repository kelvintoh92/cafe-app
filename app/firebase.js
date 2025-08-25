// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZn9QzU_jiI3tKEZQ61-pof0JsjYGmSbI",
    authDomain: "popup-cafe-orders.firebaseapp.com",
    projectId: "popup-cafe-orders",
    storageBucket: "popup-cafe-orders.firebasestorage.app",
    messagingSenderId: "720195742495",
    appId: "1:720195742495:web:5ae939cc2bed10a4775e2a",
    measurementId: "G-P9KTED5ZW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore for use in other files
export { db };
