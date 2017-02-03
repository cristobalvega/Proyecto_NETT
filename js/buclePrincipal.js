//Namespace = Espacio de nombres
//main loop = Bucle principal
//aps = Actualizaciones por segundo
//fps = Frames ó Cuadros por segundo
//callback

var buclePrincipal = {
		idEjecucion: null,
		ultimoRegistro: 0,
		aps: 0,
		fps: 0,
		iterar: function(registroTemporal){
			buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar); //<---RECURSIVO

			//registroTemporal es un valor, el tiempo / milísegundos

			buclePrincipal.actualizar(registroTemporal); //<-A registroTemporal lo llama el requestAnimationFrame
			buclePrincipal.dibujar(registroTemporal);
			

			if(registroTemporal - buclePrincipal.ultimoRegistro > 999){
				buclePrincipal.ultimoRegistro = registroTemporal;
				console.log("APS: " + buclePrincipal.aps + " | FPS : " buclePrincipal.fps);
				buclePrincipal.aps=0;
				buclePrincipal.fps=0;
			}//If
		},//Iterar
		detener: function(){

		},//Detener
		actualizar: function(registroTemporal){
			buclePrincipal.aps++;
		},//Actualizar
		dibujar: function(registroTemporal){
			buclePrincipal.fps++;
		}//Dibujar
};
