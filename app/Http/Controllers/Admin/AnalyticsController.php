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
    private function formatMonthlyDataChart($queryData){

        $default = collect([
            "Jan" => 0,
            "Feb" => 0,
            "Mar" => 0,
            "Apr" => 0,
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
            return [substr($v["x"], 0, 3) => $v["y"]];
        }, $queryData);
        
        
        $newArray = array_merge(...$monthlyData);
        return $default->merge($newArray);
    }

    private function formatYearlyDataChart($queryData){
        $yearlyData = array_map(function($v){
            return [$v["x"] => $v["y"]];
        }, $queryData);

        $lastFiveYears = [];
        for($i = 4; $i >= 0; $i--){
            $lastFiveYears[Carbon::now()->year - $i] = 0;
        }

        foreach($yearlyData as $data){
            foreach($data as $year=>$value){
                $lastFiveYears[$year] = $value;
            }
        }
        return $lastFiveYears;
    }


    public function index($slug){

        $flat = Flat::where('slug',$slug)->first();
    
        $messagesMonthly = Message::select(DB::raw("COUNT(id) as y, MONTHNAME(created_at) as x"))->where('flat_id',$flat->id)->whereYear('created_at',Carbon::now()->year)->groupBy(DB::raw("x"))->orderBy('x')->get()->toArray();
        $messagesMonthly = $this->formatMonthlyDataChart($messagesMonthly);

        $messagesYearly = Message::select(DB::raw("COUNT(id) as y, year(created_at) as x"))->where('flat_id',$flat->id)->whereYear('created_at', ">", Carbon::now()->year - 5)->groupBy(DB::raw("x"))->orderBy('x')->get()->toArray();
        $messagesYearly = $this->formatYearlyDataChart($messagesYearly);

        $viewsMonthly = View::select(DB::raw("COUNT(flat_id) as y, MONTHNAME(created_at) as x"))->where('flat_id',$flat->id)->whereYear('created_at',Carbon::now()->year)->groupBy(DB::raw("x"))->orderBy('x')->get()->toArray();
        $viewsMonthly = $this->formatMonthlyDataChart($viewsMonthly);

        $viewsYearly = View::select(DB::raw("COUNT(flat_id) as y, year(created_at) as x"))->where('flat_id',$flat->id)->whereYear('created_at', ">",Carbon::now()->year - 5)->groupBy(DB::raw("x"))->orderBy('x')->get()->toArray();
        $viewsYearly = $this->formatYearlyDataChart($viewsYearly);

        return view('admin.analytics', compact('flat', 'messagesMonthly','messagesYearly','viewsMonthly','viewsYearly'));
    }
}
