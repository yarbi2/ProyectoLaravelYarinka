var y=0, prueba=1;/*'Y' variable usada para dar una rotacion HUE al color del fondo en funcion del scroll
					'PRUEBA' variable de control para dar a enteder al programa de que abrimos la web por la parte superior*/

/*EVENTO A LA ESPERA D UN SCROLL, PARA ACTIVAR LA SIGUIENTE FUNCTION RUEDA*/
document.addEventListener("scroll", rueda);

/*FUNCION QUE CONTROLA LOS CAMBIOS GENERADOS AL HACER SCROLL (todos)*/
function rueda() {
	y=y+0.6;/*contador que aumenta por cada scroll*/

	/*innersHeight es igual al heigh total de la pantalla del usuario en px, en el momento de carga*/
	/*window.scrollY es igual al scroll que hemos hecho en el eje Y en pixeles*/
	/*__IMPORTANTE!!!__*/
	if(y<=80 && (window.innerHeight + window.scrollY)>670){/*DEFINE EL SCROLL MINIMO QUE HAY QUE HACER PARA QUE COMIENCE EL CAMBIO DE COLOR EN EL FONDO, Y PONE EN CONDICION EL "Y" MAXIMO QUE PUEDE RECIBIR*/
		document.getElementById("contenedor1").style.filter = "hue-rotate("+y+"deg)";/*CAMBIO DE COLOR HUE en funcion de la variable "Y"*/

		if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-450) {/*DEFINE EL SEGUNDO SCROLL MINIMO QUE HAY QUE HACER*/
			document.getElementById("pruebe").style.opacity = "0";/*PARA QUE COMIENCE A DESAPERECER LA ETIQUETA DE ID "PRUEBE" CUANDO BAJE UN POCO*/
		}
	}


	/*__IMPORTANTE!!!__*/
	/*ABAJO*/
	/*document.body.offsetHeight es igual al total de pixeles de la web*/
	if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight-10) && prueba!=2) {/*RECONOCE CUANDO EL SCROLL LLEGA ABAJO DE LA PAGINA*/
        prueba=2;/*variable de control, para que no permita al if volver a darse, hasta que "prueba" sea =1*/
   
        /*__IMPORTANTE!!!__*/
   		/*mediante las siguientes lineas, queremos eliminar 2 etiquetas con display: none, y hacer que el mismo titulo que se encontraba arriba*/
   		/*baje a la altura de titulo de la parte baja del Index*/
		document.getElementById("desplegar").style.display = "none"; /*el boton de desplegar hacia abajo desaparecera del index*/
		document.getElementById("pruebe").style.display = "none"; /*el texto de 'pruebe a tocar todo lo que ve' hacia abajo desaparecera del index*/
		document.getElementById("titulo").style.marginBottom = "-62.5vh";  /*Baja el titulo, para que adopte la forma de titulo inferior*/


		document.getElementById("contenedor1").style.filter = "hue-rotate(80deg)";/*al llegar abajo en el scroll, define la variacion de color HUE maxima*/
		/*aunque esta fue definida como un maximo de 80, en caso de fallar si el scroll llega hasta abajo siempre colocara la de 80, independientemente de que funcione lo anterior*/
		
		
		document.getElementById("titulo").style.transform = "scale(0.75)"; /*reduce el tamaño del titulo*/
		document.getElementById("titulo").style.background = "rgba(0,0,0,0)";/*elimina el fondo semitransparente del titulo*/
		document.getElementById("titulo").style.textDecoration = "overline #ff4a4a";/*coloca un sobrerayado al titulo*/


		document.getElementById("cookies").style.display = "block";/*hace aparecer las cookies*/
		document.getElementById("arriba").style.display = "block";/*hace aparecer el boton para desplegar hacia arriba*/
	}

	/*__IMPORTANTE!!!__*/
	/*ARRIBA*/
	if (((window.innerHeight + window.scrollY) <=window.innerHeight) && prueba!=1) {/*RECONOCE CUANDO EL SCROLL LLEGA ARRIBA DE LA PAGINA*/
        prueba=1;/*variable de control, para que no permita al if volver a darse, hasta que "prueba" sea =2*/
        var aux=innerHeight*0.23;/*__IMPORTANTE!!!__*//*De este modo consigo sacar un porcentaje de la resolucion total, QUE SERIA IGUAL A : 23VH pero dado en px, para poder aplicar en la siguiente linea de codigo*/
		/*__IMPORTANTE!!!__*/
		document.getElementById("titulo").style.marginTop = aux+"px";/*le reiniciamos el margintop negativo a titulo, para que vuelva a su posicion inicla */
		document.getElementById("desplegar").style.display = "block";/*hacemos reapacerer la caja del boton desplegar hacia abajo*/
		document.getElementById("pruebe").style.display = "block";  /*hacemos reapacerer el mensaje de 'pruebe a tocar todo'*/
		document.getElementById("titulo").style.marginBottom = "0px";/*le reiniciamos el marginbottom a titulo*/
		y=0;/*reiniciamos la variable que controla el cambio de color HUE del fondo*/

		document.getElementById("contenedor1").style.filter = "hue-rotate(0deg)";/*reiniciamos a 0 el cambio de color HUE del fondo*/


		document.getElementById("arriba").style.display = "none";/*hace desaparecer el boton de desplegar arriba el cual estaba fijado a la web "fixed"*/
		document.getElementById("cookies").style.display = "none";/*hace desaparecer las cookies las cuales estaban fijadas a la web "fixed"*/
		document.getElementById("titulo").style.transform = "scale(1)";/*Restaura el tamaño original del tiitulo*/
		document.getElementById("titulo").style.textDecoration = "none";/*Elimina el overline del titulo, sobrerayado*/
		document.getElementById("titulo").style.background = "rgba(0,0,0,0.2)";/*vuelve a poner el fondo semitransparente al titulo*/
		document.getElementById("pruebe").style.opacity = "1";/*vuelve a hacer visible el texto de "pruebe a tocar todo lo que ve"*/
	}
};

