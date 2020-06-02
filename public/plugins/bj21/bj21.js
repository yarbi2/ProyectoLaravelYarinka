/* num1 es el total de puntos del jugador*/
/* num2 es el total de puntos de la Banca*/
var num1=0, num2=0;

/* ases1 es el total de Ases que tiene el jugador*/
/* ases2 es el total de Ases que tiene la Banca*/
var ases1=0, ases2=0;/*IMPORTANTE!!  APLICAREMOS UN -10 EN CASO D PASARSE POR CADA AS, YA Q EN PRINCIPIO SUMARIAN +11 FIJOS*/

var repetidas=[''];/*Array que contendra valores de 3 cifras representado cada carta*/
/*ej. 105=5 de corazones  409=9 de picas     413=Q de picas*/

var apuesta=false;/*variable de control para saber si ya hizo la apuesta*/
var comprobar=false;/*variable de control para saber si ya dio a comprobar*/
var reset1=true;/*variable de control para saber si ya dio a reset*/

var apostado=0;/*la variable de lo apostado en un inicio 0*/

var rep=0;/*contador para bucle cartas()*/

var e=false,f=false,g=false,h=false;

	/*IMPORTANTE!!*/
/*Funcion llamada mas adelante, para Dar la Vuelta  ala carta y crear todos los datos al azar*/
/*recibe como parametro un caracter, que coincidira con el ID de una etiqueta de las 8 cartas*/
function carta(pos){
	var num,sali;
	var seguir;
	document.getElementById(pos).style.background = "radial-gradient( #a3a3a3 20%, white 60%)";/*fondo de la carta ya girada*/
	document.getElementById(pos).style.boxShadow = "inset 0px 0px 67px -24px rgba(0,0,0,0.75)";/*Sombra interna que rodea el Palo central*/


	/*IMPORTANTE!!*/
	do{/*PARA QUE LAS CARTAS NO SE REPITAN, lleva la cuenta de las cartas que salieron en el ARRAY REPETIDAs[]***/
		num=Math.floor(Math.random()*13+1), palo=Math.floor(Math.random()*4+1); /*3 = Math.floor(3.95)*/  /*alert(a); alert(acolor);*/
		sali=num+(palo*100);
		seguir=false;
		for(var i=0;i<(repetidas.length-1);i++){
			if(sali==repetidas[i]){
				seguir=true;
				alert("Carta rep remplazada: "+sali);
			}
		}

	}while(seguir)


	repetidas[rep]=sali;/*lleva la cuenta de las cartas que salieron en el ARRAY REPETIDAs[]***/

	rep=rep+1;	/*Nos desplazamos a la proxima posicion del ARRAY para el siguiente uso*/

	var ases=0;/*Contador de Ases que salieron */
	var aux=num;
	var aux1=num;
	switch(num){/*Los valores 11 12 y 13, los cambia a J, Q y K respectivamente, ppara introducirlos asi en la etiqueta mas tarde*/
		case 11:/*van de 1>13*/
			aux1=10;/*Se refiere al valor Real de la Carta*/
			aux='J';
			break;

		case 12:
			aux1=10;
			aux='Q';

			break;

		case 13:
			aux='K';
			aux1=10;

			break;

		case 1:
			aux='A';
			aux1=11;	/*IMPORTANTE!!*/  /*El valor real del As variara en funcion de si nos hemos pasado de 21 q pasara a valer 1*/
			ases=1;							/*y de no pasarse valdra 11*/

			break;	
		default:
	}

	/*IMPORTANTE!!*/
	if((pos=='e'||pos=='f')||(pos=='g'||pos=='h')){/*Jugador*/
		num1=num1+aux1;/*lleva la cuenta de la Puntuacion total*/
		ases1=ases1+ases;/*lleva la cuenta del numero total de Ases, ya que podemos tener mas de uno y que varios pasen a valer 1*/
	/*	alert("ases1: "+ases1);*/
	}
	if((pos=='a'||pos=='b')||(pos=='c'||pos=='d')){/*Crupier*/
		num2=num2+aux1;/*lleva la cuenta de la Puntuacion total*/
		ases2=ases2+ases;/*lleva la cuenta del numero total de Ases*/
	/*	alert("ases2: "+ases2);*/
	}

	/*Misma carta*/
	document.getElementById(pos+"int").innerHTML = ""+aux;/*Numero de arriba: Se introduce el numero o caracter referente al valor de la carta*/
	document.getElementById(pos+"ext1").innerHTML = ""+aux;/*Numero del centro: Se introduce el numero o caracter referente al valor de la carta*/
	document.getElementById(pos+"ext2").innerHTML = ""+aux;/*Numero de abajo: Se introduce el numero o caracter referente al valor de la carta*/


	/*IMPORTANTE!!*/
	switch(palo){/*En funcion del Palo Elige un Color y una FORMA HECHA POR CSS POLYGON CLIP-PATH, para introducirla en la etiqueta*/
		case 1:
			document.getElementById(pos+"int").classList.add("corazon");
			document.getElementById(pos+"ext1").classList.add("rojo");
			document.getElementById(pos+"ext2").classList.add("rojo");
			break;

		case 2:
			document.getElementById(pos+"int").classList.add("diamante");
			document.getElementById(pos+"ext1").classList.add("rojo");
			document.getElementById(pos+"ext2").classList.add("rojo");
			break;

		case 3:
			document.getElementById(pos+"int").classList.add("trebol");
			document.getElementById(pos+"ext1").classList.add("negro");
			document.getElementById(pos+"ext2").classList.add("negro");			
			break;

		case 4:
			document.getElementById(pos+"int").classList.add("pica");
			document.getElementById(pos+"ext1").classList.add("negro");
			document.getElementById(pos+"ext2").classList.add("negro");		
			break;

		default:
			alert("Error en switch random");
	}
}




