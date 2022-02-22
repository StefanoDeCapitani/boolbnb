<?php

namespace App\Http\Controllers\Admin;

use App\Flat;
use App\Http\Controllers\Controller;
use App\Message;
use App\View;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AnalyticsController extends Controller
{
    private function formatDataChart($queryData){

        $default = collect([
            "January" => 0,
            "February" => 0,
            "Mar" => 0,
            "April" => 0,
            "May" => 0,
            "Jun" => 0,
            "Jul" => 0,
            "Aug" => 0,
            "Sep" => 0,
            "Oct" => 0,
            "Nov" => 0,
            "Dec" => 0
          ]);

          $monthlyData = array_map(function($v){
            return [$v["x"] => $v["y"]];
        }, $queryData);
        
        
        $newArray = array_merge(...$monthlyData);
        return $default->merge($newArray);



    }




    public function index($slug){

        $flat = Flat::where('slug',$slug)->first();
    
        $messagesMonthly = Message::select(DB::raw("COUNT(id) as y,MONTHNAME(created_at) as x"))->where('flat_id',$flat->id)->whereYear('created_at',Carbon::now()->year)->groupBy(DB::raw("x"))->orderBy('x')->get()->toArray() ;
        $messageYearly = Message::select(DB::raw("COUNT(id) as y,year(created_at) as x"))->where('flat_id',$flat->id)->groupBy(DB::raw("x"))->orderBy('x')->get() ;
        $messageChart = $this->formatDataChart($messagesMonthly);
        
  
        
        
       
        
      
   
        



        $viewsMonthly = View::select(DB::raw("COUNT(flat_id) as y,MONTHNAME(created_at) as x"))->where('flat_id',$flat->id)->whereYear('created_at',Carbon::now()->year)->groupBy(DB::raw("x"))->orderBy('x')->get()->toArray() ;
        $viewsYearly = View::select(DB::raw("COUNT(flat_id) as y,year(created_at) as x"))->where('flat_id',$flat->id)->groupBy(DB::raw("x"))->orderBy('x')->get() ;
        $viewsChart = $this->formatDataChart($viewsMonthly);
       



        
        return view('admin.analytics', compact('messageChart','messageYearly','viewsChart','viewsYearly'));
    }
}
