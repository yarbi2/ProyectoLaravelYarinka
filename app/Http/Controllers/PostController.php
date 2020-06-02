<?php

namespace App\Http\Controllers;

use Auth;
use App\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PostController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:120',
            'content' => 'required'
        ]);


        $username = Auth::user()['name'];

        // $image = $request->input('img');

        Log::info('[ApiController] Excepción API-image: ',  array($request->input('permisos')));


        // $name = $request->input('title');
        // $filePath = $name. '.' . $image->getClientOriginalExtension();
        
        // Storage::disk('s3')->put($filePath, file_get_contents($image), 'public');


        $post = new Post();
        $post->title = $username." - ".$request->input('title');
        $post->content = $request->input('content');

        if($request->input('permisos')){
            $post->permisos = 1;

        }else{
            $post->permisos = 0;

        }
        // $post->img_url = $filePath;



 
        Auth::user()->posts()->save($post);
        return redirect('/welcome');
    }
}
