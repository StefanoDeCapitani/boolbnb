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
                "path" => "storage/img/intero_alloggio_unita_in_affitto.jpg"
            ],
            [ 
                "flat_id" => 1,
                "path" => "storage/img/intero_alloggio_unita_in_affitto2.jpg"
            ],
            [ 
                "flat_id" => 3,
                "path" =>"storage/img/la_terrazza_con_vista_del_castello.jpg"
            ],
            [ 
                "flat_id" => 3,
                "path" => "storage/img/la_terrazza_con_vista_del_castello2.jpg"
            ],
            [ 
                "flat_id" => 4,
                "path" => "storage/img/luxury_apartment_villa_le_rose_with_pool1.jpg"
            ],
            [ 
                "flat_id" => 4,
                "path" => "storage/img/luxury_apartment_villa_le_rose_with_pool2.jpg"
            ],
            [ 
                "flat_id" => 2,
                "path" =>"storage/img/miro_loft_romantico_nel_cuore_di_roma1.jpg"
            ],
            [ 
                "flat_id" => 2,
                "path" => "storage/img/miro_loft_romantico_nel_cuore_di_roma2.jpg"
            ],
            [ 
                "flat_id" => 5,
                "path" => "storage/img/san_giorgio_flat_intero_alloggio_unita_in_affitto.jpg"
            ],
            [ 
                "flat_id" => 5,
                "path" => "storage/img/san_giorgio_flat_intero_alloggio_unita_in_affitto2.jpg"
            ],
            [ 'flat_id'=> 6, 
               'path' => 'storage/img/amazing_roma_lux1.jpg '
            ], 
            
            [ 'flat_id'=> 6, 
               'path' => 'storage/img/amazing_roma_lux2.jpg '
            ], 
            [ 'flat_id'=> 7, 
            'path' => 'storage/img/roma_alloggio.jpg'
            ],
            [ 'flat_id'=> 7, 
            'path' => 'storage/img/romaaa_alll.jpg'
            ],  
            [
              'flat_id'=>8,
              'path' =>'storage/img/principe_amedeo_2.jpeg', 
            ],
            [ 
                'flat_id'=>9, 
                'path' => 'storage/img/bruno_domus_trastevere_1.jpeg'
            ],
            [
                'flat_id'=>9, 
                'path' =>'storage/img/bruno_domus_trastevere_2.jpeg'
            ],
            [
                'flat_id'=>10, 
                'path' =>'storage/img/nuova_camera_vicino_al_colosseo_termini_turchese_1.jpeg'
            ],
            [
                'flat_id'=>10, 
                'path' =>'storage/img/nuova_camera_vicino_al_colosseo_termini_turchese_2.jpeg'
            ],
            [
                'flat_id'=>11, 
                'path' =>'storage/img/casa_funari_nel_cuore_di_una_roma_antica_1.jpg'
            ],
            [
                'flat_id'=>11, 
                'path' =>'storage/img/casa_funari_nel_cuore_di_una_roma_antica_2.jpg'
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
