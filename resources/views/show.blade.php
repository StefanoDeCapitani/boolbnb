@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')

    <h1>Show</h1>

    <div> 
        
        <h1>{{$flat->title}}</h1>
        <img src="{{asset($flat->cover_img)}}" alt="">
       
    </div>
    
@endsection