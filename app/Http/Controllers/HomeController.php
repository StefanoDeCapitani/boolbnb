<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        
        // $flatSponsorship = Flat::where("visible",true)->with("activeSponsorships")->get();
        // $flatsSponsered =[];
        // foreach ($flatSponsorship as $flatActive) {
        //     if (count($flatActive->activeSponsorships) > 0) {
        //         $flatsSponsered[] = $flatActive;
        //     }
        // }
        // return view("welcome",compact('flatsSponsered'));

        return view('home');
    }
}
