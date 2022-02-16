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
        return view("index",compact('flatsSponsered'));
    }

  
    public function show($slug)
    {
        if(Auth::user()){
            $flat = Flat::where('slug',$slug)->first();
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
