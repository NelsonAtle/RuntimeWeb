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
    siguiendo = JSON.parse(localStorage.getItem('siguiendo'));

if (!siguiendo) {
    siguiendo = [];
}
    var array =[];
    //contenedor miembros
    var miembros = document.createElement("div");
    var atributo = document.createAttribute("id");
    atributo.value = "miembros";
    miembros.setAttributeNode(atributo);
    if (usuarios) {


        for (i = 0; i < siguiendo.length; i++) {
            for (j = 0; j < usuarios.length; j++) {
                if (siguiendo[i].yo ==usuarios[j].correo  && siguiendo[i].persona == getGET().var2 ) {
                    array.push(usuarios[j]);
                    break;
                }
            }
        }



        for (i = 0; i < array.length; i++) {
            




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
                atributo.value = array[i].correo;
                h1.setAttributeNode(atributo);
                //correo de identificacion
                var h5 = document.createElement("h5");
                //boton para seguir a la persona
                var bandera=true;
                 for (l = 0; l < siguiendo.length; l++) {
                    if(siguiendo[l].yo==getGET().var2 && siguiendo[l].persona==array[i].correo){

                        var boton = document.createElement("button");
                        atributo = document.createAttribute("onClick");
                        atributo.value = "eliminar(this);";
                        boton.setAttributeNode(atributo);
                        atributo = document.createAttribute("id");
                        atributo.value = array[i].correo;
                        boton.setAttributeNode(atributo);
                        boton.innerHTML = "Eliminar";
                        bandera =false;
                        break;
                    }else{
                        bandera =true;
                    }
                   
                }

                if(bandera==true){
                        var boton = document.createElement("button");
                        atributo = document.createAttribute("onClick");
                        atributo.value = "capturar(this);";
                        boton.setAttributeNode(atributo);
                        atributo = document.createAttribute("id");
                        atributo.value = array[i].correo;
                        boton.setAttributeNode(atributo);
                        boton.innerHTML = "Seguir";
                }
                foto.src = array[i].foto;
                h1.innerHTML = array[i].nombre + " " + array[i].apellido;
                h5.innerHTML = array[i].correo;




                miembros.appendChild(persona);
                persona.appendChild(fotoPersona);
                fotoPersona.appendChild(foto);
                persona.appendChild(h1);
                persona.appendChild(h5);
                persona.appendChild(boton);
            


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
        location.href = "seguidores.html?var1=" + getGET().var1 + "&var2=" + getGET().var2 + "&";

    } else {
        var seguir = {
            yo,
            persona
        };
        siguiendo.push(seguir);
        localStorage.setItem('siguiendo', JSON.stringify(siguiendo));
        location.href = "seguidores.html?var1=" + getGET().var1 + "&var2=" + getGET().var2 + "&";

    }

}

function eliminar(boton) {
    var siguiendo = JSON.parse(localStorage.getItem('siguiendo'));

    if (!siguiendo) {
        siguiendo = [];
    }

    var yo = getGET().var2;
    var persona = boton.id;

    
        for (var i = 0; i < siguiendo.length; i++) {
            if(siguiendo[i].yo==yo && siguiendo[i].persona==persona){
                siguiendo.splice(i,1);
                localStorage.setItem('siguiendo', JSON.stringify(siguiendo));
                 location.href = "seguidores.html?var1=" + getGET().var1 + "&var2=" + getGET().var2 + "&";
                break;
            }
        }
        

    

}


function perfil(correo) {
  
    objeto = correo.className;
    location.href = "perfil.html?var1=" + getGET().var1 + "&var2=" + getGET().var2 + "&var3=" + objeto+"&";
}


window.addEventListener("load", iniciar, false);
