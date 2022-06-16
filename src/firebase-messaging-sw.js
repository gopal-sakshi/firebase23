importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');

firebase.initializeApp({    
    // databaseURL: "https://XXXXX-YYYYY.firebaseio.com",
    apiKey: "AIzaSyDk8xLeJ8OYP-7TIwu-qpuADPJBnYalOrQ",
    authDomain: "gopal61288-01.firebaseapp.com",
    projectId: "gopal61288-01",
    storageBucket: "gopal61288-01.appspot.com",
    messagingSenderId: "299268567166",
    appId: "1:299268567166:web:e2b7f01a60f219f6cfe82f",
    measurementId: "G-N3FFG3LYGD"
  });

const messaging = firebase.messaging();