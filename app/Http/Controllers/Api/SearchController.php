<?php

namespace App\Http\Controllers\Api;

use App\Flat;
use App\Http\Controllers\Controller;
use App\Http\Requests\FilterRequest;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index(){

      
        $flats = Flat::all();

        return response()->json($flats);
    }
}
