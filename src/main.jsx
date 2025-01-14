import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/firebase-messaging-sw.js", { type: "module" })
//     .then(function (registration) {
//       console.log(
//         "Service Worker registration successful with scope: ",
//         registration.scope
//       );
//     })
//     .catch(function (err) {
//       console.log("Service Worker registration failed: ", err);
//     });
// }
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
