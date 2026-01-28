// Firebase SDK Modules (इन्हें न बदलें)
import { initializeApp } from "https://www.gstatic.com";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com";

// !!! अपनी Firebase Config यहाँ पेस्ट करें !!!
// Firebase Console > Project Settings > Your apps (Web app) से मिलेंगी
const firebaseConfig = {
    apiKey: "YOUR_API_KEY", // <--- इसे बदलें
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com", // <--- इसे बदलें
    projectId: "YOUR_PROJECT_ID", // <--- इसे बदलें
    storageBucket: "YOUR_PROJECT_APP_SPOT_URL", // <--- इसे बदलें
    messagingSenderId: "YOUR_SENDER_ID", // <--- इसे बदलें
    appId: "YOUR_APP_ID" // <--- इसे बदलें
};

// Firebase शुरू करें
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const messageElement = document.getElementById("message");

// लॉगिन फंक्शन
window.login = function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            messageElement.style.color = "green";
            messageElement.innerText = "सफलतापूर्वक लॉगिन हो गया! 🎉 रीडायरेक्ट हो रहा है...";
            window.location.href = "dashboard.html"; 
        })
        .catch((error) => {
            messageElement.style.color = "red";
            messageElement.innerText = "लॉगिन असफल: " + error.message;
        });
};

// साइन अप फंक्शन
window.signUp = function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            messageElement.style.color = "green";
            messageElement.innerText = "अकाउंट बन गया! 🎉 रीडायरेक्ट हो रहा है...";
            window.location.href = "dashboard.html"; 
        })
        .catch((error) => {
            messageElement.style.color = "red";
            messageElement.innerText = "साइन अप असफल: " + error.message;
        });
};
