<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['middleware'=>'language'],function ()
{

    Auth::routes([
        'register' => true,
        'verify' => true,
        'confirm' => true,
        'reset' => true
    ]);


Route::group(['middleware' => 'auth'], function () {

    Route::get('/home', 'HomeController@index')->name('home');
    Route::get('/welcome', 'HomeController@welcome')->name('welcome');

    Route::get('/myposts', 'HomeController@myposts')->name('myposts');
    

    Route::post('/post', [
        'uses' => 'PostController@create',
        'as' => 'post.create'
    ]);



    Route::get('/indexMS3', 'HomeController@indexMS3')->name('indexMS3');
	Route::get('/bj21', 'HomeController@bj21')->name('bj21');


});
Route::group(['middleware' => 'web'], function () {

    Route::get('/{lang?}', 'PortadaController@portada')->name('portada');
    Route::get('/es', 'PortadaController@portada')->name('portadaEs');
    Route::get('/en', 'PortadaController@portada')->name('portadaEn');

    Route::get('/getapi', 'PortadaController@GetApi');


    Route::get('setlocale/{locale}',function($lang){
        \Session::put('locale',$lang);

        if($lang == "es" ){
            return redirect()->route('portadaEs');

        }
        else if($lang=="en"){
            return redirect()->route('portadaEn');
        } else {
            return redirect()->back();   

        }
 });


});

});
