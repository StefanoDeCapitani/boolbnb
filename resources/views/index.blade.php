@extends('layouts.app')

@section('title-page', 'Home page')

@section('content')


    <div class="container">

        <h2 class="pb-4">Appartamenti in evidenza</h2>
        <div class="row ">
            @foreach ($flatsSponsered as $flat)
                <div class="col-3">
                    <div class="card" style="width: 18rem; height: 350px">
                        <img src="{{ asset($flat->cover_img) }}" class="card-img-top" style="width: 100%" alt="cover">
                        <div class="card-body">
                            <h5 class="card-title">{{ $flat->title }}</h5>

                            <a href="{{ route('flats.show', $flat->slug) }}" class="btn btn-primary">Visualizza</a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>

       
        <div class="col-md-8 col-md-offset-2">
            <div id="dropin-container"></div>
            <button id="submit-button">Request payment method</button>
            </div>

        <script type="application/javascript">
            var button = document.querySelector('#submit-button');
            // client_token
            braintree.dropin.create({
                authorization: "{{ Braintree_ClientToken::generate() }}",
                container: '#dropin-container'
            }, function(createErr, instance) {
                button.addEventListener('click', function() {
                    instance.requestPaymentMethod(function(err, payload) {

                        //rotta da configurare
                        $.get('', {
                            payload
                        }, function(response) {
                            if (response.success) {
                                alert('Payment successfull!');
                            } else {
                                alert('Payment failed');
                            }
                        }, 'json');
                    });
                });
            });
        </script>

    </div>

@endsection
