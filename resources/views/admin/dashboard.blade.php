@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')

<h1>Dashboard</h1>  
<a class="btn btn-secondary" href="{{route("admin.flats.create")}}">Crea Nuovo</a>

    
    @foreach ($flats as $flat)
    <div class="row d-flex position-relative mb-5">

        <div class="position-absolute col-4" style="transform: translate(0, -50%);top: 50%;left: 0; z-index:2">
            <a href="{{route("flats.show",$flat->slug)}}">
               <img src="{{asset($flat->cover_img)}}" style="width: 100%;border-radius: 13px;" alt="">
            </a>
        </div>
        <div class="col-9 ms-auto d-flex-column justify-content-center align-items-center border border-primary postion-relative" style="padding: 150px;border-radius: 13px;" >

            <div class="text-center">
                <h2 style="overflow-wrap: break-word;">{{$flat->title}}</h2>
            </div>
            <div class="w-100 d-flex justify-content-center ">
            {{-- <h5>{{$flat->title}}</h5> --}}
            {{-- <a href="{{route("flats.show",$flat->slug)}}" class="btn btn-primary">Visualizza</a> --}}
            <a class=" m-3 btn btn-primary" href="{{route("admin.flats.edit",$flat->slug)}}">Modifica</a>
            <a class="m-3 btn btn-primary" href="{{route("flats.messages.index",$flat->slug)}}">Messaggi</a>
            </div>
            <div class="text-center">
                @if (!$flat->activeSponsorships()->first())
                <a href="{{ route('admin.sponsorship', $flat->slug) }}">Sponsorizza</a>
                @else 
                <div>
                    Appartamento sponsorizzato
                </div>
                @endif
                
                {{-- @dump($flat->activeSponsorships()->first()) --}}
            </div>
            <div class="text-center">
                <a href="{{route('admin.analytics', $flat->slug)}}">Statistiche</a>
            </div>
            {{-- <a class="btn btn-success" href="{{route("admin.sponsorships.create",$flat->slug)}}">Sponsorizza</a> --}}
            
            <form class="" action="{{route("admin.flats.destroy",$flat->slug)}}" style="position: absolute; top: 10px;right: 10px;" method="post">
                @csrf
                @method('delete')
                <button class="btn btn-danger">x</button>
            </form>
            <div class="position-absolute  " style="bottom: 10px; right:10px">
                <p class="m-0">Visite: {{ $flat->views->count() }}</p>
            </div>
           
        
        
        </div>
    </div>
    
 
    @endforeach


    
@endsection