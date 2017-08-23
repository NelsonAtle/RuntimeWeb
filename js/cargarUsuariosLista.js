var usuarios = JSON.parse(localStorage.getItem('usuarios'));

if (!usuarios) {
    usuarios = [];
}


function getGET() {
    loc = document.location.href;
    var getString = loc.split('?')[1];
    var GET = getString.split('&');
    var get = {};

    for (var i = 0, l = GET.length; i < l; i++) {
        var tmp = GET[i].split('=');
        get[tmp[0]] = unescape(decodeURI(tmp[1]));
    }
    return get;
}


function iniciar() {
    getGET();
    //contenedor miembros
    var miembros = document.createElement("div");
    var atributo = document.createAttribute("id");


    atributo.value = "miembros";
    miembros.setAttributeNode(atributo);
    if (usuarios) {
var siguiendo = JSON.parse(localStorage.getItem('siguiendo'));

if (!siguiendo) {
    siguiendo = [];
}


        for (i = 0; i < siguiendo.length; i++) {
            for (j = 0; j < usuarios.length; j++) {
                if (siguiendo[i].yo == getGET().var2 && siguiendo[i].persona == usuarios[j].correo) {
                    usuarios.splice(j, 1);
                    break;
                }
            }
        }



        for (i = 0; i < usuarios.length; i++) {
            if (getGET().var2 != usuarios[i].correo) {




                //contenedor del usuario cargado 
                var persona = document.createElement("div");

                //contenedor de la foto del usuario
                var fotoPersona = document.createElement("div");

                //foto de la persona cargada
                var foto = document.createElement("img");

                //Nombre del persona
                var h1 = document.createElement("h1");
                atributo = document.createAttribute("onClick");
                atributo.value = "perfil(this);";
                h1.setAttributeNode(atributo);
                atributo = document.createAttribute("id");
                atributo.value = i;
                h1.setAttributeNode(atributo);
                atributo = document.createAttribute("class");
                atributo.value = usuarios[i].correo;
                h1.setAttributeNode(atributo);
                //correo de identificacion
                var h5 = document.createElement("h5");
                //boton para seguir a la persona
                var boton = document.createElement("button");
                atributo = document.createAttribute("onClick");
                atributo.value = "capturar(this);";
                boton.setAttributeNode(atributo);
                atributo = document.createAttribute("id");
                atributo.value = usuarios[i].correo;
                boton.setAttributeNode(atributo);
                boton.innerHTML = "Seguir";

                foto.src = usuarios[i].foto;
                h1.innerHTML = usuarios[i].nombre + " " + usuarios[i].apellido;
                h5.innerHTML = usuarios[i].correo;




                miembros.appendChild(persona);
                persona.appendChild(fotoPersona);
                fotoPersona.appendChild(foto);
                persona.appendChild(h1);
                persona.appendChild(h5);
                persona.appendChild(boton);
            }


        }
        var conjunto = document.querySelector("#conjunto");
        conjunto.appendChild(miembros);
    }

    

}

function capturar(boton) {
    var siguiendo = JSON.parse(localStorage.getItem('siguiendo'));

    if (!siguiendo) {
        siguiendo = [];
    }

    var yo = getGET().var2;
    var persona = boton.id;

    if (siguiendo.length == 0) {
        var seguir = {
            yo,
            persona
        };
        siguiendo.push(seguir);
        localStorage.setItem('siguiendo', JSON.stringify(siguiendo));
        location.href = "buscar.html?var1=" + getGET().var1 + "&var2=" + getGET().var2 + "&";

    } else {
        var seguir = {
            yo,
            persona
        };
        siguiendo.push(seguir);
        localStorage.setItem('siguiendo', JSON.stringify(siguiendo));
        location.href = "buscar.html?var1=" + getGET().var1 + "&var2=" + getGET().var2 + "&";
    }

}

function perfil(correo) {

    objeto = correo.className;
    location.href = "perfil.html?var1=" + getGET().var1 + "&var2=" + getGET().var2 + "&var3=" + objeto + "&";
}


window.addEventListener("load", iniciar, false);
