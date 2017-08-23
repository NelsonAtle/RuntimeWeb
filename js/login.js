var usuarios = JSON.parse(localStorage.getItem('usuarios'));

if (!usuarios) {
    usuarios = [];
}

function iniciar() {
    btnLoguear = document.getElementById("login");
    btnLoguear.addEventListener("click", login, false);
}

function login() {
    if (localStorage.getItem("usuarios")) {
        var user = document.getElementById("usuario").value;
        var pass = document.getElementById("password").value;

        var registros = JSON.parse(localStorage.getItem("usuarios"));

        for (i = 0; i < registros.length; i++) {
            if (user == "" || pass == "") {
                alert("Debe llenar todos los campos");
                break;
            } else {
                if (user == registros[i].usuario && pass == registros[i].password) {

                    location.href = "principal.html?var1=" + registros[i].nombre + "&var2=" + registros[i].correo+"&";
                    document.getElementById("user").value = "";
                    document.getElementById("pass").value = "";
                    break;
                }
            }
        }

    }

}



window.addEventListener("load", iniciar, false);
