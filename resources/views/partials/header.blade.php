<nav class="">
    <div class="container d-flex justify-content-between align-items-center">
        <div>
            <img src="{{ asset('logo/logo-boolbnb.png')}} " width="100px" alt="">
        </div>
        <div>
            @if (Route::has('login'))
                <div class="menu">
                    @auth
                        <a href="{{ url('/home') }}">Home</a>
                    @else
                        <a href="{{ route('login') }}">Accedi</a>
    
                        @if (Route::has('register'))
                            <a href="{{ route('register') }}">Registrati</a>
                        @endif
                    @endauth
                </div>
            @endif
        </div>
    </div>
</nav>