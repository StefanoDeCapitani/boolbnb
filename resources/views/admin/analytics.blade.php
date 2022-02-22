@extends('layouts.app')
@section('title-page', 'Analytics page')




@section('content')

<div class="container">  
    <div class="row">  
        <div class="col-md-10 col-md-offset-1">  
            <div class="panel panel-default">  
                <div class="panel-heading">Dashboard</div>  
                <div class="panel-body">  
                    <canvas id="analyticsPerMonth" height="280" width="600" data-messages='@json($messagesMonthly)' data-views='@json($viewsMonthly)'></canvas>  
                    <canvas id="analyticsPerYear" height="280" width="600" data-messages='@json($messagesYearly)' data-views='@json($viewsYearly)'></canvas>
                </div>  
            </div>  
        </div>  
    </div>  
</div>  



<script>  

 
  
   
</script>  
@endsection