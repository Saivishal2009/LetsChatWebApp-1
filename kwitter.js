// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnuo2n36CwBEdI-7RDZ1Ac7KSsapslGc8",
    authDomain: "letschatwebapp-1.firebaseapp.com",
    databaseURL: "https://letschatwebapp-1-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-1",
    storageBucket: "letschatwebapp-1.appspot.com",
    messagingSenderId: "429858240393",
    appId: "1:429858240393:web:161410cefe2eaad7639358"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

function adduser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("Username",user_name);

    window.location = "kwitter_room.html";
}