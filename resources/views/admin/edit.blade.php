@extends('layouts.app')

@section('title-page', 'Home page')



    

@section('links')
<script src="{{asset("js\handle-flats-form.js")}}" defer></script>
@endsection
@section('content')

<div class="row d-flex position-relative">
    <div class="col-5 position-absolute " >
        <img class="w-100" style="border-radius:11px" src="https://images-na.ssl-images-amazon.com/images/I/81elkt8KPjL._AC_SL1500_.jpg"  alt="">

    </div>
    <div class="col-9 ms-auto p-5 mt-5 mb-5 " style="background-color: #DEE4EC; border-radius:11px ; z-index:2">
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
            <div class="d-flex " style="justify-content: space-between">
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
                {{-- <select name="services[]" class="form-control" multiple>
                    @foreach($services as $service)
                 <option value="{{$service->id}}" {{in_array($service->id, $flatServices) ? 'selected': ''}}>{{$service->name}}</option>
                    @endforeach
                 </select> --}}

                 <div class="mb-3">
                    <label for="service">Servizi:</label><br>
                     <div class="d-flex" style="justify-content: space-between">
                         @foreach ($services as $service)
                         <div>
                             <input type="checkbox" class="" id="service" name="service" value="{{$service->id}}"  {{in_array($service->id, $flatServices) ? 'checked': ''}}>
                             <label for="service" class="form-label">{{$service->name}}</label>
                             @error('services')
                             {{$message}}
                             @enderror
     
                         </div>
                         @endforeach
                     </div>
                 </div>
                 <input id="services" type="hidden" name="services[]" value="" >
                 

              
                
          

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

            

            <div class="form-check form-switch">
                <label class="form-check-label" for="visible" >Visibile</label>
                <input type="hidden" id="visible" value="0">
                <input  class="form-check-input" type="checkbox" id="visible" {{ $flat->visible ? "checked" : "" }} name="visible" value="1">
            </div>
            
            <button class="btn btn-success mb-3" >Salva</button>


        </form>
    </div>
    
    @endsection
