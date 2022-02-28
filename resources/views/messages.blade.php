@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')

<div class="container py-5 mt-4">
  
      <div class="title-text">
          <h1 class="mb-2">Messaggi dell'appartamento:</h1>
          <h2 class="mb-5">{{ $flat_title }}</h2>
      </div>
      <div id="messages">
          @foreach ($messages as $message)
              <div class="card col-lg-7 col-12 mb-3">
  
                  <div class="row">
                      <h5 class="col-6 mb-4 d-inline">Da:{{ $message->name }}</h5>
                      <small class="col-6 text-end"> {{ $message_received->toFormattedDateString() }} alle
                          {{ $message_received->format('H:i') }}</small>
                  </div>
  
                  <h6 class="mb-4">Email: {{ $message->email }}</h6>
                  <div class="card-body">
                      <p class="card-text">{{ $message->text }}</p>
                  </div>
              </div>
          @endforeach
      </div>

</div>
@endsection
