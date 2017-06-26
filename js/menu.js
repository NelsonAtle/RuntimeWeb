$(document).ready(main);

var contador = 1;//Nos va funcionar para validar si el menu esta activo o no

function main(){
    $('#menu-bar').click(function(){
        $('#divPerfil').toggle(500);
    });
};
