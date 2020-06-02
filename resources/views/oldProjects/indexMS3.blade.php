<!DOCTYPE html>
<html  xml:lang="es" lang"es-es">
	<head>
		<title>Index - MS3</title>
<!-- 		<link rel="stylesheet" href="index.css">
		<script src="index.js"></script>
 -->

		<link href="{{ asset('plugins\indexMS3\indexMS3.css') }}" rel="stylesheet">
		<script src="{{ asset('plugins\indexMS3\indexMS3.js') }}"></script>






	</head>
	<body onscroll="rueda()"><!--funcion que se ejecuta al final de la carga de la pagina-->
		<audio controls="controls" id="musica"><!--Reproductor de audio html5, este se hace visible al pulsar el guion derecho del tiitulo-->
			<source src="{{ asset('plugins\indexMS3\rsc\tld.mp3') }}"  type="audio/mpeg" />
		</audio>

		<div id="yari"><!--se encuentra en display: none, tras pulsar 20 veces el primer asterisco del titulo aparecera mediante js, implementando display: block-->
            <span><img src="{{ asset('plugins\indexMS3\rsc\ave2.png' ) }}"></div>
        </div>

        <!--Section vacio utilizado ppara facilitar la maquetacion base, y meter la foto de fondo-->
		<section id="contenedor1" style="background-image: url('{{asset("plugins/indexMS3/rsc/arbol.jpeg")}}');">
		</section>

		<button id="logo" onclick="heatweb()" style="background-image: url('{{asset("plugins/indexMS3/rsc/logo.jpg")}}');"></button>
		<p id="cookies">La Pol&iacute;tica de Cookies y Tecnolog&iacute;as Similares de ms-tr3s explica los distintos tipos de cookies y otras tecnolog&iacute;as similares que podr&iacute;an utilizarse en la p&aacute;gina web y sus ventajas respectivas. Consulte el apartado &laquo;C&oacute;mo gestionar las Cookies y otras tecnolog&iacute;as similares&raquo; de la&nbsp;Pol&iacute;tica&nbsp;para obtener m&aacute;s informaci&oacute;n. Mediante la utilizaci&oacute;n de la p&aacute;gina web, los usuarios aceptan el uso de Cookies y otras tecnolog&iacute;as similares, a menos que las desactiven.</p>

		<!--Boton de desplegar hacia ARRIBA-->
		<button id="arriba" onclick="arriba()" style="background-image: url('{{asset("plugins/indexMS3/rsc/aaa.png")}}');"></button>
		<p>{{$name}}</p>

		<!--TITULO DE LA EMPRESA INTERACTIVO, cada caracter tiene una funcion distinta a descubrir-->
		<div id="tit">
			<h1 id="titulo">
			<span id="treset" onclick="treset()">*</span><span id="fondo1" onclick="fondo1()">-</span> <span id="t1" onclick="t1()">E</span><span id="t2" onclick="t2()">M</span><span id="t3" onclick="t3()">E</span> <span id="tmed1" onclick="tmed1()">-</span> <span id="t4" onclick="t4()">E</span><span id="t5" onclick="t5()">S</span><span id="t6" onclick="t6()">E</span> <span id="tmed2" onclick="tmed2()">-</span> <span id="t7" onclick="t7()">T</span><span id="t8" onclick="t8()">R</span><span id="t9" onclick="t9()">3</span><span id="t10" onclick="t10()">S</span> <span id="fondo2" onclick="fondo2()">-</span><span id="trandom" onclick="trandom()">*</span>
			</h1>
		</div>
		<div id="pruebe"><span>Pista: Pruebe a tocar todo lo que vea.. {{$name}}</span></div>
		

		<!--Boton de desplegar hacia abajo-->
		<section id="body">
			<div id='desplegar' onclick="abajo()" >
				<p id="tituloDesp">Desplegar</p>
				<p id="flecha"><</p>
			</div>
		</section>


		<!--MENU DE OPCIONES-->
		<section id="vacio">

			<div id="header">
			
				<div class="contenedor" id="uno" onclick="index()">
					<div>
						<p class="texto">EME-ESE-TR3S</p>
					</div>	
				</div>

				<div class="contenedor" id="dos" onclick='location.href="{{ url('/home') }}"'>
					<p class="texto">Registro</p>
				</div>

				<div class="contenedor" id="tres" onclick="	window.open('{{ url("/bj21") }}')">
					<p class="texto">21 - B.J.</p>
				</div>
				<div class="contenedor" id="cuatro" onclick='location.href="{{ url('/home') }}"'>
					<p class="texto">Catalogo</p>
				</div>

				<div class="contenedor" id="cinco" onclick='location.href="{{ url('/home') }}"'>
					<p class="texto">Inicio de Sesión</p>
				</div>

				<div class="contenedor" id="seis" onclick='location.href="{{ url('/home') }}"'>
					<p class="texto">Contacto</p>
				</div>

			</div >
		</section>
	</body>
</html>