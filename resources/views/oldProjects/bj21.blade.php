<!DOCTYPE HTML>
<html lang="es">
    <head>
       

        <link href="{{ asset('plugins\bj21\bj21.css') }}" rel="stylesheet">
        <script src="{{ asset('plugins\bj21\bj21.js') }}"></script>


        <title>21 Black Jack</title>
    </head>
    <body>
         <!--IMPORTANTE!! NO SE UTILIZO NINGUNA IMAGEN PARA HACER ESTE JUEGO, TODO FUE LOGRADO MEDIANTE CODIGO  IMPORTANTE!!-->
        
        <div id="todo">
            <div  id="centro"><!--IMPORTANTE!!   CARTAS DEL CRUPIER-->
                <div class="fondocarta"  id="a"><!--Fondo de la carta ya sea girada o de cara-->
                    <span id="aext1"></span><!--Numero de la parte superior-->
                    <div id="aint" class="numint"></div><!--Numero en color blanco y Palo-->
                    <span id="aext2" class="drc"></span><!--Numero de la parte inferior-->
                </div>

                <!--Aplica igual a las siguiente-->
                <div class="fondocarta"  id="b">
                    <span id="bext1"></span>
                    <div id="bint" class="numint"></div>
                    <span id="bext2" class="drc"></span>
                </div>

                <div class="fondocarta"  id="c">
                    <span id="cext1"></span>
                    <div id="cint" class="numint"></div>
                    <span id="cext2" class="drc"></span>
                </div>

                <div class="fondocarta"  id="d">
                    <span id="dext1"></span>
                    <div id="dint" class="numint"></div>
                    <span id="dext2" class="drc"></span>
                </div>
             </div>  

             <h1>Yarbi2 - 21BlackJack</h1> <!--Texto grabado en la Mesa de juego-->

            <div  id="centro"><!--IMPORTANTE!!   TUS CARTAS-->
                <!--Mantiene todas las caracteristicas de las anteiores cartas respecto a css, pero añade el evento onclick con funcion enlazada, mas otras muchas diferencias en js-->
                <div class="fondocarta" onclick="x2()" id="e"> <!--funcion x2()  Simplificando mucho Gira la carta-->
                    <span id="eext1"></span>
                    <div id="eint" class="numint"></div>
                    <span id="eext2" class="drc"></span>
                </div>

                 <!--Aplica igual a las siguiente-->
                <div class="fondocarta" onclick="y2()" id="f">
                    <span id="fext1"></span>
                    <div id="fint" class="numint"></div>
                    <span id="fext2" class="drc"></span>
                </div>

                <div class="fondocarta" onclick="z2()" id="g">
                    <span id="gext1"></span>
                    <div id="gint" class="numint"></div>
                    <span id="gext2" class="drc"></span>
                </div>

                <div class="fondocarta" onclick="t2()" id="h">
                    <span id="hext1"></span>
                    <div id="hint" class="numint"></div>
                    <span id="hext2" class="drc"></span>
                </div>

            </div>


             <!-------BOTONES------->
              <!--etiqueta q contiene los ditintos botones, graficos del juego o mensajes-->
            <div id="apuesta"> <!--Aunque el id comparta nombre con el contenido del siguiente div, no guarda relacion-->

                <div id="caja"  >Apuesta <!--IMPORTANTE!! GRAFICO ANIMADO DIBUJADO UNICAMENTE CON CSS .mirar css-->
                    <!--UTILIZANDO SEUDOELEMENTOS AFTER Y BEFORE -->
                    <div id="progreso"></div>
                </div>

                <p id="vel">0 $</p><!--Muestra la apuesta que esta en curso -->

                <div id="botones"><!--Los botones Propios del Juego -->
                    <div id="fichas"><!-- centra y coloca las fichas unicamente -->
                        <div id="subir" class="boton"><button onclick="subir1()" id="botonsubir1" class="botonint">1 $</button>
                        </div><!-- boton con forma de ficha de 1$, que aumenta la apuesta en +1$ -->
                        <div id="subir" class="boton"><button onclick="subir3()" id="botonsubir3" class="botonint">3 $</button>
                        </div><!-- boton con forma de ficha de 3$, que aumenta la apuesta en +3$ -->
                        <div id="subir" class="boton"><button onclick="subir5()" id="botonsubir5" class="botonint">5 $</button>
                        </div><!-- boton con forma de ficha de 5$, que aumenta la apuesta en +5$ -->
                        <div id="subir" class="boton"><button onclick="subir10()" id="botonsubir10" class="botonint">10 $</button>
                        </div><!-- boton con forma de ficha de 10$, que aumenta la apuesta en +10$ -->
                    </div>


                    <div id="cmd"><!--Los botones Propios del Juego V2 -->
                        <div id="bajar" class="boton"><!-- da formato comun a los botones y los centra -->
                            <button onclick="bajar()" >Bajar</button><!--boton que reduce la apuesta en 3$ -->
                        </div>
                        <div id="ok" class="boton"><!-- da formato comun a los botones y los centra -->
                            <button onclick="ok()" >Apostar</button><!--boton que apuesta el dinero en pantalla -->
                        </div>

                         <div id="comprobar" class="boton"><button onclick="comprobar1()" >Comprobar</button></div><!-- boton que comprueba quien ha ganado-->
                         <div id="resetear" class="boton"><button onclick="resetear()" >Resetear</button></div><!-- boton que limpia la mesa, recoge las cartas -->
                    </div>
                </div>
                <div id="cartera"><!-- caja que contiene la informacion de el dinero que tiene el jugador -->
                    
                    <div>Cartera: &nbsp </div><!-- &nbsp es una tabulacion-->
                    <div id="pasta">100 $</div><!--caja que contiene el numero de $ del que dispone, este se actualiza mediante js-->
                </div>

                <div class="mensaje"><!-- &nbsp es una tabulacion  y esta caja contiene los mensajes de quien gana y quien pierde y con que cartas-->
                    <div id="mensaje1">...</div><!-- el mensaje se actualiza por js-->
                    <div id="mensaje2">...</div><!-- el mensaje se actualiza por js-->
                </div>




                <a href="{{ url('/home') }}">
                   <div id="index" >Index</div><!-- boton para volver al index -->
                </a>
            </div>
        </div>
    </body>
</html>