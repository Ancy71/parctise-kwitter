


const firebaseConfig = {
  apiKey: "AIzaSyCfZX5NpHJTAyvVb5IwdFUYUKnXJTQGGzs",
  authDomain: "kwitter-a34b0.firebaseapp.com",
  projectId: "kwitter-a34b0",
  storageBucket: "kwitter-a34b0.appspot.com",
  messagingSenderId: "814648557526",
  appId: "1:814648557526:web:93f0987c2a484fba0f6e77"
};


const app = initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


