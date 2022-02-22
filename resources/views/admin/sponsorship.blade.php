@extends('layouts.app')

@section('title-page', 'Sponsorship')

@section('links')
<script src="{{ asset('js\payment.js') }}" defer></script>
<script src="https://js.braintreegateway.com/web/dropin/1.33.0/js/dropin.min.js"></script>

@endsection

@section('content')

<h1>Sponsorship</h1>  

    @foreach ($sponsorData as $plan)
        <h2>{{$plan->name}}</h2>
    @endforeach


    {{-- <form action="{{route("admin.sponsorship.store", $slug ='intero-alloggio-unita-in-affitto-host-katja-interhome-group')}}" method="POST">
        @csrf

        <select name="sponsorship" id="" >

            @foreach ($sponsorData as $plan)  
            <option value="{{$plan->id}}">{{$plan->name}}</option>
            @endforeach

        </select>
        <button class="btn btn_primary" type="submit"> Acquista</button>



    </form> --}}
    <hr>

    @if(session('message'))
        {{session('message')}}
    @endif
        <form id="payment-form" action="{{ route('admin.sponsorship.store', $slug) }}" method="post" >
            <div id='token' data-clienttoken='{{ $clientToken }}'></div>
            @csrf
            <!-- Putting the empty container you plan to pass to
            `braintree.dropin.create` inside a form will make layout and flow
            easier to manage -->
            <div id="dropin-container"></div>
            <input type="submit" />
            <input type="hidden" id="nonce" name="payment_method_nonce"/>
        </form>
        
        <script type="text/javascript">
        // call braintree.dropin.create code here
        </script>


@endsection