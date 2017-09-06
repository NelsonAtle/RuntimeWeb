var usuarios = JSON.parse(localStorage.getItem('usuarios'));

if (!usuarios) {
    usuarios = [];
} 

function iniciar() {
    btnGuardar = document.getElementById("registrar");
    btnFoto = document.getElementById("loadFoto"); 
    btnFoto.addEventListener("change", handleFiles,false);
    btnGuardar.addEventListener("click", registrar, false);
}

function handleFiles() {
  var preview =  document.getElementById("user");
  var file    =  document.getElementById("loadFoto").files[0];
  var reader  = new FileReader();
  
  reader.onloadend = function () {
    preview.src = reader.result;
      path = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
function registrar() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var usuario = document.getElementById("usuario").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirmar").value;

    saveToLocalStorage(nombre, apellido, correo, usuario, password, confirm,path);

}

function saveToLocalStorage(nombre, apellido, correo, usuario, password, confirm,foto) {

    if (password == confirm) {
        var i = 0;

        while (i <= usuarios.length) {
            if(usuarios.length==0){
               var usuario = {
                        nombre,
                        apellido,
                        correo,
                        usuario,
                        password,
                   foto
                    };
                    usuarios.push(usuario);
                    localStorage.setItem('usuarios', JSON.stringify(usuarios));
                    document.getElementById("nombre").value = "";
                    document.getElementById("apellidos").value = "";
                    document.getElementById("correo").value = "";
                    document.getElementById("usuario").value = "";
                    document.getElementById("password").value = "";
                    document.getElementById("confirmar").value = "";
                document.getElementById("user").src = "/imagenes/user.png";
                    alert("Nuevo Usuario Registrado");
                location.href = "index.html"
                    break;
            }
            if (usuario == usuarios[i].usuario) {
                alert("Ya existe este usuario");
                break;
            } else {
                if (correo == usuarios[i].correo) {
                    alert("Ya existe un usuario con este correo");
                    break;
                } else {
                    var usuario = {
                        nombre,
                        apellido,
                        correo,
                        usuario,
                        password,
                         foto
                    };
                    usuarios.push(usuario);
                    localStorage.setItem('usuarios', JSON.stringify(usuarios));
                    document.getElementById("nombre").value = "";
                    document.getElementById("apellidos").value = "";
                    document.getElementById("correo").value = "";
                    document.getElementById("usuario").value = "";
                    document.getElementById("password").value = "";
                    document.getElementById("confirmar").value = "";
                    document.getElementById("user").src = "/imagenes/user.png";
                    alert("Nuevo Usuario Registrado");
                    location.href = "index.html"
                    break;
                }
            }
            i++;
        }
    } else {
        alert("No coinciden las contraseña");
    }
}





window.addEventListener("load", iniciar, false);
