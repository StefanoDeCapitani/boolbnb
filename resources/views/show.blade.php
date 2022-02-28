@extends('layouts.app')
@section('links')
    <script src="{{ asset('js\mapshow.js') }}" defer></script>

@endsection

@section('title-page', 'Home page')

@section('content')
<div class="container py-5 mt-4">

    <div class="row justify-content-center">
        <div class="col-12 col-lg-10 ">



            {{-- titolo appartamento --}}
            @if (session('message'))
                <div class="alert alert-success">{{ session('message') }}</div>
            @endif
            <div class="text-center mb-3 mt-5">
                <h1>{{ $flat->title }}</h1>
            </div>
            {{-- immagine presentazione --}}
            <div class="text-center  my-5">
                <img class="heroImg" src="{{ asset($flat->cover_img) }}" style=" border-radius:25px" alt="">
            </div>






            {{-- slider / servizzi --}}
            <div class="row justify-content-center  py-5">
                <div class="col-10 my-1 col-lg-6">
                    <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel">

                        <div class="carousel-inner">
                            @foreach ($flat->images as $image)
                                <div class="carousel-item @if ($loop->first) active @endif ">
                                    <img src="{{ asset($image->path) }}" class="d-block w-100  imgCarousel"
                                        style="height:300px" alt="...">
                                </div>
                            @endforeach
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>

                <div class="col-10 my-3 col-lg-6 text-center serviceItem py-5">
                    <h2 class="py-2">Cosa Troverai</h2>

                    <div class="d-flex justify-content-center px-2 flex-wrap">
                        @foreach ($flat->services as $service)
                            <span class="px-2"> <i class="{{ $service->icon }}"></i>
                                {{ $service->name }}</span>
                        @endforeach
                    </div>
                    <div class="mt-3 d-flex justify-content-center flex-wrap">
                        <p class="px-2">Numero letti:{{ $flat->n_beds }}</p>
                        <p class="px-2">Numero bagni: {{ $flat->n_bathrooms }}</p>
                        <p class="px-2">Numero stanze : {{ $flat->n_rooms }}</p>
                        <p class="px-2">Metri quadri: {{ $flat->sq_metres }}</p>
                    </div>
                </div>
            </div>

            {{-- messaggi --}}
            <div class="row d-flex position-relative align-items-center  py-5">

                <div class="col-12 my-3 justify-content-center col-lg-4 text-center py-5 serviceItem">
                    <form class="pad-x" action="{{ route('flats.messages.store', $flat->slug) }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <h4>Invia Messaggio</h4>
                            <label for="name" class="form-label">Nome</label>
                            <input type="text " style=" border-radius: 15px" class="form-control" id="name" name="name"
                                value="{{ old('name') }}" style="
                                    border-radius: 15px">
                            @error('name')
                                {{ $message }}
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">E-mail</label>
                            <input type="text " style=" border-radius: 15px" class="form-control" id="email" name="email"
                                value="{{ Auth::user() ? Auth::user()->email : '' }}">
                            @error('email')
                                {{ $message }}
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="text" class="form-label">Messaggio</label>
                            <textarea class="form-control " style="border-radius: 15px" id="text" name="text"
                                rows="6">{{ old('text') }}</textarea>
                            @error('text')
                                {{ $message }}
                            @enderror
                        </div>
                        <button class="btn btn-secondary " style="border-radius: 15px">Invia</button>
                    </form>
                </div>

                <div class="col-12 my-3 justify-content-center col-lg-7">
                    <img class="w-100" style="border-radius:25px" src="{{ asset($flat->cover_img) }}" alt="">
                </div>
            </div>

        </div>

        <div class="row justify-content-center  py-5">
            <div id="map" style="height: 500px" class="col-10 my-1 col-lg-12" data-lat="{{ $flat->lat }}"
                data-lon="{{ $flat->lon }}">

            </div>




        </div>

    </div>
</div>

@endsection
