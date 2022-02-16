@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')

<h1>Dashboard</h1>  
<a class="btn btn-secondary" href="{{route("admin.flats.create")}}">Crea Nuovo</a>
<div>
    @foreach ($flats as $flat)
    <div>
        <h5>{{$flat->title}}</h5>
        <a href="{{route("flats.show",$flat->slug)}}" class="btn btn-primary">Visualizza</a>
        <a class="btn btn-primary" href="{{route("admin.flats.edit",$flat->slug)}}">Modifica</a>
        <a class="btn btn-primary" href="{{route("flats.messages.index",$flat->slug)}}">Messaggi</a>
        {{-- <a class="btn btn-success" href="{{route("admin.sponsorships.create",$flat->slug)}}">Sponsorizza</a> --}}
        <form action="{{route("admin.flats.destroy",$flat->slug)}}" method="post">
            @csrf
            @method('delete')
            <button class="btn btn-danger">Elimina</button>
        </form>
        <p>Visite: {{ $flat->views->count() }}</p>
    </div>
 
    @endforeach
</div>
    
@endsection