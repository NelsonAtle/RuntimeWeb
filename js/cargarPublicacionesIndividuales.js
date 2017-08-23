var publicaciones = JSON.parse(localStorage.getItem('publicaciones'));

if (!publicaciones) {
    publicaciones = [];
}
var usuarios = JSON.parse(localStorage.getItem('usuarios'));

if (!usuarios) {
    usuarios = [];
}
var siguiendo = JSON.parse(localStorage.getItem('siguiendo'));

if (!siguiendo) {
    siguiendo = [];
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
    //contenedor Cuerpo Info 
    var publications = document.createElement("div");
    var atributo = document.createAttribute("id");
    atributo.value = "publications";
    publications.setAttributeNode(atributo);
    if (publicaciones) {


        for (i = 0; i < publicaciones.length; i++) {
            if (publicaciones[i].correo == getGET().var3) {


                //contenedor Fotos 
                var fotos = document.createElement("div");
                atributo = document.createAttribute("class");
                atributo.value = "fotos";
                fotos.setAttributeNode(atributo);
                //contenedor Descripcion
                var descripcion = document.createElement("div");
                atributo = document.createAttribute("class");
                atributo.value = "descripcion";
                descripcion.setAttributeNode(atributo);
                //contenedor Publicador
                var publicador = document.createElement("div");
                atributo = document.createAttribute("class");
                atributo.value = "publicador";
                publicador.setAttributeNode(atributo);
                //contenedor Foto del Publicante
                var fotoPerfil = document.createElement("div");
                //Imagen de la foto
                var img = document.createElement("img");
                //h3
                var h3 = document.createElement("h3");
                //h4
                var h4 = document.createElement("h4");
                //p
                var p = document.createElement("p");
                //donde se mostrara la imagen
                var publicado = document.createElement("div");
                atributo = document.createAttribute("class");
                atributo2 = document.createAttribute("align");
                atributo.value = "publicado";
                atributo2.value = "center";
                publicado.setAttributeNode(atributo);
                publicado.setAttributeNode(atributo2);
                //Imagen de la publicacion
                var imgPublicado = document.createElement("img");



                publicador.appendChild(fotoPerfil);
                fotoPerfil.appendChild(img);
                publicador.appendChild(h3);
                publicador.appendChild(h4);
                publicador.appendChild(p);
                descripcion.appendChild(publicador);
                publicado.appendChild(imgPublicado);

                for (j = 0; j < usuarios.length; j++) {
                    if (publicaciones[i].correo == usuarios[j].correo) {
                        img.src = usuarios[j].foto;
                        imgPublicado.src = publicaciones[i].fotoVideo;
                        break;
                    }
                }
                h3.innerHTML = publicaciones[i].nombre;
                h4.innerHTML = publicaciones[i].titulo;
                p.innerHTML = publicaciones[i].descripcion;
                fotos.appendChild(descripcion);
                fotos.appendChild(publicado);
                publications.appendChild(fotos);
            }
        }
        var contenido = document.querySelector("#contenidoGrupo");
        contenido.appendChild(publications);
    }

cargarSeguidores();
btnNo6 = document.getElementById("noDisponibles6");
    if (btnNo6) {
        btnNo6.addEventListener("click", ganados, false);
    }
btSiguiendo = document.getElementById("siguiendo");
    if (btSiguiendo) {
        btSiguiendo.addEventListener("click", siguiendo, false);
    }

}

function siguiendo() {
    get = getGET();
    location.href = "seguidos.html?var1=" + get.var1 + "&var2=" + get.var2 + "&";
}
function ganados() {
    alert("Opción no Disponible");
}
function cargarSeguidores() {
    var miembros = document.createElement("div");
    var atributo = document.createAttribute("id");
    atributo.value = "miembros";
    miembros.setAttributeNode(atributo);
    if (usuarios) {


    var array=[];

        for (i = 0; i < siguiendo.length; i++) {
            for (j = 0; j < usuarios.length; j++) {
                if(siguiendo[i].yo==getGET().var3 && 
                   siguiendo[i].persona == usuarios[j].correo){
                    array.push(usuarios[j]);
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
                    

                foto.src = array[i].foto;
                h1.innerHTML = array[i].nombre + " " + array[i].apellido;
                h5.innerHTML = array[i].correo;




                miembros.appendChild(persona);
                persona.appendChild(fotoPersona);
                fotoPersona.appendChild(foto);
                persona.appendChild(h1);
                persona.appendChild(h5);
                
            


        }
        var contenido = document.querySelector("#datos");
        contenido.appendChild(miembros);
    }
cargarFotos();
}

function cargarFotos(){

    //contenedor Cuerpo Fotos
    var fotos = document.createElement("div");
    var atributo = document.createAttribute("id");
    atributo.value = "fotos";
    fotos.setAttributeNode(atributo);
    if (publicaciones) {


        for (i = 0; i < publicaciones.length; i++) {
            if (publicaciones[i].correo == getGET().var3) {


                //contenedor Fotos 
                var imagenes = document.createElement("div");
                atributo = document.createAttribute("align");
                atributo.value = "center";
                imagenes.setAttributeNode(atributo);
                //contenedor img
                var img = document.createElement("img");
               
                fotos.appendChild(imagenes);
                imagenes.appendChild(img);
                img.src = publicaciones[i].fotoVideo;
               // contenido.appendChild(fotos);
            }
        }
        var contenido = document.querySelector("#datos");
        contenido.appendChild(fotos);
    }
}

window.addEventListener("load", iniciar, false);
