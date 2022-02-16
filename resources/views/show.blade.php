@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')

    

    <div> 
        @if(session('message'))
        <div class="alert alert-success">{{session('message')}}</div>
        @endif
        <div class="text-center mb-5">
            <h3>{{$flat->title}}</h3>
        </div>
        <div class="text-center">
            <img src="{{asset($flat->cover_img)}}" style="width: 80%; border-radius:11px" alt="">
        </div>
       
        
        
        <div class="row d-flex justify-content-center pt-3">
        @foreach ($flat->images as $image)
            <div class="col-3 ">
                <img src="{{asset($image->path)}}" style="border-radius:11px; width:100% " alt="">
            </div>
           
        @endforeach
        </div>
       

        <h2>Cosa Troverai</h2>
        
        <div>
        @foreach ($flat->services as $service)
      
        <span> <i class="{{$service->icon}}"></i> {{ $service->name }}</span>
        
        @endforeach
        </div>
        <div class="mt-3">
           <p>Numero letti:{{$flat->n_beds}}</p>
           <p>Numero bagni: {{$flat->n_bathrooms}}</p>
           <p>Numero stanze : {{$flat->n_rooms}}</p>
           <p>Metri quadri: {{$flat->sq_metres}}</p>
        </div>

        
     <div class="row d-flex position-relative mt-5 mb-5">

       <div class="col-4 p-5 mt-5 mb-5 " style="background-color: #DEE4EC; border-radius:11px ; z-index:2">
        <form action="{{ route("flats.messages.store", $flat->slug) }}" method="POST">
            @csrf
            <div class="mb-3">
                 <h4>Invia Messaggio</h4>
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

        <div class="col-9 position-absolute ms-auto h-100" style="right:0 ; top:0" >
            <img class="w-100 h-100" style="border-radius:11px" src="{{asset($flat->cover_img)}}"  alt="">
        </div>
    </div>
        
       
    </div>
    
@endsection