/*Desplegar hacia Abajo*/
function abajo(){
	window.scrollTo(0,9999999999999999);/*Baja el scroll en Y hasta el pixel 9999999999999999, dado que no hay tantos, hasta la parte mas baja d la web*/
}

/*Desplegar hacia Arriba*/
function arriba(){
	window.scrollTo(0,0);/*Sube el scroll en Y hasta el pixel 0, arriba del todo*/
}

/*Logo redireccionado a web*/
function heatweb(){
	window.open('https://www.nba.com/heat/home/', '_blank');/*Abrir en NUEVA PESTAÑA*/
}


/*variable que contiene un array con codigos HEX de varios colores*/
var colores = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF',
		  'darkred', 'lightblue'];


var cont=0;/*CONTANDOR DE PULSACIONES EN PRIMER ASTERISCO*/

/*__IMPORTANTE!!!__*/
/*FUNCION DE REINICIO al PULSAR PRIMER ASTERISCO del titulo*/
/*Restaura los colores de los caracteres al original*/
function treset() {
	cont++;
	
	/*for para definir color de letra a los 3 caracteres a los que se les definio un color individualmente*/
    for (var i = 1; i <= 10; i++) {
    	if((i==2 || i==5) || i==9){i++; }
    	var aux="t"+i.toString();/*crea tres Strings t2 t5 y t9, para que getElementById la reciba como parametro d busqueda*/

        document.getElementById(aux).style.color = "lightblue";/*esos tres caracteres cambian de color a lightblue*/
    }


    document.getElementById("t5").style.color = "#980000";/*Reinicio de color de un caracter del titulo*/
	document.getElementById("t2").style.color = "#c52b2b";/*Reinicio de color de un caracter del titulo*/
	document.getElementById("t9").style.color = "#c52b2b";/*Reinicio de color de un caracter del titulo*/

    document.getElementById("treset").style.color = "#f94d4d";/*Reinicio de color de el primer asterisco del titulo*/
	document.getElementById("trandom").style.color = "#f94d4d"; /*Reinicio de color de el ultimo asterisco del titulo*/
	document.getElementById("titulo").style.textDecorationColor = "#f43636";/*Reinicio de color de los elemntos de decoracion del titulo*/

	/*La Avestruz :D*/
	if(cont>20){/*cuando se pulse 20 veces el primer asterisco*/
		alert("La Web intuye que necesita ayuda.\nUn tecnico fue enviado a su PC");/*mensaje de la web*/
		document.getElementById("yari").style.display = "block";/*hace aparecer a la avestruz*/
		document.getElementById("yari").style.animationName = "ave";/*aparece con la animacion de "ave", que la hace aparecer desde el borde derecho de la pantalla, desde el exterior de esta*/
	}
}

