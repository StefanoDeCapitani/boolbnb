<?php

namespace App\Http\Controllers;

use App\Flat;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class FlatController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generateSlug($title){
        $slug = Str::slug($title);
        $counter = 1;
        if (Flat::where('slug', $slug)->first() === $slug) {
            $newSlug = $slug . '-' . $counter;
            $counter++;

            return $newSlug;
        }

        return $slug;
    }

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
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $flat = new Flat();
        $flat->fill($request->all());


        $title=$request->only('title');
        $flat->slug = $this->generateSlug($title);

        $flat->save();
    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Flat  $flat
     * @return \Illuminate\Http\Response
     */
    public function show(Flat $flat)
    {
      
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Flat  $flat
     * @return \Illuminate\Http\Response
     */
    public function edit(Flat $flat)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Flat  $flat
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Flat $flat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Flat  $flat
     * @return \Illuminate\Http\Response
     */
    public function destroy(Flat $flat)
    {
        //
    }
}