function x1(){/*Primera Carta del Crupier*/

	carta('a');	
}


function y1(){/*Segunda Carta del Crupier*/
	carta('b');
	document.getElementById("c").style.display = "block";

	}


function z1(){/*Tercera Carta del Crupier*/
	carta('c');
	document.getElementById("d").style.display = "block";

}


function t1(){/*Cuarta Carta del Crupier*/

	carta('d');

}

function x2(){/*Primera Carta del Jugador*/
	if(apuesta==true && e==false){
		e=true;
		carta('e');
	}
}
function y2(){/*Segunda Carta del Jugador*/
	if(apuesta==true && f==false){
		f=true;
		document.getElementById("g").style.display = "block";
		carta('f');
	}
}

function z2(){/*Tercera Carta del Jugador*/
	if(apuesta==true && g==false){
	g=true;
	carta('g');
	document.getElementById("h").style.display = "block";

	}
}

function t2(){/*Cuarta Carta del Jugador*/
	if(apuesta==true && h==false){
		h=true;
		carta('h');
	}
}



var arr=0,abj=0;/*variables de control, que controlan si se ha llegado al limite maximo y minimo de la apuesta*/

var cartera=100;/*Dinero inicial en cartera*/

/*IMPORTANTE!!*/
function reset(){/*Funcion llamada mas adelante para Actualizar las rotacion del GRAFICO CSS Y SUS PSEUDOELEMENTOS  */
	if(Math.floor((i/cartera))>=1){
		document.getElementById("vel").style.fontSize = "0.5em";

		document.getElementById("vel").innerHTML = 'ALL-IN';

		document.documentElement.style.setProperty('--rotaciona', '180deg');
		document.documentElement.style.setProperty('--rotacionb', '-180deg');

		i=Math.floor(cartera);
		arr=1;
	} else {
				document.getElementById("vel").style.fontSize = "0.8em";

		arr=0;
	}
	if(i<=0){
		document.getElementById("vel").innerHTML = '0 $';
		i=0;
		abj=1;
	} else {
		abj=0;
	}
}



