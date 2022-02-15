@extends('layouts.app')
@section('links')
<script src="{{asset("js\handle-flats-form.js")}}" defer></script>
@endsection

@section('title-page', 'Aggiungi appartamento')

@section('content')
    
        @foreach($errors->all() as $error)
            {{$error}}
        
        @endforeach
    
        <form   id="create-form-try" action="{{route("admin.flats.store")}}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="mb-3">
                <label for="title" class="form-label">Titolo</label>
                <input type="text" class="form-control" id="title" name="title" >
                @error('title')
                    {{$message}}  
                @enderror
            </div>
            <div class="mb-3">
                <label for="n_rooms" class="form-label">Numero stanze</label>
                <input type="number" class="form-control" id="n_rooms" name="n_rooms">
                @error('n_rooms')
                    {{$message}}
                @enderror
            </div>
            <div class="mb-3">
                <label for="n_bathrooms" class="form-label">Numero bagni</label>
                <input type="number" class="form-control" id="n_bathrooms" name="n_bathrooms" value="n_bathrooms">
                @error('n_bathrooms')
                {{$message}}
                @enderror
            </div>
            <div class="mb-3">
                <label for="n_beds" class="form-label">Numero letti</label>
                <input type="number" class="form-control" id="n_beds" name="n_beds">
                @error('n_beds')
                {{$message}}
                @enderror
            </div>
            <div class="mb-3">
                <label for="sq_metres" class="form-label">Metri quadri</label>
                <input type="number" class="form-control" id="sq_metres" name="sq_metres">
                @error('sq_metres')
                {{$message}}
                @enderror
            </div>
           
            <div class="mb-3">
                <label for="address" class="form-label">Indirizzo</label>
                <input type="text" class="form-control" id="address" name="address">
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
            
                <select name="services[]" class="form-control" multiple>
                  @foreach($services as $service)
                  <option value="{{$service->id}}">{{$service->name}}
                  </option>
                  @endforeach
                </select>
              </div>
            <div class="mb-3">
                <label for="night_price" class="form-label">Prezzo notte</label>
                <input type="number" class="form-control" id="night_price" name="night_price">
                @error('night_price')
                {{$message}}
                @enderror
            </div>

            <div>
                
                <input type="hidden" class="form-control" id="lat" name="lat" value="">
            </div>
            <div >
              
                <input type="hidden" class="form-control" id="lng" name="lon" value="">
            </div>
            
            <div class="mb-3">
                <input name="cover_img" type="file">
                @error('cover_img')
                {{$message}}
                @enderror
            </div>

            <div class="mb-3">
                <input name="images[]" type="file" multiple>
                @error('images')
                {{$message}}
                @enderror
            </div>

            <div>
                <label for="visible" class="form-label">visible</label>
                <input type="radio" id="visible"  value='true'>

                <input type="hidden" name="visible" value="1">

            </div>
            
            <button class="btn btn-success mb-3" >Crea</button>


        </form>
    
    @endsection