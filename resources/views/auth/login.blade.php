@extends('layouts.app')

@section('content')
<div class="container py-5 mt-4">

    <div class="d-none d-lg-block ">
        <div class="d-flex align-items-center">
            <div class="image-container login">
                <img src="{{ asset('logo/ian-keefe-OgcJIKRnRC8-unsplash.jpg')}}"alt="">
            </div>
            
            <div class="bg-login">
                
                <div class="card">
                    <div class="card-body" style="padding-bottom:0">
                        <form method="POST" action="{{ route('login') }}">
                            @csrf
    
                            <div class="form-group row">
                                <div class="w-100 mb-2">
                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Inserisci email" autofocus>
    
                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
    
                            <div class="form-group row">
                                <div class="w-100 mb-2">
                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Inserisci password">
    
                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
    
                            <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
    
                                        <label class="form-check-label" for="remember">
                                            {{ __('Remember Me') }}
                                        </label>
                                    </div>
                            </div>
    
                            <div class="form-group mt-2">
                            
                                    <button type="submit" class="btn btn-primary d-block">
                                        {{ __('Login') }}
                                    </button>
                                   <div class="d-flex"> 

                                    <a class="btn btn-link" href="{{ route('register') }}">Sign-in</a>


                                    @if (Route::has('password.request'))
                                        <a style="margin-left: auto" class="btn btn-link text-end " href="{{ route('password.request') }}">
                                            {{ __('Forgot Your Password?') }}
                                        </a>

                                        
                                    @endif

                                  
                                </div>
                                  
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>


    <div class="d-block d-lg-none ">
        <div class="d-flex align-items-center">
            {{-- <div class="image-container">
                <img src="{{ asset('logo/ian-keefe-OgcJIKRnRC8-unsplash.jpg')}}"alt="">
            </div> --}}
            
            <div class="bg-login">
                
                <div class="card">
                    <div class="card-body" style="padding-bottom: 0">
                        <form method="POST" action="{{ route('login') }}">
                            @csrf
    
                            <div class="form-group row">
                                <div class="w-100 mb-2">
                                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="Inserisci email" autofocus>
    
                                    @error('email')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
    
                            <div class="form-group row">
                                <div class="w-100 mb-2">
                                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" placeholder="Inserisci password">
    
                                    @error('password')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                    @enderror
                                </div>
                            </div>
    
                            <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
    
                                        <label class="form-check-label" for="remember">
                                            {{ __('Remember Me') }}
                                        </label>
                                    </div>
                            </div>
    
                            <div class="form-group mt-2">
                            
                                    <button type="submit" class="btn btn-primary d-block">
                                        {{ __('Login') }}
                                    </button>


                                    <div class="d-flex"> 

                                        <a class="btn btn-link" href="{{ route('register') }}">Sign-in</a>
    
    
                                        @if (Route::has('password.request'))
                                            <a style="margin-left: auto" class="btn btn-link text-end " href="{{ route('password.request') }}">
                                                {{ __('Forgot Your Password?') }}
                                            </a>
    
                                            
                                        @endif
    
                                      
                                    </div>
                              
                            </div>

                           
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
@endsection
