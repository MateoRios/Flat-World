var main = document.getElementsByTagName('main')[0];
var m = main.querySelector("section:first-child");
var m1 = main.querySelector("section:nth-child(2)");
var m2 = main.querySelector("section:nth-child(3)");
var m3 = main.querySelector("section:nth-child(4)");
var m4 = main.querySelector("section:nth-child(5)");
var sol = document.getElementById('sol');
var paisaje = document.getElementById('paisaje');
var paisaje2 = document.getElementById('paisaje2');
var oculto = true;
var animMont = true;

// ocultamos las montanyas antes de realizar la animacion
if(m!=null && m1!=null && m2!=null && m3!=null && m4!=null){
	m.style.left = '-'+1000+'px';
	m1.style.right = '-'+1000+'px';
	m2.style.left = '-'+1000+'px';
	m3.style.right = '-'+1000+'px';
	m4.style.left = '-'+1000+'px';
	animMont = true;
}else{
	animMont = false;
}

function animacion(){
	
	if(animMont == true){
		// animacion montanyas
		m.style.transition = "all 1s";
		m.style.left = '-'+350+'px';

		m1.style.transition = "all 1.6s";
		m1.style.right = '-'+200+'px';

		m2.style.transition = "all 1.9s";
		m2.style.left = '-'+200+'px';

		m3.style.transition = "all 2.5s";
		m3.style.right = '-'+400+'px';

		m4.style.transition = "all 2.8s";
		m4.style.left = '-'+22+'%';

		// animacion sol
		sol.style.transition = "all 4.5s";
		sol.style.bottom = 50+'px';

		// animacion paisaje
		paisaje.style.transition = "all 6s";
		paisaje.style.bottom = '-'+65+'%';

		paisaje2.style.transition = "all 7s";
		paisaje2.style.bottom = '-'+65+'%';

		if(window.innerHeight >= 875){

			m2.style.bottom = "10%";
			m3.style.bottom = "20%";
			m4.style.bottom = "25%";

			sol.style.transition = "all 4.5s";
			sol.style.bottom = 15+'%';
		}

		if(window.innerWidth >= 1550){

			m3.style.transition = "all 3s";
			m3.style.right = '-'+15+'%';

			m4.style.transition = "all 3.8s";
			m4.style.left = '-'+13+'%';
		}
	}
}

// para cuando se cambia el tamanyo de la pantalla
function resize(){
	
	if(window.innerHeight >= 875){

		m2.style.bottom = "10%";
		m3.style.bottom = "20%";
		m4.style.bottom = "25%";

		sol.style.bottom = 15+'%';
	}else{

		m2.style.bottom = "0%";
		m3.style.bottom = "10%";
		m4.style.bottom = "12%";

		sol.style.bottom = 5+'%';
	}

	if(window.innerWidth >= 1550){

		m3.style.right = "-15%";
		m4.style.left = "-13%";
	}else{

		m3.style.right = "-25%";
		m4.style.left = "-23%";
	}
}

// funcion para abrir el menu
function abreMenu(){

	var menu = document.getElementById('menu');
	var boton = document.getElementById('botonMenu');

	if(menu != null && boton != null){
		if(oculto == true){
			menu.style.left = 0+'px';
			boton.style.left = 135+'px';
			boton.className = 'fa fa-times';
			oculto = false;
		}else{
			menu.style.left = -135+'px';
			boton.style.left = 0+'px';
			boton.className = 'fa fa-bars';
			oculto = true;
		}
	}
}

//**************************************************** FUNCIONES PLAYA
var orilla = document.getElementById('orilla');
var oceano = document.getElementById('oceano');
var monti = document.getElementById('monticuloIzq');
var monti2 = document.getElementById('monticuloDer');
var tumbona = document.getElementById('tumbona');

function initPlaya(){

	if (orilla!=null && oceano!=null && monticuloIzq!=null && monticuloDer!=null && tumbona!=null) {
		orilla.style.bottom = 0;
		oceano.style.bottom = 0;
		monticuloIzq.style.bottom = '-20px';
		monticuloDer.style.bottom = '-20px';
		tumbona.style.bottom = '25%';
	}
}