<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Index</h1>  
    <div>
        @dump($flatsSponsered)
        @foreach ($flatsSponsered as $flat)
        <h5>{{$flat->title}}</h5>
        
            
        @endforeach
    </div>
</body>
</html>