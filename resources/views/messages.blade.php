@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')

<h1 class="mb-5">Messaggi dell'appartamento: {{$flat_title}}</h1>
@foreach ($messages as $message)
<div class="card mb-3">
    <h5 class="card-header">{{$message->name}}</h5>
    <div class="card-body">
      <h5 class="card-title">{{$message->email}}</h5>
      <p class="card-text">{{$message->text}}</p>
    </div>
  </div>
@endforeach

@endsection