/*__IMPORTANTE!!!__*/
/*FUNCION DE RANDOM al PULSAR ULTIMO ASTERISCO del titulo*/
/*Da un color al azar a cada caracter del titulo*/
function trandom(){
	/*for para dar color a TODOS los caracteres del titulo*/
	for (var i = 1; i <= 10; i++) {
	    var aux="t"+i.toString();/*aux="t1"  aux="t2"  aux="t3"  aux="t4" ... aux="t10"*/
	    document.getElementById(aux).style.color = colores[parseInt(Math.random()*52)];/*recibe como parametro de busqueda de ID la anterior vriable AUX
	    Y coge un codigo al azar del Array colores mencionado antes, mediante la funcion Math.random() que saca un numero al azar, y limitando este de 0 a 51*/
    }

    document.getElementById("treset").style.color = colores[parseInt(Math.random()*52)];/*se aplica el color al azar al primer asterisco como que antes, pero individualmente dado quue su id es distinto, y no sigue una logica de la que aprovecharse*/
	document.getElementById("trandom").style.color = colores[parseInt(Math.random()*52)];;/*se aplica el color al azar al ultimo asterisco*/
	document.getElementById("titulo").style.textDecorationColor = colores[parseInt(Math.random()*52)];;/*se aplica el color al azar sobrerayado del titulo EN CASO DE TENERLO*/
}


/*__IMPORTANTE!!!__*/
/*FUNCION DE FONDO ON al PULSAR ULTIMO GUION del titulo*/
/*Activa la animacion de cambio de color UE del fondo*/
function fondo2(){
	document.getElementById("contenedor1").style.animation = "fondo 7s linear "+(Math.random())+"s infinite";/*durara 7segundos en dar los 360º y se repetira infinitamente*/

}

/*__IMPORTANTE!!!__*/
/*FUNCION DE FONDO OFF al PULSAR PRIMER GUION del titulo*/
/*Desactica la animacion de cambio de color UE del fondo*/
function fondo1(){
	document.getElementById("contenedor1").style.animation = "none";/*desactiva la animacion*/
	document.getElementById("contenedor1").style.filter = "hue-rotate(0deg)";/*color de fondo original*/
	
}




var med=0;/*VARIABLE AUXILIAR PARA CONTROLAR EL ESTADOD ENCENDIDO O APAGADO DEL REPRODUCTOR MP3*/

/*__IMPORTANTE!!!__*/
/*FUNCION DE ANIMACION TITULO ON al PULSAR TERCER GUION del titulo*/
/*Activa la animacion "colores" que se aplica a cada letra */
function tmed2(){
	for (var i = 1; i <= 10; i++) {
	    var aux="t"+i.toString();

	    /*__IMPORTANTE!!!__*/
	    /*LA SIGUIENTE VARIABLE, es el DELAY con la que CADA CARACTER COMENZARA LA ANIMACION , haciendola asi DISTINTA PARA CADA CARACTER, aunque compartan la misma animacion*/
	    var aux2=(Math.random()*(-10));/*sin parseInt asi usa los decimalesde double y nunca coincidiran */
	    document.getElementById(aux).style.animation = "colores 10s linear "+aux2+"s infinite" ;/*damos atributo animation a los 10 ids (t1 t2 ..t10) activando la animacion colores que dura 10 segundos, 
	    es lineal (aceleracion=0),se inicia con un delay de -x segundos y dura infinitamente activa*/

    }
    document.getElementById("treset").style.animation = "colores 10s linear "+(Math.random()*(-10))+"s infinite";/*al igual que en el anterior getelementById*/
    document.getElementById("trandom").style.animation = "colores 10s linear "+(Math.random()*(-10))+"s infinite";/*al igual que en el anterior getelementById*/


    /*__IMPORTANTE!!!__*/
    /*hace visible o invisible el reproductor de audio*/
    if(med==0){
    	document.getElementById("musica").style.opacity = "1";
    	med=1;
    } else {
    	document.getElementById("musica").style.opacity = "0";
		med=0;    	
    }
}


