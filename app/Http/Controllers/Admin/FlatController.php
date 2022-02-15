<?php

namespace App\Http\Controllers\Admin;

use App\Flat;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFlatRequest;
use App\Image;
use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class FlatController extends Controller
{

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

        $flats = Flat::where('user_id', '=', Auth::id())->with('activeSponsorships')->get();

        return view('admin.dashboard', compact('flats'));
    }

    public function create()
    {
        $services = Service::all();
        
        return view('admin.create', compact('services'));
    }

    public function store(StoreFlatRequest $request)
    {
       
        $data = $request->validated();
     
        $flat = new Flat();
        $flat->fill($data);
        $flat->user_id = Auth::id();


        $title=$data['title'];
        $flat->slug = $this->generateSlug($title);

      
        $cover_img = Storage::put('public/img/',$data['cover_img']);
        $flat->cover_img = $cover_img;

        $flat->save();
        $flat->services()->sync($data["services"]);
    

        $images = $data['images'];
        foreach ($images as $image) {
            $path = Storage::put('public/img',$image);
            $newImage = new Image();
            $newImage->flat_id = $flat->id;
            $newImage->path = $path;
            $newImage->save();
           
        }
    // da completare 
        return redirect()->route('admin.flats.index');
    
    }

    // public function storeImages(Request $request, Flat $flat){
    //     // salvare le immagini nello storage e tabella immagini

    //     return view('show', compact('flat'));
    // }

    public function edit(Flat $flat)
    {
      $services = Service::all();
      

     return view("admin.edit",compact('services','flat'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Flat  $flat
     * @return \Illuminate\Http\Response
     */
    public function update(StoreFlatRequest $request, Flat $flat)
    {
        $data = $request->validated();
        
        $flat->update($data);
        $flat->services()->sync($data["services"]);

        if($data["cover_img"]){
            $cover_img = Storage::put($request->file('cover_img'));
            $flat->cover_img = $cover_img;
            $flat->save();
        }


       
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Flat  $flat
     * @return \Illuminate\Http\Response
     */
    public function destroy(Flat $flat)
    {
        $flat->delete();
        
        return redirect()->route('admin.flats.index');
    }
}
