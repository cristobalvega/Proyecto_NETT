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
		dimensiones.iniciar();
		var r = new Rectangulo(10, 10, 100, 100);
		buclePrincipal.iterar();
	}//iniciarJuego
};
