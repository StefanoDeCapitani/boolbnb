<?php

namespace App\Providers;
use Braintree\Configuration;
use Illuminate\Support\ServiceProvider;

/* 

use required\brain
use Illuminate\Support\ServiceProvider; */
/* use Braintree_Configuration; */

/* require_once 'PATH_TO_BRAINTREE/lib/Braintree.php'; */

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        
       Configuration::environment(env('BRAINTREE_ENV'));
       Configuration::environment(env('BRAINTREE_ENV'));
       Configuration::merchantId(env('BRAINTREE_MERCHANT_ID'));
       Configuration::publicKey(env('BRAINTREE_PUBLIC_KEY'));
       Configuration::privateKey(env('BRAINTREE_PRIVATE_KEY'));
    }
}
