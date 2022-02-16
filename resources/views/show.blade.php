@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')

    <h1>Show</h1>

    <div> 
        @if(session('message'))
        <div class="alert alert-success">{{session('message')}}</div>
        @endif

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

        <h2>Invia messaggio</h2>
        <form action="{{ route("flats.messages.store", $flat->slug) }}" method="POST">
            @csrf
            <div class="mb-3">
                <label for="name" class="form-label">Nome</label>
                <input type="text" class="form-control" id="name" name="name" value="{{old('name')}}" >
                @error('name')
                    {{$message}}  
                @enderror
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input type="text" class="form-control" id="email" name="email" value="{{ Auth::user()->email}}">
                @error('email')
                    {{$message}}
                @enderror
            </div>
            <div class="mb-3">
                <label for="text" class="form-label">Messaggio</label>
                <textarea class="form-control" id="text" name="text" rows="6">{{old('text')}}</textarea>
                @error('text')
                {{$message}}
                @enderror
            </div>
            <button class="btn btn-secondary">Invia</button>
        </form>
        
       
    </div>
    
@endsection