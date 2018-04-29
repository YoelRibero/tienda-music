

//------------------Ventana Modal Registro-------------------//


	var btnIngresa = document.getElementById('btn-ing');

	btnIngresa.addEventListener('click', guardarIngreso); 

	function guardarIngreso(){

		var nombre = document.getElementById('name').value;
		var mail = document.getElementById('email').value;

		localStorage.setItem("Nombre", nombre);
		localStorage.setItem("E-mail", mail);

		if (nombre && mail != undefined) {

			var buttonIng = document.getElementById('button-ing').innerHTML = nombre;

			var alert = document.getElementById('alert').style.display = "block";

			var nombreInput = document.getElementById('nombre-input').style.display = "none";

			var mailInput = document.getElementById('mail-input').style.display = "none";

			btnIngresa.style.display = "none";

		} else if (nombre || mail == '') {

			var alertFalse = document.getElementById('alert-false').style.display = "block";

			nombreInput.style.display = "block";

			mailInput.style.display = "block";
		}

	}


//--------------Formulario de Contacto--------------//

var btnContacto = document.getElementById('btn-contacto');

btnContacto.addEventListener('click', function(){

	var nombreContacto = document.getElementById('name-contacto').value;
	var mailContacto = document.getElementById('email-contacto').value;

	localStorage.setItem("Nombre", nombreContacto);
	localStorage.setItem("E-mail", mailContacto);

	if (nombreContacto && mailContacto != undefined) {

		var seccionOculta = document.getElementById('section-4');

		var tituloContacto = document.getElementById('tit-con');

		var parrafoContacto = document.getElementById('p-con');

		var graciasContacto = document.getElementById('contacto');

		seccionOculta.style.display = 'none';

		parrafoContacto.style.display = 'none';

		tituloContacto.style.display = 'none';

		graciasContacto.style.display = 'block';

		graciasContacto.innerHTML = "Muchas gracias por conctactarte con nosotros " + nombreContacto + ", a la brevedad nos comunicaremos contigo"
	}
});

//--------- Cambio color Menú cuando hago scroll ----------//

//$(window).scroll(function() {
       
//        if ($("#menu").offset().top > 670) {
//            $("#menu").addClass("bg-menu");

//        } else {
//            $("#menu").removeClass("bg-menu");
//        }
//});





