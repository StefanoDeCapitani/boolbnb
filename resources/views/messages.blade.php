@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')

<h1 class="mb-2">Messaggi dell'appartamento:</h1>
<h2 class="mb-5">{{$flat_title}}</h2>
<div id="messages">
@foreach ($messages as $message)
<div class="card col-lg-7 col-12 mb-3">
    <h5 class="mb-4">Da:{{$message->name}}</h5>
    <h6 class="mb-4">Email: {{$message->email}}</h6>
    <div class="card-body">
      <p class="card-text">{{$message->text}}</p>
    </div>
  </div>
@endforeach
</div>
@endsection