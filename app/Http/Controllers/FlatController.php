<?php

namespace App\Http\Controllers;

use App\Flat;
use App\View;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

class FlatController extends Controller
{
    public function index()
    {
        $flatSponsorship = Flat::where("visible",true)->with("activeSponsorships")->get();
        $flatsSponsered = [];
        foreach ($flatSponsorship as $flatActive) {
            if (count($flatActive->activeSponsorships) > 0) {
                $flatsSponsered[] = $flatActive;
            }
        }
        
        
        if (count($flatsSponsered) > 8) {
            $flatsSponsered = array_slice($flatsSponsered, 8 );
        }
        return view("index",compact('flatsSponsered'));
    }

  
    public function show($slug)
    {
        // $flat = Flat::where('slug',$slug);
        
        if(Auth::user()){
            $flat = Flat::where('slug',$slug)->first();
            if(Auth::id() !== $flat->user_id && $flat->visible === 0){
                return abort(403, 'Unauthorized action.');
            }

        }else{
            $flat = Flat::where('slug',$slug)->where("visible", true)->first();
            if($flat === null) {
                return abort(403, 'Unauthorized action.');
            }
        } 
        if(Auth::id() !== $flat->user_id){
            $view = [
                "flat_id" => $flat->id,
                "ip" => request()->ip()
                ];
            if(Auth::id()){ 
                $view["user_id"] = Auth::id();
            };
            $newView = new View();
            $newView->fill($view);
            $newView->save();
        }
        
     return view("show", compact("flat"));
    }
}
