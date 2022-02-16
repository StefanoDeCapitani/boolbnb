<?php

use Illuminate\Database\Seeder;
use App\Flat;
use App\Service;
use Illuminate\Support\Str;


class FlatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $flats = [
            [
                'user_id' => 1,
                'title' => 'Intero alloggio: unità in affitto - Host: Katja - Interhome Group',
                'n_rooms' => 1,
                'n_beds' => 2,
                'n_bathrooms' => 1, 
                'sq_meters' => 100, 
                'visible' => true, 
                'address' =>  'Via Miscaslano, 22, 22013 Domaso CO', 
                'lat' => '46.151107620494855', 
                'lon' => '9.324520772846045', 
                'night_price' => 99, 
                'cover_img' =>"storage/img/cover_image_intero_alloggio_unita_in_affitto.jpeg"
            ],
            [
                'user_id' => 1,
                "title"=> "Mirò loft romantico nel cuore di Roma",
                "n_rooms"=> 1,
                "n_beds"=> 2,
                "n_bathrooms"=> 1,
                "sq_meters"=> 40,
                "visible"=> true,
                "address"=> "Via Giulia, 87, 00186 Roma RM",
                "lat"=>"41.89924070753656",
                "lon"=>"12.465588775959976",
                "night_price"=> 115,
                "cover_img"=> "storage/img/cover_image_miro_loft_romantico.jpg",
            ],
            [
                'user_id' => 2,
                'title'=> 'La terrazza con vista del castello',
                'n_rooms'=> 4,
                'n_beds' => 6,
                'n_bathrooms' => 1,
                'sq_meters'=> 80,
                'visible'=> true,
                'address'=>"Torre dell'Elefante, Via Santa Croce, Cagliari, CA",
                'lat'=> "39.21819137358091",
                'lon'=>"9.114957126985011",
                'night_price'=> 89,99,
                'cover_img'=> "storage/img/cover_image_la_terrazza_con_vista.jpg"
            ],
            [
                'user_id' => 1,
                'title' => 'Luxury Apartment Villa Le Rose with pool',
                'n_rooms' => 3,
                'n_beds' => 5,
                'n_bathrooms' => 2,
                'sq_meters' => 300,
                'visible' => true,
                'address' => 'Via Pangino, 23, 22010 Carate Urio CO',
                'lat' => '45.8685924113302',
                'lon' => '9.114520520242015',
                'night_price' => 380,
                'cover_img' => "storage/img/cover_image_luxury_apartment.jpeg",
            ],
            [
                'user_id' => 2,
                'title' => 'San Giorgio Flat, Intero alloggio: unità in affitto',
                'n_rooms' => 1,
                'n_beds' => 1,
                'n_bathrooms' => 1,
                'sq_meters' => 110,
                'visible' => true,
                'address' => 'Via dei Velluti 26/r, Firenze',
                'lat' => '43.766890',
                'lon' => '11.250010',
                'lon' => '11.250010',
                'night_price' => 90,
                'cover_img' => "storage/img/cover_image_san_giorgio_flat.jpg"
            ]
        ];

        foreach($flats as $flat){
            $newFlat = new Flat();

            $newFlat->user_id= $flat['user_id'];
            $newFlat->title= $flat['title'];
            $newFlat->n_rooms= $flat['n_rooms'];
            $newFlat->n_beds= $flat['n_beds'];
            $newFlat->n_bathrooms= $flat['n_bathrooms'];
            $newFlat->sq_metres= $flat['sq_meters'];
            $newFlat->visible= $flat['visible'];
            $newFlat->address= $flat['address'];
            $newFlat->lat= $flat['lat'];
            $newFlat->lon= $flat['lon'];
            $newFlat->night_price= $flat['night_price'];
            $newFlat->cover_img= $flat['cover_img'];
            $newFlat->slug = Str::slug($flat["title"]);
            $newFlat->save();
        }
    }
}
