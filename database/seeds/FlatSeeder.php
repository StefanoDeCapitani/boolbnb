<?php

use Illuminate\Database\Seeder;
use App\Flat;
use App\Service;

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
                'sq_meters' => '100', 
                'visible' => true, 
                'address' =>  'Via Miscaslano, 22, 22013 Domaso CO', 
                'lat' => '46.151107620494855', 
                'lon' => '9.324520772846045', 
                'night_price' => '99', 
                'cover_img' =>'https://a0.muscache.com/im/pictures/prohost-api/Hosting-18598349/original/a977c1ed-2fdd-4359-b8f2-dc890197a79f.jpeg?im_w=1200' 
            ],
            [
                'user_id' => 1,
                "title"=> "Mirò loft romantico nel cuore di Roma",
                "n_rooms"=> 1,
                "n_beds"=> 2,
                "n_bathrooms"=> 1,
                "sq_meters"=> "40",
                "visible"=> true,
                "address"=> "Via Giulia, 87, 00186 Roma RM",
                "lat"=>"41.89924070753656",
                "lon"=>"12.465588775959976",
                "night_price"=> "115",
                "cover_img"=>"https://a0.muscache.com/im/pictures/f9c543ce-1e76-4fb7-b1fb-6ad694011c85.jpg?im_w=1200",
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
                'night_price'=> "89,99",
                'cover_img'=>'https://www.erato.it/contents/images/62f5d8d1-f948-4f26-82e2-841a1da88c29.jpg'
            ],
            [
                'user_id' => 1,
                'title' => 'Luxury Apartment Villa Le Rose with pool',
                'n_rooms' => 3,
                'n_beds' => 5,
                'n_bathrooms' => 2,
                'sq_meters' => '300',
                'visible' => true,
                'address' => 'Via Pangino, 23, 22010 Carate Urio CO',
                'lat' => '45.8685924113302',
                'lon' => '9.114520520242015',
                'night_price' => '380',
                'cover_img' => 'https://a0.muscache.com/im/pictures/ca3093d8-5d4f-40d0-8615-3b26b331ebc9.jpg?im_w=960',
            ],
            [
                'user_id' => 2,
                'title' => 'San Giorgio Flat, Intero alloggio: unità in affitto',
                'n_rooms' => 1,
                'n_beds' => 1,
                'n_bathrooms' => 1,
                'sq_meters' => '110',
                'visible' => true,
                'address' => 'Via dei Velluti 26/r, Firenze',
                'lat' => '43.766890',
                'lon' => '11.250010',
                'lon' => '11.250010',
                'night_price' => '90',
                'cover_img' => '[https://a0.muscache.com/im/pictures/56034745-8587-4891-b985-5d7bd3097c0e.jpg?im_w=1200](https://a0.muscache.com/im/pictures/56034745-8587-4891-b985-5d7bd3097c0e.jpg?im_w=1200)'
            ]
        ];

        // Le seguenti linee sono commentate perchè c'è da lavorarci. Probabilmente vanno sistemate.

        $services = [
            [
                3, 1, 2
            ],
            [
                0
            ],
            [
                1, 4, 3
            ],
            [
                3, 2, 1, 0
            ],
            [
                1
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
            $newFlat->save();

            /* $newFlat->services()->sync($services[$i]); */
        }
    }
}
