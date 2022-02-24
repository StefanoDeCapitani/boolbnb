@extends('layouts.app')

@section('title-page', 'Dashboard')

@section('content')

<h1 class="text-center my-5">Ciao 
    @if (Auth::User()->name)
        {{Auth::User()->name}}
    @else
        {{Auth::User()->email}}
    @endif
</h1>    


    {{-- @foreach ($flats as $flat)
    <div class="row d-flex position-relative mb-5">
            <div class="position-absolute col-4" style="transform: translate(0, -50%);top: 50%;left: 0; z-index:2">
                <a href="{{route("flats.show",$flat->slug)}}">
                    <img src="{{asset($flat->cover_img)}}" style="width: 60%;border-radius: 13px;" alt="">
                </a>
            </div>
            <div class="col-7 flat_container ms-auto d-flex-column justify-content-center align-items-center border postion-relative" >
    
                <div class="text-center">
                    <h2 style="overflow-wrap: break-word;">{{$flat->title}}</h2>
                </div>
                <div class="w-100 d-flex justify-content-center ">
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
                </div>
                <div class="text-center">
                    <a href="{{route('admin.analytics', $flat->slug)}}">Statistiche</a>
                </div>
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
    @endforeach --}}
    @if(json_encode($flats) === '[]')

        <div class="text-center my-4">
            <h1>Ops... non hai aggiunto nessun appartamento</h1>
            <a class="btn btn_add text-white mt-3" href="{{route("admin.flats.create")}}">Aggiungi un appartamento</a>
        </div>

    @else

    <div class="row justify-content-center mb-4">
        <div class="col-9">
            <div class="row">
                <div class="col-6"><h3 class="text-start d-inline">Ecco i tuoi Appartamenti:</h3></div>
                <div class="col-6 text-end"><a class="btn btn_add text-white " href="{{route("admin.flats.create")}}">Aggiungi un appartamento</a></div>
                
            </div>
        </div>
    </div>  

    @foreach ($flats as $flat)
    <div id="flats">
        
        <div class="card col-lg-9 col-12 mb-5">
            <div class="row align-items-center">
                    <div class="col-3">
                        <a href="{{route("flats.show",$flat->slug)}}">
                            <img src="{{asset($flat->cover_img)}}" style="width: 100%;border-radius: 13px;" alt="">
                        </a>
                    </div>
                    <div class="col-9">
                        <a href="{{route("flats.show",$flat->slug)}}">
                            <h5 class="mb-4">{{$flat->title}}</h5>
                        </a>
                        <p class="mb-1">Creato il {{ $flat->created_at->format('d-m-Y') }}</p>
                        <div class="mb-2">
                            @if (!$flat->activeSponsorships()->first())
                            <span class="pe-3">Dai un boost al tuo annuncio </span><a href="{{ route('admin.sponsorship', $flat->slug) }}"><button class="btn btn_add p_sponsor text-white"><small>Sponsorizza</small> </button> </a>
                            @else 
                            <div>
                                Sponsorizzazione attiva
                            </div>
                            @endif
                            
                        </div>
                        
                        {{-- bottoni --}}
                        <div class="card-body d-flex justify-content-around mt-5">
                            <a href="{{route("flats.messages.index",$flat->slug)}}"><button class="btn btn_add p_sponsor btn-message text-white"><small>Messaggi</small> </button></a>
                            <a href="{{route('admin.analytics', $flat->slug)}}"><button class="btn btn_add p_sponsor btn-analytics text-white"><small>Statistiche</small> </button></a>
                            <a href="{{route("admin.flats.edit",$flat->slug)}}"><button class="btn btn_add p_sponsor btn-edit"><small>Modifica</small> </button></a>

                            <button type="button" class="btn  btn_add p_sponsor btn-delete text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Elimina
                            </button>
                            
                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body text-center">
                                    <h5>Sei sicuro di voler Eliminare definitivamente l'annuncio?</h5>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn_add p_sponsor btn-analytics text-white" data-bs-dismiss="modal">Close</button>
                                    <form class="" action="{{route("admin.flats.destroy",$flat->slug)}}" method="post">
                                        @csrf
                                        @method('delete')
                                        <button class="btn btn_add p_sponsor btn-delete text-white">Elimina</button>
                                    </form>
                                </div>
                                </div>
                            </div>
                            </div>
                            


                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endforeach
    
    @endif

    
    @endsection