/*__IMPORTANTE!!!__*/
/*FUNCION DE ANIMACION TITULO OFF al PULSAR SEGUNDO GUION del titulo*/
/*Desactiva la animacion "colores" que se aplica a cada letra */
function tmed1(){
	for (var i = 1; i <= 10; i++) {
	    var aux="t"+i.toString();
	    document.getElementById(aux).style.animation = "none" ;

    }
    document.getElementById("treset").style.animation = "none";
    document.getElementById("trandom").style.animation = "none";

    document.getElementById("musica").style.opacity = "0";
    med=0;

}



/*__IMPORTANTE!!!__*/
/*----- cambios de color de cada letra individualmente por funcion onclick -----*/

/*Accediendo al Array colores recoge el codigo de un color distinto cada vez que pulsemos*/
/*Este no sera al azar seguira el orden del Array permitiendo que elijan a su gusto los colores mas comodamente*/

var c1=0;/*Todos los caracteres comienzan el primer click con el codigo de la posicion 0 del Array colores*/
function t1(){
	document.getElementById("t1").style.color = colores[c1];/*Se aplica el codigo de color a la letra*/
	c1=c1+1;/*se incrementa en uno, para usar como posicion en el array*/
	if(c1>50){
		c1=0;/*si c1 llego al limite del Array volvera a la primera posicion*/
	}

}

var c2=0;
function t2(){
	document.getElementById("t2").style.color = colores[c2];
	c2=c2+1;
	if(c2>50){
		c2=0;
	}
}

var c3=0;
function t3(){
	document.getElementById("t3").style.color = colores[c3];
	c3=c3+1;
	if(c3>50){
		c3=0;
	}
}

var c4=0;
function t4(){
	document.getElementById("t4").style.color = colores[c4];
	c4=c4+1;
	if(c4>50){
		c4=0;
	}
}

var c5=0;
function t5(){
	document.getElementById("t5").style.color = colores[c5];
	c5=c5+1;
	if(c5>50){
		c5=0;
	}
}

var c6=0;
function t6(){
	document.getElementById("t6").style.color = colores[c6];
	c6=c6+1;
	if(c6>50){
		c6=0;
	}
}

var c7=0;
function t7(){
	document.getElementById("t7").style.color = colores[c7];
	c7=c7+1;
	if(c7>50){
		c7=0;
	}
}

var c8=0;
function t8(){
	document.getElementById("t8").style.color = colores[c8];
	c8=c8+1;
	if(c8>50){
		c8=0;
	}
}
var c9=0;
function t9(){
	document.getElementById("t9").style.color = colores[c9];
	c9=c9+1;
	if(c9>50){
		c9=0;
	}
}
var c10=0;
function t10(){
	document.getElementById("t10").style.color = colores[c10];
	c10=c10+1;
	if(c10>50){
		c10=0;
	}
}


/*__IMPORTANTE!!!__*/
/*funcion para Actualizar la pagina y volver arriba*/
function index(){
	location.reload();/*Actualiza la pagina*/
	window.scrollTo(0,0);
}

/*Funcion que redirige a otra web o carpeta (alternativa a HREF)*/
// function bj(){
// 	window.open('../21bj/21bj.html');/*(alternativa a HREF en html o css)*/
// }