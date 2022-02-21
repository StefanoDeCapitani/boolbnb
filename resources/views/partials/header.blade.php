<nav class="">
    <div class="container d-flex justify-content-between align-items-center">
        <div>
            <a href="{{ url('/') }}">
                <img src="{{ asset('logo/logo-boolbnb.png')}} " width="100px" alt="">
            </a>
        </div>
        <div>
            @if (Route::has('login'))
                <div class="menu">
                    @auth
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">

                                @if (Auth::User()->name)
                                {{Auth::User()->name}}
                                @else
                                {{Auth::User()->email}}
                                @endif
                            </a>
                        
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="{{ url('/admin/flats') }}">Dashboard</a></li>
                            <li>
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                    @csrf
                                </form>
                            </li>
                            
                            </ul>
                        </div>
                        
                    @else
                        
                            <a href="{{ route('login') }}"><button class="btn login">Accedi</button></a>
                        
    
                        @if (Route::has('register'))
                        
                            <a href="{{ route('register') }}"><button id="register" class="btn">Registrati</button></a>
                        @endif
                    @endauth
                </div>
            @endif
        </div>
    </div>
</nav>