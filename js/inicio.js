document.addEventListener(
	'DOMContentLoaded',
	 function() {
	 	//console.log("Si funcioná Javascript ");
	 	//alert("Si funcioná Javascript");
		inicio.iniciarJuego();
	 },
	 false
 );
// DOM = Docuemnt Object Model

var inicio = {
	iniciarJuego: function() {
		console.log("Juego Inciado");
		teclado.iniciar();
		dimensiones.iniciar();
		inicio.recargarTiles();
		buclePrincipal.iterar();
	}//iniciarJuego
	recargarTiles: function(){
		document.getElementById("juego").innerHTML = "";
		for (var  y = 0; y < dimensiones.obtenerTilesVerticales(); y++){
			for(var x = 0; x < dimensiones.obtenerTilesHorizontales(); x++){
				var r = new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles);
			}
		}
	}
};
