@extends('layouts.app')
@section('links')
    <script src="{{ asset('js\handle-flats-form.js') }}" defer></script>
    <script src="{{ asset('js\create.js') }}" defer></script>
@endsection

@section('title-page', 'Aggiungi appartamento')

@section('content')

    <div class="container py-5 mt-4">

        <div class="row d-flex position-relative">
            <div class=" d-none d-lg-inline-block col-lg-5 position-absolute ">
                <img class="w-100" style="border-radius:11px"
                    src="https://images-na.ssl-images-amazon.com/images/I/81elkt8KPjL._AC_SL1500_.jpg" alt="">
    
            </div>
    
            <div class="col-12 col-lg-9 ms-auto p-5 mt-5 mb-5 "
                style="background-color: #DEE4EC; border-radius:11px ; z-index:2">
                <form id="create-form-try" action="{{ route('admin.flats.store') }}" method="POST"
                    enctype="multipart/form-data">
                    @csrf
    
                    <div id="container-input-cover" class="mb-3">
    
                        <input id="inp" name="cover_img" type="file" value="{{ old('cover_img') }}">
                        <label for="inp"><i class="fa fa-plus"></i> Copertina Flat</label>
    
                        <div id="imagePreview">
                            <img id="immagine" src="" alt="Image Previw">
                            <div id="i-box"><i class="fa-solid fa-minus"></i></div>
                        </div>
                        @error('cover_img')
                            {{ $message }}
                        @enderror
                    </div>
                    <div class="mb-3">
                        <label for="title" class="form-label">Titolo</label>
                        <input type="text" class="form-control" id="title" name="title" value="{{ old('title') }}">
                        @error('title')
                            {{ $message }}
                        @enderror
                    </div>
                    <div class="d-flex flex-wrap row-cols-2" style="justify-content: space-between">
                        <div class="mb-3">
                            <label for="n_rooms" class="form-label">Numero stanze</label>
                            <input type="number" class="form-control" id="n_rooms" name="n_rooms"
                                value="{{ old('n_rooms') }}">
                            @error('n_rooms')
                                {{ $message }}
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="n_bathrooms" class="form-label">Numero bagni</label>
                            <input type="number" class="form-control" id="n_bathrooms" name="n_bathrooms"
                                value="{{ old('n_bathrooms') }}">
                            @error('n_bathrooms')
                                {{ $message }}
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="n_beds" class="form-label">Numero letti</label>
                            <input type="number" class="form-control" id="n_beds" name="n_beds" value="{{ old('n_beds') }}">
                            @error('n_beds')
                                {{ $message }}
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="sq_metres" class="form-label">Metri quadri</label>
                            <input type="number" class="form-control" id="sq_metres" name="sq_metres"
                                value="{{ old('sq_metres') }}">
                            @error('sq_metres')
                                {{ $message }}
                            @enderror
                        </div>
                    </div>
    
    
                    <div class="mb-3">
                        <label for="address" class="form-label">Indirizzo</label>
                        <input type="text" class="form-control" id="address" name="address" value="{{ old('address') }}">
                        @error('address')
                            {{ $message }}
                        @enderror
                    </div>
    
                    <div class="mb-3 ">
                        <label for="service">Servizi:</label><br>
                        <div class="d-flex flex-column flex-lg-row flex-wrap gap-4 mt-2" style="justify-content: center">
                            @foreach ($services as $service)
                                <div>
                                    <input type="checkbox" class="" id="service" name="service"
                                        value="{{ $service->id }}">
                                    <label for="service" class="form-label">{{ $service->name }}</label>
                                    @error('services')
                                        {{ $message }}
                                    @enderror
    
                                </div>
                            @endforeach
                        </div>
                    </div>
                    <input id="services" type="hidden" name="services[]" value="">
                    {{-- <div class="form-group">
                    <label class="form-label">Tag</label>
    
                    <select name="services[]" class="form-control" multiple>
                      @foreach ($services as $service)
                      <option value="{{$service->id}}" {{in_array($service->id, old("services") ?: []) ? 'selected': ''}}>{{$service->name}}</option>
                      @endforeach
                    </select>
                  </div> --}}
    
    
                    <div class="mb-3">
                        <label for="night_price" class="form-label">Prezzo notte</label>
                        <input type="number" class="form-control" id="night_price" name="night_price"
                            value="{{ old('night_price') }}">
                        @error('night_price')
                            {{ $message }}
                        @enderror
                    </div>
    
                    <div>
    
                        <input type="hidden" class="form-control" id="lat" name="lat" value="{{ old('lat') }}">
                    </div>
                    <div>
    
                        <input type="hidden" class="form-control" id="lng" name="lon" value="{{ old('lon') }}">
                    </div>
    
    
    
                    <div id="container-input-paths" class="mb-3">
                        <input id="file-input" name="images[]" type="file" multiple value="{{ old('images[]') }}">
                        <label for="file-input">
                            <i class="fas fa-upload"></i>Choose Path
                        </label>
    
                        <p id="num-of-files">No Files Chosen</p>
                        <div id="images" class="row">
    
                        </div>
                        @error('images')
                            {{ $message }}
                        @enderror
                    </div>
    
                    <div class="form-check form-switch">
                        <label class="form-check-label" for="visible">Visibile</label>
                        <input class="form-check-input" type="checkbox" id="visible" checked name="visible" value="1">
                    </div>
    
                    {{-- <div>
                    <label for="visible" class="form-label">visible</label>
                    <input type="radio" name="visible" id="visible" value="1">
    
                   
                </div> --}}
    
                    <button class="btn btn-success mb-3">Crea</button>
    
    
                </form>
            </div>
        </div>
    </div>

@endsection
