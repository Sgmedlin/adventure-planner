(function() {

  const config = {
    apiKey: "AIzaSyDX4St5GDsNf2ATxHetgcD9v1fsYCzVzeI",
    authDomain: "adventurous-86e40.firebaseapp.com",
    databaseURL: "https://adventurous-86e40.firebaseio.com",
    projectId: "adventurous-86e40",
    storageBucket: "adventurous-86e40.appspot.com",
    messagingSenderId: "175221428743"
  };
  firebase.initializeApp(config);

  const inputUsername = document.getElementById("username");
  const inputEmail = document.getElementById("email");
  const inputPassword = document.getElementById("password");
  const signUpButton = document.getElementById("new_acct_btn");
  const logoutButton = document.getElementById("logout_button");

  signUpButton.addEventListener('click', e => {

    const email = inputEmail.value;
    const pass = inputPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    // Handle Errors here.
    promise.catch(e => console.log(e.message));

    console.log("Created user")

  });

  var forms = document.getElementsByClassName('main-form-signup');

  var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
      console.log(form.checkValidity());
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });



  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.

      document.getElementById("user_div").style.display = "block";
      document.getElementById("signup_form").style.display = "none";
      logoutButton.style.display = "block";


      var current_user = firebase.auth().currentUser;

      if(current_user != null){

        var email_id = user.email;
        var email_verified = user.emailVerified;

        // if(email_verified){

        //   document.getElementById("verify_btn").style.display = "none";
        // } 

        // else{
        //   document.getElementById("verify_btn").style.display = "block";
        // }


        document.getElementById("user_para").innerHTML = "Welcome : " + email_id;
        

      }

    } else {
      // No user is signed in.

      document.getElementById("user_div").style.display = "none";
      document.getElementById("signup_form").style.display = "block";
      logoutButton.style.display = "none";
    }

  });



}());


