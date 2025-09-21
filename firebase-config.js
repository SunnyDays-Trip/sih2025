// Firebase configuration
// Replace these values with your actual Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDziuGu7e0hLhQIbiXzOO2Pc--8YdGKBU",
    authDomain: "community-forum-89f18.firebaseapp.com",
    projectId: "community-forum-89f18",
    storageBucket: "community-forum-89f18.firebasestorage.app",
    messagingSenderId: "903254896257",
    appId: "1:903254896257:web:302d8675d5247fa1a3a780",
    measurementId: "G-XR62FZB1RV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

// Export for use in other files
window.db = db;
