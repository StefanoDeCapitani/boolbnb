@extends('layouts.app')

@section('title-page', 'Home page')



    

@section('links')
<script src="{{asset("js\handle-flats-form.js")}}" defer></script>
@endsection
@section('content')

    <div class="container">
        @foreach($errors->all() as $error)
            {{$error}}
        
        @endforeach
    
        <form   id="create-form-try" action="{{route("admin.flats.update", $flat->slug)}}" method="POST" enctype="multipart/form-data">
            @csrf
            @method('PUT')
            <div class="mb-3">
                <label for="title" class="form-label">Titolo</label>
                <input type="text" class="form-control" id="title" name="title" value="{{ $flat->title}}" >
                @error('title')
                    {{$message}}  
                @enderror
            </div>
            <div class="mb-3">
                <label for="n_rooms" class="form-label">Numero stanze</label>
                <input type="number" class="form-control" id="n_rooms" name="n_rooms" value="{{$flat->n_rooms}}">
                @error('n_rooms')
                    {{$message}}
                @enderror
            </div>
            <div class="mb-3">
                <label for="n_bathrooms" class="form-label">Numero bagni</label>
                <input type="number" class="form-control" id="n_bathrooms" name="n_bathrooms" value="{{$flat->n_bathrooms}}">
                @error('n_bathrooms')
                {{$message}}
                @enderror
            </div>
            <div class="mb-3">
                <label for="n_beds" class="form-label">Numero letti</label>
                <input type="number" class="form-control" id="n_beds" name="n_beds" value="{{$flat->n_beds}}">
                @error('n_beds')
                {{$message}}
                @enderror
            </div>
            <div class="mb-3">
                <label for="sq_metres" class="form-label">Metri quadri</label>
                <input type="number" class="form-control" id="sq_metres" name="sq_metres" value="{{$flat->sq_metres}}">
                @error('sq_metres')
                {{$message}}
                @enderror
            </div>
           
            <div class="mb-3">
                <label for="address" class="form-label">Indirizzo</label>
                <input type="text" class="form-control" id="address" name="address" value="{{$flat->address}}">
                @error('address')
                {{$message}}
                @enderror
            </div>
            {{-- <div class="mb-3">
               <label for="service">Servizi:</label><br>
             
                    @foreach ($services as $service)
                    <label for="service" class="form-label">{{$service->name}}</label>
                    <input type="checkbox" class="" id="service" name="service" value="{{$service->id}}">
                    @endforeach

                
                
            </div> --}}
            <div class="form-group">
                <label class="form-label">Tag</label>
            
               


                    {{-- multiple options --}}
                <select name="services[]" class="form-control" multiple>
                    @foreach($services as $service)
                 <option value="{{$service->id}}" {{in_array($service->id, $flatServices) ? 'selected': ''}}>{{$service->name}}</option>
                    @endforeach
                 </select>
                 

              
                
          

              </div>
            <div class="mb-3">
                <label for="night_price" class="form-label">Prezzo notte</label>
                <input type="number" class="form-control" id="night_price" name="night_price" value="{{$flat->night_price}}">
                @error('night_price')
                {{$message}}
                @enderror
            </div>

            <div>
                
                <input type="hidden" class="form-control" id="lat" name="lat" value="{{$flat->lat}}">
            </div>
            <div >
              
                <input type="hidden" class="form-control" id="lng" name="lon"  value="{{$flat->lon}}">
            </div>
            
            <div class="mb-3">
                <input name="cover_img" type="file" value="{{$flat->cover_img}}">
                @error('cover_img')
                {{$message}}
                @enderror
            </div>

            <div class="mb-3">
                <input name="images[]" type="file" multiple >
                @error('images')
                {{$message}}
                @enderror
            </div>

            <div>
                <label for="visible" class="form-label">visible</label>
                <input type="checkbox" id="visible" name="visible" {{ $flat->visible ? "checked" : "" }} value='1'>


            </div>
            
            <button class="btn btn-success mb-3" >Salva</button>


        </form>
    </div>
    
    @endsection
