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

    @if(session('message'))
    {{session('message')}}
    @endif

    @foreach ($sponsorData as $plan)  
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">{{$plan->name}}</h5>
                    <p class="card-text">{{$plan->price}}</p>
                    <p class="card-text">{{$plan->duration}}</p>
                    <button id="{{ $plan->name }}" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Acquista
                      </button>
                      
                    </div>
                </div>
                @endforeach
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
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
                
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                      </div>
                    </div>
                  </div>
                </div>


    <hr>

    
        

@endsection