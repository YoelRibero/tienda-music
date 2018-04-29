
//---------Catálogo de Productos-------------//

(function(){

	function $(selector){
		return document.querySelector(selector);
	}

	function Catalogo(){

			this.instrumentosCuerda = [{id: 01, nombre: "Guitarra Acústica", imagen: "guitarra.jpg"},
							 		   {id: 02, nombre: "Guitarra Electrica", imagen: "guitarra-electrica.jpg"},
							 		   {id: 03, nombre: "Guitarra Electrica 2", imagen: "guitarra-electrica-2.jpg"},
							 		   {id: 04, nombre: "Violín", imagen: "violin.jpg"},
							 		   {id: 05, nombre: "Bajo", imagen: "bajo.jpg"},
							 		   {id: 06, nombre: "Contra-Bajo", imagen: "contrabajo.jpg"}];

			this.instrumentosPercusion = [{id: 07, nombre: "Batería Electrónica", imagen: "bateria.jpg"},
							 		   	  {id: 08, nombre: "Bongó", imagen: "bongo.jpg"},
							 		   	  {id: 09, nombre: "Redoblante Pearl", imagen: "redoblante.jpg"},
							 		   	  {id: 10, nombre: "Güiro", imagen: "guiro.jpg"},
							 		   	  {id: 11, nombre: "Timbales Pearl", imagen: "timbal.jpg"},
							 		   	  {id: 12, nombre: "Platillos Charleston", imagen: "platillos.jpg"}];

			this.instrumentosViento = [{id: 13, nombre: "Trompeta", imagen: "trompeta.jpg"},
							 		   {id: 14, nombre: "Saxofón", imagen: "saxofon.jpg"},
							 		   {id: 15, nombre: "Flauta", imagen: "flauta.jpg"},
							 		   {id: 16, nombre: "Trombón", imagen: "trombon.jpg"},
							 		   {id: 17, nombre: "Acordeón", imagen: "acordeon.jpg"},
							 		   {id: 18, nombre: "Armónica", imagen: "armonica.jpg"}];

			this.accesorios = [{id: 19, nombre: "Parche Remo 13'", imagen: "remo-blanco.jpg"},
							   {id: 20, nombre: "Parche Remo 20'", imagen: "remo-transparente.jpg"},
							   {id: 21, nombre: "Parche Remo 22'", imagen: "remo-negro.jpg"},
							   {id: 22, nombre: "Atril para Partitura", imagen: "atril-partitura.jpg"},
							   {id: 23, nombre: "Pedal Bombo", imagen: "pedal.jpg"},
							   {id: 24, nombre: "Palos A5", imagen: "palos.jpg"}];

		this.constructor = function(){

			if (!localStorage.getItem("catalogo")){
				localStorage.setItem('catalogo', '[]');
			}

		}

		this.getCarrito = JSON.parse(localStorage.getItem("catalogo"));

		this.agregarItem = function(item){

			for(i of this.instrumentosCuerda){
				if(i.id === item){
					var registro = i;
				}
			}
			if(!registro){
				return
			}

			for(i of this.getCarrito){
				if(i.id === item){
					i.cantidad++;
					console.log(getCarrito);
					localStorage.setItem("catalogo", JSON.stringify(this.getCarrito));
					return
				}
			}

			registro.cantidad = 1;

			this.getCarrito.push(registro);
			console.log(this.getCarrito);

			localStorage.setItem("catalogo", JSON.stringify(this.getCarrito));

		}
	}

	function Catalogo_View(){

		this.renderCatalogo = function(){

			var btnCuerda = document.getElementById('btn-cuerda');

			btnCuerda.addEventListener('click', function(){

				var template = ``		
				for (var i in catalogo.instrumentosCuerda) {

					template += `
					
					<div class="card mr-4 mb-4" style="width: 13rem;">
	        	      <img class="card-img-top scrollflow -slide-top -opacity" src="img/productos/${catalogo.instrumentosCuerda[i].imagen}" alt="Card image cap">
	        	      <div class="card-body">
	        	        <h6 class="card-title">${catalogo.instrumentosCuerda[i].nombre}</h6>
	        	        <a href="#" class="btn btn-primary" id="addProducto" data-producto="${catalogo.instrumentosCuerda[i].id}">Agregar al Carrito</a>
	        	      </div>
	        	    </div>

					`;
					
					document.getElementById('contenedor-productos').innerHTML = template;
				}

			});

			var btnPercusion = document.getElementById('btn-percusion');

			btnPercusion.addEventListener('click', function(){

				var template = ``		
				for (var i in catalogo.instrumentosPercusion) {

					template += `
					
					<div class="card mr-4 mb-4" style="width: 13rem;">
	        	      <img class="card-img-top scrollflow -slide-top -opacity" src="img/productos/${catalogo.instrumentosPercusion[i].imagen}" alt="Card image cap">
	        	      <div class="card-body">
	        	        <h6 class="card-title">${catalogo.instrumentosPercusion[i].nombre}</h6>
	        	        <a href="#" class="btn btn-primary" id="addProducto" data-producto="${catalogo.instrumentosPercusion[i].id}">Agregar al Carrito</a>
	        	      </div>
	        	    </div>

					`;
					
					document.getElementById('contenedor-productos').innerHTML = template;
				}

			});

			var btnViento = document.getElementById('btn-viento');

			btnViento.addEventListener('click', function(){

				var template = ``		
				for (var i in catalogo.instrumentosViento) {

					template += `
					
					<div class="card mr-4 mb-4" style="width: 13rem;">
	        	      <img class="card-img-top scrollflow -slide-top -opacity" src="img/productos/${catalogo.instrumentosViento[i].imagen}" alt="Card image cap">
	        	      <div class="card-body">
	        	        <h6 class="card-title">${catalogo.instrumentosViento[i].nombre}</h6>
	        	        <a href="#" class="btn btn-primary" id="addProducto" data-producto="${catalogo.instrumentosViento[i].id}">Agregar al Carrito</a>
	        	      </div>
	        	    </div>

					`;
					
					document.getElementById('contenedor-productos').innerHTML = template;
				}

			});

			var btnAccesorios = document.getElementById('btn-accesorios');

			btnAccesorios.addEventListener('click', function(){

				var template = ``		
				for (var i in catalogo.accesorios) {

					template += `
					
					<div class="card mr-4 mb-4" style="width: 13rem;">
	        	      <img class="card-img-top scrollflow -slide-top -opacity" src="img/productos/${catalogo.accesorios[i].imagen}" alt="Card image cap">
	        	      <div class="card-body">
	        	        <h6 class="card-title">${catalogo.accesorios[i].nombre}</h6>
	        	        <a href="#" class="btn btn-primary" id="addProducto" data-producto="${catalogo.accesorios[i].id}">Agregar al Carrito</a>
	        	      </div>
	        	    </div>

					`;
					
					document.getElementById('contenedor-productos').innerHTML = template;
				}

			});
		}

	}

	var catalogo = new Catalogo();

	var catalogo_view = new Catalogo_View();

	

	document.addEventListener('DOMContentLoaded', function(){

		catalogo_view.renderCatalogo();

		catalogo.constructor();

		console.log(catalogo.getCarrito);

	});

	document.getElementById('contenedor-productos').addEventListener('click', function(ev){

		ev.preventDefault();
		if (ev.target.id === "addProducto"){

			var id = ev.target.dataset.producto;

			catalogo.agregarItem(id);
		}

	});

})();


