<?php

use Illuminate\Database\Seeder;
use App\Image;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $images = [
            [ 
                "flat_id" => 1,
                "path" => asset("storage/img/Intero alloggio unità in affitto - Host Katja - Interhome Group1.jpg")
            ],
            [ 
                "flat_id" => 1,
                "path" => asset("storage/img/Intero alloggio unità in affitto - Host Katja - Interhome Group2e.jpg")
            ],
            [ 
                "flat_id" => 3,
                "path" => asset("storage/img/La terrazza con vista del castello.jpg")
            ],
            [ 
                "flat_id" => 3,
                "path" => asset("storage/img/La terrazza con vista del castello2.jpg")
            ],
            [ 
                "flat_id" => 4,
                "path" => asset("storage/img/Luxury Apartment Villa Le Rose with pool1.jpg")
            ],
            [ 
                "flat_id" => 4,
                "path" => asset("storage/img/Luxury Apartment Villa Le Rose with pool2.jpg")
            ],
            [ 
                "flat_id" => 2,
                "path" => asset("storage/img/Mirò loft romantico nel cuore di Roma2.jpg")
            ],
            [ 
                "flat_id" => 2,
                "path" => asset("storage/img/MiròloftromanticonelcuorediRoma.jpg")
            ],
            [ 
                "flat_id" => 5,
                "path" => asset("storage/img/San Giorgio Flat Intero alloggio unità in affitto.jpg")
            ],
            [ 
                "flat_id" => 5,
                "path" => asset("storage/img/San Giorgio Flat Intero alloggio.jpg")
            ]
        ];

        foreach($images as $image){
            $newImage = new Image();
            $newImage->flat_id = $image['flat_id'];
            $newImage->path = $image['path'];
            $newImage->save();
        }
    }
}
