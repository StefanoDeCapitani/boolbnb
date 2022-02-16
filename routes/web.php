<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'FlatController@index');


Route::namespace('Admin')
->middleware('auth')
->prefix('admin')
->name('admin.')
->group( function(){
    Route::resource("flats","FlatController");
    /* Route::resource("sponsorship","SponsorshipController"); */

    Route::get('/flats/{slug}/sponsorship', 'FlatSponsorshipController@create')->name('sponsorship');
    Route::post('/flats/{slug}/sponsorship', 'FlatSponsorshipController@store')->name('sponsorship.store');

});


// Route::post('/flats/{slug}/images', 'FlatController@storeImages')->name('admin.flats.storeimages');
Auth::routes();

