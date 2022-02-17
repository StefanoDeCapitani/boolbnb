@extends('layouts.app')

@section('title-page', 'Cerca appartamento')

@section('links')
    <script src="{{asset('js\vue.js')}}" defer></script>
@endsection

@section('content')
    <h1>Pagina ricerca</h1>
    <search-page></search-page>

    </div>
@endsection
