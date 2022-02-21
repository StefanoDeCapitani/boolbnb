<?php

namespace App\Http\Controllers\Admin;

use App\Flat;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFlatRequest;
use App\Http\Requests\UpdateFlatRequest;
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

      
        $cover_img = Storage::put('public/img',$data['cover_img']);
        $flat->cover_img =  'storage'. str_replace('public','',$cover_img);

        $flat->save();
        if ($data['services'][0]) {
                $services = explode(',',$data['services'][0]);
                $flat->services()->sync($services);
            }
    

        $images = $data['images'];
        foreach ($images as $image) {
            $path = Storage::put('public/img',$image);
            $path = 'storage'. str_replace('public','',$path);
            $newImage = new Image();
            $newImage->flat_id = $flat->id;
            $newImage->path = $path;
            $newImage->save();
           
        }
        return redirect()->route('admin.flats.index');
    
    }

    public function edit(Flat $flat)
    {
        $services = Service::all();
        $flatServices = $flat->services()->get()->map(function ($service) {
            return $service->id;
        });

        $flatServices=$flatServices->toArray();

        return view("admin.edit",compact('services','flat','flatServices'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Flat  $flat
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateFlatRequest $request, Flat $flat)
    {
        $data = $request->validated();
        $cover_img=$flat->cover_img;
        $data['slug'] = $this->generateSlug($data['title']);
        $flat->update($data);
        

        if($request->has('cover_img')){
            Storage::delete($cover_img);
            $cover_img = Storage::put('public/img', $data['cover_img']);
            $flat->cover_img = 'storage'. str_replace('public','',$cover_img);
            $flat->save();
        }

        if($request->has('images')){
            $oldImages = $flat->images()->get();
            dump($oldImages->toArray());
          
            foreach($oldImages as $oldImage){
               
                Storage::delete($oldImage->path);
                $oldImage->delete();
            }
            
            $images = $data['images'];
            foreach ($images as $image) {
                $path = Storage::put('public/img',$image);
                $newImage = new Image();
                $newImage->flat_id = $flat->id;
                $newImage->path = 'storage'. str_replace('public','',$path);
                $newImage->save();
               
            }
            
         

        }

        if ($request->has('services')) {
           
            if ($data['services'][0]) {
                $services = explode(',',$data['services'][0]);
                $flat->services()->sync($services);
            }
        }

        return redirect()->route('flats.show',$flat->slug);        
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
