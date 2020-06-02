<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PortadaController extends Controller
{

 

    public function portada()
    {
        Log::info('[PortadaController] portada: ');

        return view('portada');
    }


    public function GetApi()
    {

        Log::info('[PortadaController] Comienza Get API: ');

        try {


            $url = 'http://worldtimeapi.org/api/ip';

          
           
            $client = new Client([
                'headers' => ['Content-Type' => 'application/json']
                ]);




                
            $response = $client->get($url);


            $response = json_decode($response->getBody(), true);
            Log::info('[ApiController] Excepción API-sendRecordData: ',  array($response));

        
            if(!$response){
                Log::info("[ApiController] API-sendRecordData RESPUESTA SERVIDOR NO");

                // $name = "json-sendRecordData_ERROR".$expedienteId."_".Carbon::now()->format('Ymd-His');

                // $path = "JsonRecordData/".Carbon::now()->format('Ymd')."/" . $name . ".json";

                // Storage::disk('public')->put($path,  $data);


            } else {

                Log::info("[ApiController] API-sendRecordData RESPUESTA SERVIDOR OoooK");

                // $name = "json-sendRecordData_".$expedienteId."_".Carbon::now()->format('Ymd-His');

                // $path = "JsonRecordData/".Carbon::now()->format('Ymd')."/" . $name . ".json";

                // Storage::disk('public')->put($path,  $data);


                // PelayoApi::dispatchNow($expedienteId);



                Log::info("[ApiController] API-sendRecordData RESPUESTA SERVIDOR OK-JOB");


            }
    
        } catch (Exception $e) {
            Log::info('[ApiController] Excepción API-sendRecordData: ',  array($e->getMessage()));
        }


        return "GG";
    }


}
