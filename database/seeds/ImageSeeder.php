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
                "path" => "storage\app\public\img\intero_alloggio_unità_in_affitto.jpg"
            ],
            [ 
                "flat_id" => 1,
                "path" => "storage\app\public\img\intero_alloggio unità_in_affitto2.jpg"
            ],
            [ 
                "flat_id" => 3,
                "path" =>"storage\app\public\img\la_terrazza_con vista_del_castello.jpg"
            ],
            [ 
                "flat_id" => 3,
                "path" => "storage\app\public\img\la_terrazza_con_vista_del_castello2.jpg"
            ],
            [ 
                "flat_id" => 4,
                "path" => "storage\app\public\img\luxury_apartment_villa_le_rose_with_pool1.jpg"
            ],
            [ 
                "flat_id" => 4,
                "path" => "storage\app\public\img\luxury_apartment_villa_le_rose_with_pool2.jpg"
            ],
            [ 
                "flat_id" => 2,
                "path" =>"storage\app\public\img\miro_loft_romantico_nel_cuore_di_roma1.jpg"
            ],
            [ 
                "flat_id" => 2,
                "path" => "storage\app\public\img\miro_loft_romantico_nel_cuore_di_roma2.jpg"
            ],
            [ 
                "flat_id" => 5,
                "path" => "storage\app\public\img\san_giorgio_flat_intero_alloggio_unità_in_affitto.jpg"
            ],
            [ 
                "flat_id" => 5,
                "path" => "storage\app\public\img\san_giorgio_flat_intero_alloggio_unità_in_affitto2.jpg"
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
