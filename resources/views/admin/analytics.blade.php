@extends('layouts.app')
@section('title-page', 'Analytics page')




@section('content')

<div class="container">  
    <div class="row">  
        <div class="col-md-10 col-md-offset-1">  
            <div class="panel panel-default">  
                <div class="panel-heading">Dashboard</div>  
                <div class="panel-body">  
                    <canvas id="canvas" height="280" width="600" data-messages='@json($messagesMonthly)' data-views='@json($viewsMonthly)'></canvas>  
                </div>  
            </div>  
        </div>  
    </div>  
</div>  



<script>  

    // var year = ['2013','2014','2015', '2016'];  
    var data_message = {{json_encode($messagesMonthly)}};
    var data_views = {{json_encode($viewsMonthly)}};

window.onload = function() {  
    var ctx = document.getElementById("canvas").getContext("2d");  
    window.myBar = new Chart(ctx, {  
        type: 'bar',  // horizontalBar, pie, line 
        data:{
            labels:['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
            datasets:[{
                label:'views',
                data:[
                    124049012,
                    193847819,
                    283747829,
                    12731432,
                    26312,
                    351361
                ]
            }]
        },  
        options: {  
            elements: {  
                rectangle: {  
                    borderWidth: 2,  
                    borderColor: 'rgb(0, 255, 0)',  
                    borderSkipped: 'bottom'  
                }  
            },  
            responsive: true,  
            title: {  
                display: true,  
                text: 'Monthly Website Visitor'  
            }  
        }  
    });  

};  


    
  
    // var barChartData = {  
    //     labels: year,  
    //     datasets: [{  
    //         label: 'Message',  
    //         backgroundColor: "rgba(220,220,220,0.5)",  
    //         data: data_message  
    //     }, {  
    //         label: 'View',  
    //         backgroundColor: "rgba(151,187,205,0.5)",  
    //         data: data_views  
    //     }]  
    // };  
  
   
</script>  
@endsection