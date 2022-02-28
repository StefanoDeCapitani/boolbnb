@extends('layouts.app')
@section('title-page', 'Analytics page')
@section("links")
<script src="{{ asset("js/charts.js")}}" defer></script>
@endsection

@section('content')

<div class="container mt-4 py-5">  
    <div class="row d-flex justify-content-center">  
        <div class="col-md-10">  
            <h3 class="mt-3 mb-5 text-center">{{ $flat->title }}<h3> 
            <div class="panel panel-default m-5">  
                <div class="chart-description">Analytics mensili dell'anno corrente:</div>
                <div class="panel-body">  
                    <canvas id="analyticsPerMonth" height="280" width="700" data-messages='@json($messagesMonthly)' data-views='@json($viewsMonthly)'></canvas>  
                </div>  
            </div>  
            <div class="panel panel-default m-5">  
                <div class="chart-description">Analytics degli ultimi 5 anni:</div>
                <div class="panel-body">  
                    <canvas id="analyticsPerYear" height="280" width="700" data-messages='@json($messagesYearly)' data-views='@json($viewsYearly)'></canvas> 
                </div>  
            </div>  
        </div>  
    </div>  
</div>   
@endsection