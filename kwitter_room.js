var firebaseConfig = {
      apiKey: "AIzaSyBpVYI4URovAR7L7iO_npziFVK4EuP8v0U",
      authDomain: "kwitter-c73ea.firebaseapp.com",
      projectId: "kwitter-c73ea",
      storageBucket: "kwitter-c73ea.appspot.com",
      messagingSenderId: "468805398803",
      appId: "1:468805398803:web:1d5f2bbec0e3c500eb6ae6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
