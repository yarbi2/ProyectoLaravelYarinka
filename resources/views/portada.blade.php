@extends('layouts.app')

@section('content')

  
<link href="{{ asset('plugins\portada\css\style.css') }}" rel="stylesheet">



<div class="pimg1">
    <div class="ptext" id="text1" style="opacity:0.05">
      <span class="border">
        OpenCode s.a.
      </span>
    </div>
  </div>

  <section class="section section-light">
    <h2>Desarrollamos Soluciones</h2>
    <p>
<strong>    Aplicaciones para compañías aseguradoras y colaboradores.
</strong>
Desarrollamos soluciones avanzadas e independientes en el sector asegurador que mejoran su cadena de valor por medio de la automatización, estandarización, interconexión, comunicación y confidencialidad, siempre fomentando la sencillez de manejo.    </p>
  </section>

  <div class="pimg2">
    <div class="ptext">
      <span class="border trans">
        Desde 2019
      </span>
    </div>
  </div>

  <section class="section section-dark">
    <h2>Soluciones Verticales</h2>
    <p>
    Diseñamos aplicaciones que optimizan el proceso de negocio mediante el análisis de procesos.
</p>
  </section>

  <div class="pimg3">
    <div class="ptext">
      <span class="border trans">
Forjando un <strong>Futuro</strong> juntos      </span>
    </div>
  </div>

  <section class="section section-dark">
    <h2>Nuestras Soluciones</h2>
    <p>
    Desarrollamos herramientas que facilitan y optimizan los recursos de las compañías.
</p>
  </section>

  <div class="pimg1">
    <div class="ptext">
      <span class="border">
        Yarinka Tejero
      </span>
    </div>
  </div>

<script>



$(document).ready(function(){

$('#text1').css('transition','opacity 2s');

$('#text1').css('opacity','0.85');







// $("#GetApi").on("click", function () {



//   var url = "/GetApi";

//   $.get(url,  function(data, status){
//     alert("Data: " + data + "\nStatus: " + status);
//   });


// });

  

});

</script>

@endsection