var i=0;
function subir1(){/*Boton para subir la apuesta en +1$*/
		
	if(arr==0){
		i=i+1; 
		/*IMPORTANTE!!*//*IMPORTANTE!!*//*IMPORTANTE!!*/
		/*(Apuesta/Cartera)*180= de 0 a 180 en proporcion a la relacion (Apuesta/Cartera)*/
		var aux1=((i/cartera)*180)+'deg', aux2=((-i/cartera)*180)+'deg' ;/*MUYYYY IMPORTANTE!!*//*la rotacion sera proporcional a la Apuesta/DineroTotal*/
		document.documentElement.style.setProperty('--rotaciona', aux1);
		document.documentElement.style.setProperty('--rotacionb', aux2);
		document.getElementById("vel").innerHTML = i+' $';/*Añadimos el numero a la apuesta*/
	}
		reset();/*Actualiza cartas de tern que hacerlo*/
	
}
function subir3(){/*Boton para subir la apuesta en +3$*/
		
	if(arr==0){
		i=i+3; 
		/*IMPORTANTE!!*//*IMPORTANTE!!*//*IMPORTANTE!!*/
		/*(Apuesta/Cartera)*180= de 0 a 180 en proporcion a la relacion (Apuesta/Cartera)*/
		var aux1=((i/cartera)*180)+'deg', aux2=((-i/cartera)*180)+'deg' ;/*IIIIIIIIMMMMMMMMPPPPPPPPPP*/
		document.documentElement.style.setProperty('--rotaciona', aux1);
		document.documentElement.style.setProperty('--rotacionb', aux2);
		document.getElementById("vel").innerHTML = i+' $';/*Añadimos el numero a la apuesta*/
	}
		reset();/*Actualiza cartas de tern que hacerlo*/
}
function subir5(){/*Boton para subir la apuesta en +5$*/
		
			if(arr==0){
				i=i+5; 
			
				var aux1=((i/cartera)*180)+'deg', aux2=((-i/cartera)*180)+'deg' ;
				document.documentElement.style.setProperty('--rotaciona', aux1);
				document.documentElement.style.setProperty('--rotacionb', aux2);
				document.getElementById("vel").innerHTML = i+' $';
			}
			reset();

}
function subir10(){/*Boton para subir la apuesta en +10$*/
		
			if(arr==0){
				i=i+10; 
			
				var aux1=((i/cartera)*180)+'deg', aux2=((-i/cartera)*180)+'deg' ;
				document.documentElement.style.setProperty('--rotaciona', aux1);
				document.documentElement.style.setProperty('--rotacionb', aux2);
				document.getElementById("vel").innerHTML = i+' $';
			}
			reset();
}


function bajar(){/*Boton para bajar la apuesta en -3$*/
		if(abj==0&&(i-3)>1){
			i=i-3;
			var aux1=((i/cartera)*180)+'deg', aux2=((-i/cartera)*180)+'deg' ;
			document.documentElement.style.setProperty('--rotaciona', aux1);
			document.documentElement.style.setProperty('--rotacionb', aux2);
			document.getElementById("vel").innerHTML = i+' $';
		}
		reset();
}


/*IMPORTANTE!!*/
function sepasa1(num){/*Funcion que es llamada esde otra para comprobar si el jugador o Crupier se pasaron*/
	var aux=false;
	do{
		if(num>21){/*MUUUUYY  IMPORTANTE!!*/ /*IMPORTANTE!!*/
			if (ases1>0) {/*MIENTARS AL JUGADOR LE QUEDEN ASES Y SE HAYA PASADO DE 21, ESTOS PASARAN A VALER 1 (en vez de 11), Por cada As*/
				num1=num1-10;/*se descuenta 10 a su puntuacion total*/
				ases1=ases1-1;/*se descuenta 1 al contador de ases en mano*/
			} else {
				return true;
				aux=false;
			}
			
		} else {
			return false;
			aux=true;
		}
	}while(ases1>0 && aux==false)

	

}

function sepasa2(num){
	var aux=false;
	do{
		if(num>21){
			if (ases2>0) {/*MIENTRAS AL Crupier LE QUEDEN ASES Y SE HAYA PASADO DE 21, ESTOS PASARAN A VALER 1 (en vez de 11), Por cada As*/
				num2=num2-10;
				ases2=ases2-1;
			} else {
				return true;
				aux=false;

			}
			
		} else {
			return false;
			aux=true;
		}
	}while(ases2>0 && aux==false)
}

/*IMPORTANTE!!*/	/*IMPORTANTE!!*/	/*IMPORTANTE!!*/
function quiengana(){/*Funcion que Decide Quien ha ganado*/	

	/*Se encarga tambien de actualizar la cartera si se Gana o Pierde*/

	/*Combianciones de Posibilidades en las que uno o otro gana*/
	if(num1>21){
		document.getElementById("mensaje1").innerHTML = "Gana la Banca: "+num2+" a "+num1;
		apostado=0;
	} else if(num2>21){
		cartera=cartera+2*apostado;
		apostado=0;
		document.getElementById("pasta").innerHTML = cartera+" $";
		document.getElementById("mensaje1").innerHTML = "Tu ganas: "+num1+" a "+num2;

	} else if(num1>num2){
		cartera=cartera+2*apostado;
		apostado=0;
		document.getElementById("pasta").innerHTML = cartera+" $";
		document.getElementById("mensaje1").innerHTML = "Tu ganas: "+num1+" a "+num2;

	} else {
		document.getElementById("mensaje1").innerHTML = "Gana la Banca: "+num2+" a "+num1;
		apostado=0;
	}

}


