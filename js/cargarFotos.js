
    
function iniciar(){
getGET();
publicaciones = JSON.parse(localStorage.getItem('publicaciones'));

if (!publicaciones) {
    publicaciones = [];
}

     //contenedor Cuerpo Info 
    var fotos = document.createElement("div");
    var atributo = document.createAttribute("id");
    atributo.value = "fotos";
    fotos.setAttributeNode(atributo);
    if (publicaciones) {

        for (i = 0; i < publicaciones.length; i++) {
            if (publicaciones[i].correo == getGET().var2) {


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
        var contenido = document.querySelector("#conjunto");
        contenido.appendChild(fotos);
    }
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

window.addEventListener("load", iniciar, false);