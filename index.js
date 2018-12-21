firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var current_user = firebase.auth().currentUser;

    if(current_user != null){

      var email_id = user.email;
      var email_verified = user.emailVerified;

      if(email_verified){

        document.getElementById("verify_btn").style.display = "none";
      } 

      else{
        document.getElementById("verify_btn").style.display = "block";
      }


      document.getElementById("user_para").innerHTML = "Welcome : " + email_id + "<br/>Verified : " + email_verified;
      

    }

  } else {
    // No user is signed in.

    document.getElementById("user_div").style.display = "none";
    //document.getElementById("login_div").style.display = "block";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function create_account(){
  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;


    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });
}


function send_verification(){
  var user = firebase.auth().currentUser;

  user.sendEmailVerification().then(function() {
    // Email sent.
  }).catch(function(error) {
    // An error happened.

    window.alert("Error")
  });

}


function logout(){
  firebase.auth().signOut();
}

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('main-form-signup');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
          console.log("all good")
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();