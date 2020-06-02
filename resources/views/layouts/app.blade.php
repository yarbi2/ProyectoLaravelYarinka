<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('plugins\forms\js\jquery-3.3.1.js') }}"></script>

    <link rel="icon" href="{{ asset('/plugins/favicon.ico') }}" type="image/x-icon"/>

    <style>
/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>



</head>
<body>
    <div id="app">
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand" href="{{ url('/') }}">
                        {{ config('app.name', 'OpenCode') }}
                    </a>


                    <!-- <button id="GetApi" href="{{ url('/getapi') }}">API</button> -->

                    <a class="navbar-brand " href="{{ url('/setlocale/es') }}">
                        <img src="{{ asset('plugins/flag/spain.png') }}" alt="" style="height:2em; margin-top: -0.4em; {{ session('locale') == 'es'   ? 'opacity:1' : 'opacity:0.3' }}">
                        
                    </a>

                    <a class="navbar-brand" href="{{ url('/setlocale/en') }}">
                    <img src="{{ asset('plugins/flag/england.png') }}" alt="" style="height:2em; margin-top: -0.4em; {{session('locale') == 'en' ? 'opacity:1' : 'opacity:0.3' }}">
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                        @if (Auth::guest())
                            <li><a href="{{ route('login') }}">{{ __('Login') }}</a></li>
                            <li><a href="{{ route('register') }}">{{ __('Register') }}</a></li>
                        @else
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            {{ __('Logout') }}
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            {{ csrf_field() }}
                                        </form>
                                    </li>
                                    
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('indexMS3') }}">{{ __('IndexMS3') }}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('bj21') }}">{{ __('BJ21') }}</a>
                            </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('home') }}">{{ __('Create Post') }}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('welcome') }}">{{ __('Post') }}</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('myposts') }}">{{ __('Mis Posts') }}</a>
                            </li>
                                </ul>
                            </li>
                        @endif
                    </ul>
                </div>
            </div>
        </nav>

        @yield('content')
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
