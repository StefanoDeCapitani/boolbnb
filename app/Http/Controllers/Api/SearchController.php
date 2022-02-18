<?php

namespace App\Http\Controllers\Api;

use App\Flat;
use App\Http\Controllers\Controller;
use App\Http\Requests\FilterRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function index(FilterRequest $request){

        $data = $request->validated();
    //     $polygon = "Polygon((";
    //     foreach($data["polygon"] as $i => $point){
    //         $polygon .= $point[0] . ' '. $point[1];
    //         if($i < count($data["polygon"]) -1){
    //             $polygon .= ", ";
    //         }
    //     }
    //     $polygon.="))";
    //    $flats = DB::select("SELECT* FROM `flats` WHERE MBRContains(ST_GeomFromText(?), ST_GeomFromText(CONCAT('POINT(`,lon, ' ',lat, `)')))", [$polygon]);
       
              $flats = Flat::query();
        
            if($data['bathrooms']){
                $flats->where('n_bathrooms','>',$data['bathrooms']);
            }
            if($data['beds']){
                $flats->where('n_beds','>',$data['beds']);
            }
            if($data['rooms']){
                $flats->where('n_rooms','>',$data['rooms']);
            }
            // if(count($data['activeServices'])){
            //     $flats->with('services');
            //     foreach ($data['activeServices'] as $service) {
            //         $flats->where('service_id',$service);
            //     }
            // }

        
        $flats = $flats->get();
        
        

        return response()->json($flats);
    }
}
