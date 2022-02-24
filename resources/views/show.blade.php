@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')



    <div>
        @if (session('message'))
            <div class="alert alert-success">{{ session('message') }}</div>
        @endif
        <div class="text-center mb-5">
            <h3>{{ $flat->title }}</h3>
        </div>





        {{-- section img --}}


        {{-- immagine presentazione --}}
        <div class="text-center">
            <img src="{{ asset($flat->cover_img) }}" style="width: 60%; border-radius:11px" alt="">
        </div>
        <div class="row d-flex justify-content-center pb-5 pt-3">





            <div class="col-3 ">

                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                            @foreach ($flat->images as $image)
                            <div class="carousel-item @if ($loop->first) active @endif ">
                                <img src="{{ asset($image->path) }}" class="d-block w-100" alt="...">
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
                    {{-- <img src="{{asset($image->path)}}" style="border-radius:11px; width:100% " alt=""> --}}
            </div>
        </div>

        {{-- servizzi --}}
        <div class="text-center py-5">
            <h2>Cosa Troverai</h2>

            <div class="d-flex justify-content-center flex-wrap">
                @foreach ($flat->services as $service)
                    <span> <i class="{{ $service->icon }}"></i> {{ $service->name }}</span>
                @endforeach
            </div>
            <div class="mt-3 d-flex justify-content-center flex-wrap">
                <p class="px-2">Numero letti:{{ $flat->n_beds }}</p>
                <p class="px-2">Numero bagni: {{ $flat->n_bathrooms }}</p>
                <p class="px-2">Numero stanze : {{ $flat->n_rooms }}</p>
                <p class="px-2">Metri quadri: {{ $flat->sq_metres }}</p>
            </div>
        </div>


        <div class="row d-flex position-relative mt-5 mb-5">

            <div class="col-4 p-5 mt-5 mb-5 " style="background-color: #DEE4EC; border-radius:11px ; z-index:2">
                <form action="{{ route('flats.messages.store', $flat->slug) }}" method="POST">
                    @csrf
                    <div class="mb-3">
                        <h4>Invia Messaggio</h4>
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name" name="name" value="{{ old('name') }}">
                        @error('name')
                            {{ $message }}
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail</label>
                        <input type="text" class="form-control" id="email" name="email"
                            value="{{ Auth::user() ? Auth::user()->email : '' }}">
                        @error('email')
                            {{ $message }}
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label for="text" class="form-label">Messaggio</label>
                        <textarea class="form-control" id="text" name="text" rows="6">{{ old('text') }}</textarea>
                        @error('text')
                            {{ $message }}
                        @enderror
                    </div>
                    <button class="btn btn-secondary">Invia</button>
                </form>
            </div>

            <div class="col-9 position-absolute ms-auto h-100" style="right:0 ; top:0">
                <img class="w-100 h-100" style="border-radius:11px" src="{{ asset($flat->cover_img) }}" alt="">
            </div>
        </div>


    </div>

@endsection
