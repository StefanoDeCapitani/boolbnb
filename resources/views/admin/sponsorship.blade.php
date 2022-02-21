@extends('layouts.app')

@section('title-page', 'Sponsorship')

@section('content')

<h1>Sponsorship</h1>  

    @foreach ($sponsorData as $plan)
        <h2>{{$plan->name}}</h2>
    @endforeach


    <form action="{{route("admin.sponsorship.store", $slug ='intero-alloggio-unita-in-affitto-host-katja-interhome-group')}}" method="POST">
        @csrf

        <select name="sponsorship" id="" >

            @foreach ($sponsorData as $plan)  
            <option value="{{$plan->id}}">{{$plan->name}}</option>
            @endforeach

        </select>
        <button class="btn btn_primary" type="submit"> Acquista</button>


    </form>



@endsection