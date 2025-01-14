// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYmQSDz2VnPOOesZBzV58F-D0W7GWHIlw",
  authDomain: "voiceout-a3b95.firebaseapp.com",
  projectId: "voiceout-a3b95",
  storageBucket: "voiceout-a3b95.firebasestorage.app",
  messagingSenderId: "520331786986",
  appId: "1:520331786986:web:fdfef5a58d085980947593",
  measurementId: "G-9JWYNC6MM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const messaging = getMessaging(app);
export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  //   console.log(permission);
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BDYBZFNxU42ibCg47lp2TTy4fv7pGZWqXBnsizPouzGAEkxd7UC97VTnp3QUh2MCdH0sic_I3inj_lxxtiT6_KI",
    });
    console.log(token);
  }
};
export { app, messaging };
