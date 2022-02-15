@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')

<h1>Dashboard</h1>  
<div>
    {{-- @dump($flats) --}}
    @foreach ($flats as $flat)
    <h5>{{$flat->title}}</h5>
     
        
    @endforeach
</div>
    
@endsection