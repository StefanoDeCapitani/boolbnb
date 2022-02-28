
@extends('layouts.app')

@section('title-page', 'Home page')

@section('links')
<script src="{{asset("js\home.js")}}" defer></script>
@endsection

@section('content')

    
    <div class="container">
        {{-- search bar --}}
        <h2 class=" text-center">Dove vuoi andare</h2>
        <div id="search-box" class="home-search-box mb-4">
        </div>

        {{-- hero --}}
        <div class="Hero_GuestPage pb-4">
            <img src="\storage\img\montagna.jpg" alt="">
        </div>
        <h5 class="pb-4  pt-5 text-center">Non sai dove andare?</h5>
        {{-- luoghi consigliati --}}
        <div class="row justify-content-center">
            <div class=" col-12 p-2 col-md-6 col-lg-2">
                <div class=" recommendedPlaces">
                    <img src="\storage\img\venezia.jpg" alt="">
                    <h2 class="RecomenText">
                        Venezia
                    </h2>
                </div>
            </div>
            <div class="col-12 p-2 col-md-6 col-lg-2">
                <div class=" recommendedPlaces">
                    <img src="\storage\img\pisa.jpg" alt="">
                    <h2 class="RecomenText">
                        Pisa
                    </h2>
                </div>
            </div><div class="col-12 p-2 col-md-6 col-lg-2">
                <div class=" recommendedPlaces">
                    <img src="\storage\img\roma.jpg" alt="">
                    <h2 class="RecomenText">
                        Roma
                    </h2>
                </div>
            </div><div class="col-12 p-2 col-md-6 col-lg-2">
                <div class=" recommendedPlaces">
                    <img src="\storage\img\sicilia.jpg" alt="">

                    <h2 class="RecomenText">
                        Sicilia
                    </h2>
                </div>
            </div>
        </div>
            


        {{-- Sezione degli appartamenti in evidenza --}}
        <h5 class="pb-4  pt-5 text-center">Appartamenti in evidenza</h5>
        <div class="row ">
        @foreach ($flatsSponsered as $flat)
        
        <div class="col-12 p-2 col-md-6 col-lg-3">
            <div class="GuestSponsoredCard" style="width: 18rem; max-height: 188px">
                <img src="{{asset($flat->cover_img)}}" class="card-img-top" style="width: 100%" alt="cover">
                <div class="card-body TextCard">
                    <h4 class="card-title">{{$flat->title}}</h4>
                
                    <a href="{{route('flats.show',$flat->slug)}}" class="btn btn-primary">Visualizza</a>
                </div>
            </div>
        </div>
        
            
        @endforeach
    </div>
    </div>
    
@endsection