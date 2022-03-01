@extends('layouts.app')

@section('title-page', 'Home page')

@section('links')
    <script src="{{ asset('js\home.js') }}" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js"></script>
@endsection

@section('content')

    <div class="mb-3">
        {{-- search bar --}}
        
        
        {{-- hero --}}
        <div id="fly" class="Hero_GuestPage pb-4">
            <div class="homePage row justify-content-center">
                <h1 class=" text-center" style="text-shadow: 0 0 20px #00000063;
                margin-bottom: 20px;">Che il viaggio abbia inizio</h1>
                <div id="search-box" class=" col-12 col-md-6 " >
                </div>
            </div>
            
        </div>
    </div>
    <div class="">
        {{-- luoghi consigliati --}}
        <div class="my-5 container">
            <h3 class="pb-5  pt-5 text-center">Non sai dove andare?</h3>
            {{-- luoghi consigliati --}}
            <div class="row gap-2 justify-content-center pb-4">
                <div class="card_up col-12 p-2 col-md-6 col-lg-2">
                    <div class=" recommendedPlaces">
                        <img src="\storage\img\venezia.jpg" alt="">
                        <h2 class="RecomenText">
                            Venezia
                        </h2>
                    </div>
                </div>
                <div class="card_up col-12 p-2 col-md-6 col-lg-2">
                    <div class=" recommendedPlaces">
                        <img src="\storage\img\pisa.jpg" alt="">
                        <h2 class="RecomenText">
                            Firenze
                        </h2>
                    </div>
                </div>
                <div class="card_up col-12 p-2 col-md-6 col-lg-2">
                    <div class=" recommendedPlaces">
                        <img src="\storage\img\roma.jpg" alt="">
                        <h2 class="RecomenText">
                            Roma
                        </h2>
                    </div>
                </div>
                <div class="card_up col-12 p-2 col-md-6 col-lg-2">
                    <div class=" recommendedPlaces">
                        <img src="\storage\img\cagliari.jpg" alt="">
    
                        <h2 class="RecomenText">
                            Cagliari
                        </h2>
                    </div>
                </div>
            </div>

        </div>

        <img src="{{ asset('/storage/img/wave.svg') }}" class="wave-top" alt="">
        <div class="backgroundWave" >
            <div class=" container py-5" >
                {{-- Sezione degli appartamenti in evidenza --}}
                <h3 class="pb-5  pt-3 text-center">Appartamenti in evidenza</h3>
                <div class="row justify-content-center" style="width: 100%;
                margin: 0;">
                    @foreach ($flatsSponsered as $flat)
                    <div class="col-12 p-2 col-md-6 col-lg-3">
                        <div class="GuestSponsoredCard">
                            <img src="{{ asset($flat->cover_img) }}" class="card-img-top" style="width: 100%" alt="cover">
                            <div class="card-body TextCard" style="width: 100%">
                                <h4 class="card-title">{{ $flat->title }}</h4>
                                
                                <a href="{{ route('flats.show', $flat->slug) }}" class="btn btn-primary">Visualizza</a>
                            </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div> 
        </div>
        <img src="{{ asset('/storage/img/wave.svg') }}" class="wave-bottom" alt="">



        <div class="my-5 container">

            <div class="row justify-content-center align-items-center py-5">
                <div class="col-10 py-5 col-lg-5 chiSiamo">
                    <h4 class="pb-2"> <strong>Chi siamo </strong></h4>
                    <p>
                       <strong> BoolBnB </strong>è nata con l’obiettivo di reinventare il modo di viaggiare dei giovani studenti, freelancer,
                        docenti del
                        mondo del web.
                        Consapevoli di quanto possa essere stressante spostarsi con l'attrezzatura adeguata per l'avorare, Boolbnb ti
                        aiuta a
                        trovare la struttura che soddisfi maggiormente i tuoi bisobni, che tu abbia bisogno di un secondo monitor, di una connessione veloce o semplicemete della paperella di boolean, su boolbnb puoi trovare un host con tutto quello di cui hai bisogno.
                    </p>
                </div>
                <div class="col-10 my-3 text-center col-lg-5" >
                    <img style="width: 80% ; border-radius:25px ; text-center"  src="\storage\img\Student.jpg" alt="">
    
                </div>
    
               
    
            </div>
        </div>
    </div>
    
<script>
VANTA.CLOUDS({
  el: "#fly",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  speed: 1.10
})
</script>
        

@endsection
