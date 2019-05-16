var config = {
    apiKey: "AIzaSyA0ZK9_FTSjahwFm-4wjJRuCa3a-DsskFI",
    authDomain: "uyaweb-4b3be.firebaseapp.com",
    databaseURL: "https://uyaweb-4b3be.firebaseio.com",
    projectId: "uyaweb-4b3be",
    storageBucket: "uyaweb-4b3be.appspot.com",
    messagingSenderId: "201927923295"
};

firebase.initializeApp(config);


function introducir()
{
    var database = firebase.database();
    var name = document.getElementById("name").value;
    var referencia = database.ref(name);

    var user = firebase.auth().currentUser;

    if(user != null)
    {
        referencia.set({
            author: document.getElementById("author").value,
            tittle: document.getElementById("tittle").value,
            year: document.getElementById("year").value,
            user: user.uid
        })
            .then(function(){
            document.getElementById("change").style.display = "flex";
            document.getElementById("change").style.justifyContent = "center";
            document.getElementById("change").innerHTML = "";
            document.getElementById("change").innerHTML = "<h1>Libro Introducido Correctamente</h1>"
            document.getElementById("reload_button").innerHTML = "<div id='button_div'><a class='waves-effect button waves-light btn' onclick='document.location.reload()'><i class='material-icons right'>cloud</i>Click Me!</a></div>"

        })
            .catch(function(error){
            document.getElementById("change").style.display = "flex";
            document.getElementById("change").style.justifyContent = "center";
            document.getElementById("change").innerHTML = "";
            document.getElementById("change").innerHTML = "<h1>Fallo en la introducción del libro</h1>"
            document.getElementById("reload_button").innerHTML = "<div id='button_div'><a class='waves-effect button waves-light btn' onclick='document.location.reload()' alt='refrescar la página'><i class='material-icons right'>cloud</i>Click Me!</a></div>"
        });
    }
    else
    {
        document.getElementById("change").style.display = "flex";
        document.getElementById("change").style.justifyContent = "center";
        document.getElementById("change").innerHTML = "";
        document.getElementById("change").innerHTML = "<h1>Fallo en la introducción del libro</h1>"
        document.getElementById("reload_button").innerHTML = "<div id='button_div'><a class='waves-effect button waves-light btn' onclick='document.location.reload()' alt='refrescar la página'><i class='material-icons right'>cloud</i>Click Me!</a></div>";

    }
}


function validate()
{
    var name_check = document.getElementById("name").value;
    var author_check = document.getElementById("author").value;
    var tittle_check = document.getElementById("tittle").value;
    var year_check = document.getElementById("year").value;

    document.getElementById("name_error").textContent = "";
    document.getElementById("author_error").textContent = "";
    document.getElementById("tittle_error").textContent = "";
    document.getElementById("year_error").textContent = "";

    var error = 0;

    if(name_check == "")
    {
        error++;
        document.getElementById("name_error").textContent = "Campo Obligatorio.";
    }
    else
    {
        var expreg_name = /^[a-z]/;

        if(!expreg_name.test(name_check))
        {
            error++;
            document.getElementById("name_error").textContent = "ERROR: Nombre debe empezar por minúscula." ;  
        }
    }

    if (author_check == "")
    {
        error++;
        document.getElementById("author_error").textContent = "Campo Obligatorio.";
    }
    else
    {
        var expreg_author = /^[A-Z]/;

        if(!expreg_author.test(author_check))
        {
            error++;
            document.getElementById("author_error").textContent = "ERROR: Autor debe empezar por mayúscula." ;  
        }        
    }

    if (tittle_check == "")
    {
        error++;
        document.getElementById("tittle_error").textContent = "Campo Obligatorio.";
    }
    else
    {
        var expreg_tittle = /^[A-Z]/;

        if(!expreg_tittle.test(tittle_check))
        {
            error++;
            document.getElementById("tittle_error").textContent = "ERROR: Título debe empezar por mayúscula." ;  
        }        
    }

    if (year_check == "")
    {
        error++;
        document.getElementById("year_error").textContent = "Campo Obligatorio.";
    }
    else
    {
        var year = (new Date).getFullYear();

        if(year_check > year)
        {
            error++;
            document.getElementById("year_error").textContent = "ERROR: El año introducido es superior al año actual."; 
        }

    }

    if(error == 0)
    {
        introducir();   
    }    
}



document.onkeypress = function()
{
    if(event.keyCode == 13)
        validate();
}

/*------------------------------ Identificacion -------------------------------------*/

function login()
{
    var email = document.getElementById("email").value;
    console.log(email);
    var password = document.getElementById("password").value;
    console.log(password);


    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
    });
}


firebase.auth().onAuthStateChanged(function(user) {

    //if (user && user.emailVerified) {
    if (user) {
        document.getElementById("box").style.display = "none";
        document.getElementById("google_button").style.display = "none";

        var user = firebase.auth().currentUser;

        if(user != null){
            var email_id = user.email;
            document.getElementById("access").innerHTML = "Bienvenido<br/>" + email_id;
            document.getElementById("logout").innerHTML = "<div id='logout_button' class='form-field left-align'><button class='btn-large amber' onclick='logout()'>Logout</button></div>"
        }

        /*} else if(!user.emailVerified) {
        user.sendEmailVerification(); */   
    } else {
        document.getElementById("access").innerHTML = "";
        document.getElementById("logout").innerHTML = "";
        document.getElementById("box").style.display = "block";
        document.getElementById("google_button").style.display = "block";
    }
});

function signup(){

    var userEmail = document.getElementById("email_register").value;
    var userPass = document.getElementById("password_register").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
    }).then(function() { location.href = "https://uyaweb-4b3be.firebaseapp.com/login.html";});
}

function login_google(){
    var provider = new firebase.auth.GoogleAuthProvider(); 
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
    })    
}

function logout(){
    firebase.auth().signOut();
}
/*-----------------------------------------------------------------------------------*/
function setrole(id)
{
    var introduce = "help_field_" + id;
    document.getElementById(introduce).innertHTML = "role='alert'";

}

function quitrole(id)
{
    var introduce = "help_field_" + id;
    document.getElementById(introduce).innertHTML = "role=''";

}

/*---------------------------------------------------------------------------*/
/*
function books(libro)
{
    return firebase.database().ref('books/' + libro).once('value').then(function(snapshot){
        console.log(snapshot.val().image);
    });
}*/

/*
function inject_books()
{
    return firebase.database().ref('books/').once('value').then(function(snapshot){

        var container = document.getElementById("container_books");
        var book = "";

        var count = 0;
        var contador = 0;

        var fields = [];
        var field_number = 0;

        for(var object in snapshot.val())
        {   
            fields.push(object);

            firebase.database().ref('books/' + object).once('value').then(function(snapshot_in){

                book = snapshot_in.val().image;

                if(count == 0)
                {
                    contador += 1;
                    container.innerHTML += '<div class="row margen"><div id="div_' + contador + '" class="col s12 div_books">';   
                }

                var field = "'" + fields[field_number] + "'";
                field_number += 1;

                document.getElementById("div_" + contador).innerHTML += '<span class="books"><img alt="" onclick="select_book(' + field + ')" src="' + book + '"></span>';
                count += 1;

                if(count == 3)
                {
                    count = 0;
                }
            });
        }
    });
}




function select_book(book_field)
{
    return firebase.database().ref('books/' + book_field).once('value').then(function(snapshot){

        var book_name = snapshot.val().title;

        book_name = book_name.replace(/\s/g,"+");
        book_name += "+Libro";

        location.href="https://www.amazon.es/s?k=" + book_name + "&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2";
    });

} */    








