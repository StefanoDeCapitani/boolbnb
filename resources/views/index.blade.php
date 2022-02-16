
@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')

    
    <div class="container">

        <h2 class="pb-4">Appartamenti in evidenza</h2>
       <div class="row ">
        @foreach ($flatsSponsered as $flat)
        
        <div class="col-3">
            <div class="card" style="width: 18rem; height: 350px">
                <img src="{{asset($flat->cover_img)}}" class="card-img-top" style="width: 100%" alt="cover">
                <div class="card-body">
                    <h5 class="card-title">{{$flat->title}}</h5>
                
                    <a href="{{route('flats.show',$flat->slug)}}" class="btn btn-primary">Visualizza</a>
                </div>
            </div>
        </div>
        
            
        @endforeach
    </div>
    </div>
    
@endsection