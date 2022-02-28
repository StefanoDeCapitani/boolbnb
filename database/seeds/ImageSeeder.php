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
                "flat_id" => 2,
                "path" =>"storage/img/miro_loft_romantico_nel_cuore_di_roma1.jpg"
            ],
            [ 
                "flat_id" => 2,
                "path" => "storage/img/miro_loft_romantico_nel_cuore_di_roma2.jpg"
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
                "flat_id" => 5,
                "path" => "storage/img/san_giorgio_flat_intero_alloggio_unita_in_affitto.jpg"
            ],
            [ 
                "flat_id" => 5,
                "path" => "storage/img/san_giorgio_flat_intero_alloggio_unita_in_affitto2.jpg"
            ],
            [ 'flat_id'=> 6, 
            'path' => 'storage/img/roma_alloggio.jpg'
            ],
            [ 'flat_id'=> 6, 
            'path' => 'storage/img/romaaa_all.jpg'
            ],  
            [ 'flat_id'=> 7, 
               'path' => 'storage/img/amazing_roma_lux1.jpg '
            ], 
            
            [ 'flat_id'=> 7, 
               'path' => 'storage/img/amazing_roma_lux2.jpg '
            ], 
            [
              'flat_id'=>8,
              'path' =>'storage/img/principe_amedeo_1.jpeg', 
            ],
            [
              'flat_id'=>8,
              'path' =>'storage/img/principe_amedeo_2.jpeg', 
            ],
            [
                'flat_id'=>9, 
                'path' =>'storage/img/nuova_camera_vicino_al_colosseo_termini_turchese_1.jpeg'
            ],
            [
                'flat_id'=>9, 
                'path' =>'storage/img/nuova_camera_vicino_al_colosseo_termini_turchese_2.jpeg'
            ],
            [
                'flat_id'=>10, 
                'path' =>'storage/img/casa_funari_nel_cuore_di_una_roma_antica_1.jpg'
            ],
            [
                'flat_id'=>10, 
                'path' =>'storage/img/casa_funari_nel_cuore_di_una_roma_antica_2.jpg'
            ],
            [ 
                'flat_id'=>11, 
                'path' => 'storage/img/bruno_domus_trastevere_1.jpeg'
            ],
            [
                'flat_id'=>11, 
                'path' =>'storage/img/bruno_domus_trastevere_2.jpeg'
            ],
            [
                'flat_id'=>12, 
                'path' =>'storage/img/historic_campo_dei_fiori_1.jpg'
            ],
            [
                'flat_id'=>12, 
                'path' =>'storage/img/historic_campo_dei_fiori_2.jpg'
            ],
            [
                'flat_id'=>13, 
                'path' =>'storage/img/trevi_luxury_apartment_1.jpg'
            ],
            [
                'flat_id'=>13, 
                'path' =>'storage/img/trevi_luxury_apartment_2.jpg'
            ],
            [
                'flat_id'=>14, 
                'path' =>'storage/img/angels_love_1.jpg'
            ],
            [
                'flat_id'=>14, 
                'path' =>'storage/img/angels_love_2.jpg'
            ],
            [
                'flat_id'=>15, 
                'path' =>'storage/img/holiday_suite_navona_1.jpg'
            ],
            [
                'flat_id'=>15, 
                'path' =>'storage/img/holiday_suite_navona_2.jpg'
            ],
            [
                'flat_id'=>16, 
                'path' =>'storage/img/fortuna_apartment_1.jpg'
            ],
            [
                'flat_id'=>16, 
                'path' =>'storage/img/fortuna_apartment_2.jpg'
            ],
            [
                'flat_id'=>17, 
                'path' =>'storage/img/primavera_al_colosseo_1.jpg'
            ],
            [
                'flat_id'=>17, 
                'path' =>'storage/img/primavera_al_colosseo_2.jpg'
            ],
            [
                'flat_id'=>18, 
                'path' =>'storage/img/terrazza_roma_est_circelli_1.jpg'
            ],
            [
                'flat_id'=>18, 
                'path' =>'storage/img/terrazza_roma_est_circelli_2.jpg'
            ],
            [
                'flat_id'=>19, 
                'path' =>'storage/img/eur_perfetto_per_coppia_1.jpg'
            ],
            [
                'flat_id'=>19, 
                'path' =>'storage/img/eur_perfetto_per_coppia_2.jpg'
            ],
        ];

        foreach($images as $image){
            $newImage = new Image();
            $newImage->flat_id = $image['flat_id'];
            $newImage->path = $image['path'];
            $newImage->save();
        }
    }
}
