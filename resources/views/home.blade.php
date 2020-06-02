@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
                <h1 class="text-center">{{ __('Post') }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
                <form action="{{ route('post.create') }}" method="post">
                    <div class="form-group">
                        <label for="title" class="control-label">
                        {{ __('Title') }}
                        </label>
                        <input
                                type="text"
                                class="form-control"
                                id="title"
                                name="title">
                    </div>

                    <div class="form-group">
                        <label for="content" class="control-label">
                        {{ __('Content') }}
                        </label>
                        <textarea
                                name="content"
                                id="content"
                                rows="10"
                                class="form-control"></textarea>
                    </div>


                    <div class="form-group">
                        <label for="content" class="control-label">
                        {{ __('Compartir') }}
                        </label>
                        <input type="checkbox" id="cbox1" name="permisos">

                    </div>



                    {{ csrf_field() }}
                    <button type="submit" class="btn btn-primary">{{ __('Create Post') }}</button>
                </form>
            </div>
        </div>
    </div>
@endsection
