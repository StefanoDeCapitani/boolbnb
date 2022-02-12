<?php

namespace App\Http\Controllers;

use App\Flat;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class FlatController extends Controller
{
    public function index()
    {
        $flatSponsorship = Flat::where("visible",true)->with("activeSponsorships")->get();
        $flatsSponsered =[];
        foreach ($flatSponsorship as $flatActive) {
            if (count($flatActive->activeSponsorships) > 0) {
                $flatsSponsered[] = $flatActive;
            }
        }
        return view("home", compact('flatsSponsored'));
    }

  
    public function show(Flat $flat)
    {
      
    }
}
