//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDMG_qw40R6QyA9cnH0aT9W2v36hPJOdhY",
    authDomain: "kwitter2-d632a.firebaseapp.com",
    databaseURL: "https://kwitter2-d632a-default-rtdb.firebaseio.com",
    projectId: "kwitter2-d632a",
    storageBucket: "kwitter2-d632a.appspot.com",
    messagingSenderId: "571827172522",
    appId: "1:571827172522:web:266e56cb9ff3d95695ccd3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");

document.getElementById("welcome_user").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' > #" + Room_names + "</div> <hr>";

            document.getElementById("output").innerHTML += row;
        });
    });
    //end code
}

getData();

function redirectToRoomName(name_chosen) {
    console.log("room name chosen= " + name_chosen);
    localStorage.setItem("room_name", name_chosen);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter_login.html";
}