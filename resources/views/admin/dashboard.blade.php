@extends('layouts.app')

@section('title-page', 'Dashboard')

@section('content')

<h1 class="text-center my-2 my-lg-5">Ciao 
    @if (Auth::User()->name)
        {{Auth::User()->name}}
    @else
        {{Auth::User()->email}}
    @endif
</h1>    
    @if($flats->count() === 0)

        <div class="text-center my-4">
            <h1>Ops... non hai aggiunto nessun appartamento</h1>
            <a class="btn btn_add text-white mt-3" href="{{route("admin.flats.create")}}">Aggiungi un appartamento</a>
        </div>

    @else

    <div class="row justify-content-center my-4">
        <div class="col-lg-9 co-sm-12 ">
            <div class="row flex-lg-row-reverse  text-lg-start text-sm-center ">
                <div class="col-lg-6 col-sm-12 text-lg-end text-center my-4 my-lg-0">
                    <a class="btn btn_add text-white " href="{{route("admin.flats.create")}}">Aggiungi un appartamento</a>
                </div>
                <div class="col-lg-6 col-sm-12 text-lg-start text-center">
                    <h3 class=" d-inline">I tuoi Appartamenti:</h3>
                </div>
            </div>
        </div>
    </div>  

    @foreach ($flats as $flat)
    <div id="flats">
        
        <div class="card col-lg-9 col-xs-12 mb-5">
            <div class="row align-items-center">
                    <div class="col-lg-3 col-xs-10">
                        <a href="{{route("flats.show",$flat->slug)}}">
                            <img src="{{asset($flat->cover_img)}}" style="width: 100%;border-radius: 13px;" alt="">
                        </a>
                    </div>
                    <div class="col-lg-9 col-xs-12 my-4 my-lg-0">
                        <div class="row">
                            {{-- Titolo appartamento --}}
                            <div class="col-10 ">
                                <a class="text-start" href="{{route("flats.show",$flat->slug)}}">
                                    <h5 class="mb-4">{{$flat->title}}</h5>
                                </a>
                            </div>

                            {{-- Bottone elimina appartamento --}}
                            <div class="col-2 text-end">
                                
                                <i data-bs-toggle="modal" data-bs-target="#exampleModal" class="fa-solid fa-square-xmark fs-4 icon-delete trash_icon"></i>
                                
                                
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
                                    {{-- <div class="modal-footer"> --}}
                                        {{-- <button type="button" class="btn btn_add btn-analytics text-white" data-bs-dismiss="modal">Close</button> --}}
                                        <form class="text-center" action="{{route("admin.flats.destroy",$flat->slug)}}" method="post">
                                            @csrf
                                            @method('delete')
                                            <button class="btn btn_add btn-delete text-white m-4">Elimina</button>
                                        </form>
                                    {{--  </div> --}}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        
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
                            <a href="{{route("flats.messages.index",$flat->slug)}}">Messaggi <i class="fa-solid fa-message d-none d-sm-inline"></i></a>
                            <a href="{{route('admin.analytics', $flat->slug)}}">Statistiche <i class="fa-solid fa-chart-column d-none d-sm-inline"></i></a>
                            <a href="{{route("admin.flats.edit",$flat->slug)}}">Modifica <i class="fa-solid fa-pen d-none d-sm-inline"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endforeach
    
        <div class="d-flex justify-content-center">
            <span>
                {{ $flats->links() }}
            </span>
        </div>
    
    @endif
    @endsection