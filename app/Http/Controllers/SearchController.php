<?php

namespace App\Http\Controllers;

use App\Service;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index() {
        
    $services= Service::all();

        return view('search', compact('services'));
    }
}