function ok(){/*Bototn para aceptar la apuesta*/

	if (i>0 && reset1==true) {/*si no apuesta nada no juega*/
		apuesta=true;
		document.documentElement.style.setProperty('--rotaciona', '0deg');
		document.documentElement.style.setProperty('--rotacionb', '0deg');
		document.getElementById("vel").innerHTML = '0 $';	
		reset();
		cartera=cartera-i;
		document.getElementById("pasta").innerHTML = parseInt(cartera)+" $";
		apostado=i;
		i=0;

		apuesta=true;
		reset1=false;
		
		/*Se giran las dos cartas del jugador y 1 del crupier, */
		x2();
		y2();
		x1();


		document.getElementById("comprobar").style.display = "block";/*APARECEN LOS BOTONES DE RESETEAR Y COMPROBAR*/
		document.getElementById("resetear").style.display = "block";

		document.getElementById("bajar").style.display = "none";/*DESAPARECEN LOS BOTONES DE APOSTAR Y BAJAR*/
		document.getElementById("ok").style.display = "none";
	}


}

function comprobar1(){/*Boton de pantalla que se encarga de hacer llamadas para decidir quien ha ganado*/



	if(apuesta==true){
		sepasa1(num1);
		y1();

		if(num2<num1 && !(num1>21)){
			z1();
			sepasa2(num2);

		}
		if(num2<num1 && !(num1>21)){
			t1();
			sepasa2(num2);
		}
		document.getElementById("mensaje2").innerHTML = "Tu: "+num1+" Crupier: "+num2;
		quiengana();
		apuesta=false;
		comprobar=true;

	}
}


/*Array de Caracteres que encajan con IDs creado por facilidad*/
var posi=['a','b','c','d','e','f','g','h'];/*posiciones en caracter, que definen el ID de las etiquetas de las cartas*/
function resetear(){
	
	/*Tras Resetear o En un principio ninguna carta estara activada*/
	e=false;
	f=false;
	g=false;
	h=false;
	

	if (comprobar==true) {/*Tuvo que haber hecho click en Comprobar antes para poder ejecutar esta parte de la funcion*/
		
		/*IMPORTANTE!!*/       /*IMPORTANTE!!*/           /*IMPORTANTE!!*/
		/*Resetea el formato de todas las etiquetas de las Cajas*/
		/*devolviendolas al estado original (Boca Abajo)*/

		for(var i=0;i<=7;i++){
			document.getElementById(posi[i]+"int").classList.remove("diamante");/*Elimina las clases del Palo*/
			document.getElementById(posi[i]+"int").classList.remove("pica");
			document.getElementById(posi[i]+"int").classList.remove("trebol");
			document.getElementById(posi[i]+"int").classList.remove("corazon");

			document.getElementById(posi[i]+"int").innerHTML = "";/*Vacia de numeros*/
			document.getElementById(posi[i]+"ext1").innerHTML = "";
			document.getElementById(posi[i]+"ext2").innerHTML = "";


			document.getElementById(posi[i]).style.background = "repeating-linear-gradient(to top left, #f3d03e, #16a085)";/*Introduce los colores del origen*/
			document.getElementById(posi[i]).style.boxShadow = "inset 0px 0px 67px -24px rgba(0,0,0,0.75)";


			/*Hace desaparecer 2 cartas del crupier y 2 del juegador*/
			document.getElementById("c").style.display = "none";
			document.getElementById("d").style.display = "none";

			document.getElementById("g").style.display = "none";
			document.getElementById("h").style.display = "none";

			document.getElementById("comprobar").style.display = "none";
			document.getElementById("resetear").style.display = "none";

			/*y hace aparecer los botones BAJAR y APOSTAR*/
			document.getElementById("bajar").style.display = "block";
			document.getElementById("ok").style.display = "block";


		}

	i=0;/*Devuelve a 0 la progresion de la rotacion del GRAFICO CSS*/

	/*REINICIA LAS VARIABLES RESTANTES*/
	apostado=0;
	num1=0;
	num2=0;
	ases1=0;
	ases2=0;

	comprobar=false;
	reset1=true;

	repetidas=[''];


	/*Y REINICIA LAS ROTACIONES DE GRAFICO CSS*/
	document.documentElement.style.setProperty('--rotaciona', '0deg');
	document.documentElement.style.setProperty('--rotacionb', '0deg');
	document.getElementById("vel").innerHTML = '0 $';
	document.getElementById("vel").style.fontSize = '0.8em';


	
	}

	

}