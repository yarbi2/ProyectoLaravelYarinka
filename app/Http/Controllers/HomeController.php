<?php

namespace App\Http\Controllers;

use App\Post;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
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
    public function index()
    {

        return view('home');
    }

    public function welcome()
    {
        $posts = Post::where("user_id", "!=" ,"0")->where("permisos", "=" ,"1")->paginate(10);
        return view('welcome', ['posts' => $posts]);
    }


    public function myposts()
    {

        // $user = User::where("id", "=" ,Auth::user()['id'])->firt;
        // Log::info('[ApiController] user: ',  array($user));


        $posts = Post::where("user_id", "=" ,Auth::user()['id'])->paginate(10);

        Log::info('[ApiController] myposts: ',  array(Auth::user()['id']));
        Log::info('[ApiController] myposts: ',  array($posts));

        return view('welcome', ['posts' => $posts]);
    }

    public function indexMS3( )
    {
        $name = Auth::user()['name'];
        return view('oldProjects/indexMS3', compact('name'));
    }

            public function bj21( )
    {
        $name = Auth::user()['name'];
        return view('oldProjects/bj21', compact('name'));
    }

}
