@extends('layouts.app')

@section('title-page', 'Sponsorship')

@section('links')
    <script src="{{ asset('js\payment.js') }}" defer></script>
    <script src="https://js.braintreegateway.com/web/dropin/1.33.0/js/dropin.min.js"></script>

@endsection

@section('content')

    @if (session('message'))
        <div class="alert alert-success" role="alert">
            {{ session('message') }}
        </div>
    @endif
    @if (session('error'))
        <div class="alert alert-danger" role="alert">
            {{ session('error') }}
        </div>
    @endif
        {{-- card Sponsorship --}}
    <h1 class="text-center mb-5">Dai visibilità al tuo annuncio</h1>
    <div class="row justify-content-center">
        @foreach ($sponsorData as $plan)
            <div class=" cardSponsorship my-2  mx-2 col-3" style="width: 18rem;">
                <div class="card-body py-5">
                    <h3 class="card-title">{{ $plan->name }}</h3>

                    <div class="py-4">
                        <h5 class="card-text">Prezzo</h5>
                        <p class="card-text">{{ $plan->price }}€</p>
                    </div>

                    <div class="py-4">
                        <h5 class="card-text">Durata</h5>
                        <p class="card-text">{{ $plan->duration }}ore</p>
                    </div>
                    <button id="{{ $plan->name }}" type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Acquista
                    </button>

                </div>
            </div>
        @endforeach

    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="payment-form" action="{{ route('admin.sponsorship.store', $slug) }}" method="post">
                        <div id='token' data-clienttoken='{{ $clientToken }}'></div>
                        @csrf
                        <!-- Putting the empty container you plan to pass to
                                    `braintree.dropin.create` inside a form will make layout and flow
                                    easier to manage -->
                        <div id="dropin-container">
                        </div>
                        <input type="submit" />
                        <input type="hidden" id="nonce" name="payment_method_nonce" />
                        <input type="hidden" id="plan" name="plan" />
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





@endsection
