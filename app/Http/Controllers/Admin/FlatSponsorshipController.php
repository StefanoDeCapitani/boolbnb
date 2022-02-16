<?php

namespace App\Http\Controllers\Admin;

use App\Flat;
use App\Http\Controllers\Controller;
use App\Sponsorship;
use Illuminate\Http\Request;

class FlatSponsorshipController extends Controller
{
    public function create(){
        $sponsorData= Sponsorship::all();

        return view('admin.sponsorship', compact('sponsorData'));
    }
    public function store(Request $request){
        $sponsorValue= $request->only('sponsorship');

        $slug = $request->route('slug');
        
        $flat= Flat::where('slug', $slug)->first();
        $sponsorship= Sponsorship::findOrFail($sponsorValue);

        /* $flatId = $flat->id; */

        /* dd($sponsorship); */

        /* $newSponsorship = new S */
        
    }
}
