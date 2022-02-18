<?php

namespace App\Http\Controllers\Api;

use App\Flat;
use App\Service;
use App\Http\Controllers\Controller;
use App\Http\Requests\FilterRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function index(FilterRequest $request){

        $data = $request->validated();
        
      $polygon = "POLYGON((";
        foreach($data["polygon"] as $point){
        $polygon .= $point[0] . ' '. $point[1] . ", ";
        }
        $polygon.= $data["polygon"][0][0] . " " . $data["polygon"][0][1] . "))";
        // $flats = DB::table("flats");

            $flats = Flat::query();
            $flats->whereRaw("MBRContains(ST_GeomFromText(?), ST_GeomFromText(CONCAT('POINT(',lon, ' ',lat, ')')))", [$polygon]);
        
            if($data['bathrooms']){
                $flats->where('n_bathrooms','>=',$data['bathrooms']);
            }
            if($data['beds']){
                $flats->where('n_beds','>=',$data['beds']);
            }
            if($data['rooms']){
                $flats->where('n_rooms','>=',$data['rooms']);
            }

            if(count($data['activeServices'])){
                foreach ($data['activeServices'] as $service) {
                    $flats = $flats->whereHas('services', function($query) use ($service) {
                        $query->where('service_id', $service);
                    });
                }             
            }
            $flats = $flats->where('visible', true);
            $flats->orderByRaw("ST_Distance_Sphere(ST_GeomFromText(CONCAT('POINT(',lon, ' ',lat, ')')), ST_GeomFromText('POINT(? ?)'))", [$data['lat'],$data['lng']]);
            $queryS = $flats;
            $flats = $flats->get();
            $activeSponsorship = $queryS->get();


            return response()->json(['flats'=>$activeSponsorship]);

    }
}
