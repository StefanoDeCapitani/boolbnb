@extends('layouts.app')

@section('title-page', 'Cerca appartamento')

@section('links')
    <script src="{{ asset('js\vue.js') }}" defer></script>
    {{-- <link rel="stylesheet" type="text/css" href="maps.css"/> --}}
    {{-- <script src="maps-web.min.js" ></script> --}}
@endsection

@section('content')
    <div class="container py-3">

        {{-- <div class="search_page_title text-center">
            <div class="search_page_title text-center">
                <h1 class="my-2">Dove vuoi andare?</h1>
            </div>
        </div> --}}
        <search-page :services='{{ json_encode($services) }}'></search-page>
    
        </div>
    </div>
@endsection
