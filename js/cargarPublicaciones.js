publicaciones = JSON.parse(localStorage.getItem('publicaciones'));

if (!publicaciones) {
    publicaciones = [];
}
usuarios = JSON.parse(localStorage.getItem('usuarios'));

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
    datos = getGET();
    siguiendo = JSON.parse(localStorage.getItem('siguiendo'));

if (!siguiendo) {
    siguiendo = [];
}
    //contenedor Cuerpo Info 
    var cuerpoInfo = document.createElement("div");
    var atributo = document.createAttribute("id");
    atributo.value = "cuerpoInfo";
    cuerpoInfo.setAttributeNode(atributo);
    // var index=0;

    var array = [];
    var contador = 0;
    for (i = 0; i < publicaciones.length; i++) {
        for (j = 0; j < siguiendo.length; j++) {
            if (siguiendo[j].yo == datos.var2 &&
                siguiendo[j].persona == publicaciones[i].correo
            ) {
                array.push(publicaciones[i]);
            }
        }
    }

    for (i = 0; i < publicaciones.length; i++) {
        if (datos.var2 == publicaciones[i].correo) {
            array.push(publicaciones[i]);
        }
    }

    array = array.sort(function () {
        return Math.random() - 0.5
    });


    if (siguiendo) {

        if (publicaciones) {
            for (i = 0; i < array.length; i++) {
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

                for (k = 0; k < usuarios.length; k++) {
                    if (array[i].correo == usuarios[k].correo) {
                        img.src = usuarios[k].foto;
                        imgPublicado.src = array[i].fotoVideo;
                        break;
                    }
                }
                h3.innerHTML = array[i].nombre;
                h4.innerHTML = array[i].titulo;
                p.innerHTML = array[i].descripcion;
                fotos.appendChild(descripcion);
                fotos.appendChild(publicado);
                cuerpoInfo.appendChild(fotos);


            }

            document.body.appendChild(cuerpoInfo);
        }

    }
   

}



window.addEventListener("load", iniciar, false);
