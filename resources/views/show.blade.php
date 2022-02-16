@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')

    <h1>Show</h1>

    <div> 
        
        <h1>{{$flat->title}}</h1>
        <h2>Services</h2>
        @foreach ($flat->services as $service)
        <p>{{ $service->name }}</p>
        @endforeach
        
        <img src="{{asset($flat->cover_img)}}" style="height: 500px; width: 500px;" alt="">

        <h2>Gallery</h2>
        @foreach ($flat->images as $image)
            <img src="{{asset($image->path)}}" style="height: 500px; width: 500px; " alt="">
        @endforeach
        
       
    </div>
    
@endsection