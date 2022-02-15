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
        return view("index",compact('flatsSponsered'));
    }

  
    public function show($slug)
    {
    
    $flat = Flat::where('slug',$slug)->first();
   
   
     return view("show", compact("flat"));
    }
}
