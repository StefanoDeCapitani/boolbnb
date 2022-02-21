<?php

namespace App\Http\Controllers\Admin;

use App\Flat;
use App\Http\Controllers\Controller;
use App\Message;
use App\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AnalyticsController extends Controller
{
    public function index($slug){

        $flat = Flat::where('slug',$slug)->first();
    
        $messagesMonthly = Message::select(DB::raw("COUNT(id) as y,month(created_at) as x"))->where('flat_id',$flat->id)->groupBy(DB::raw("x"))->orderBy('x')->get()->toArray() ;
        $messageYearly = Message::select(DB::raw("COUNT(id) as y,year(created_at) as x"))->where('flat_id',$flat->id)->groupBy(DB::raw("x"))->orderBy('x')->get() ;

        $viewsMonthly = View::select(DB::raw("COUNT(flat_id) as y,month(created_at) as x"))->where('flat_id',$flat->id)->groupBy(DB::raw("x"))->orderBy('x')->get() ;
        $viewsYearly = View::select(DB::raw("COUNT(flat_id) as y,year(created_at) as x"))->where('flat_id',$flat->id)->groupBy(DB::raw("x"))->orderBy('x')->get() ;

        
        return view('admin.analytics', compact('messagesMonthly','messageYearly','viewsMonthly','viewsYearly'));
    }
}
