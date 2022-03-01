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
            ],
            [
                'user_id' => 2,
                'title' => 'Alloggio Roma',
                'n_rooms' => 1,
                'n_beds' => 2,
                'n_bathrooms' => 1, 
                'sq_meters' => 100, 
                'visible' => true, 
                'address' =>  'Via del Governo Vecchio, 88, 00186 Roma RM', 
                'lat' => '41.898212749776555', 
                'lon' => '12.471596417080288', 
                'night_price' => 99, 
                'cover_img' =>"storage/img/roma_all.jpg"
            ],
            [
                'user_id' => 1,
                'title' => 'Amazing Roma Lux',
                'n_rooms' => 1,
                'n_beds' => 2,
                'n_bathrooms' => 1, 
                'sq_meters' => 80, 
                'visible' => true, 
                'address' =>  'Vicolo Sforza Cesarini, 2, 00186 Roma RM', 
                'lat' => '41.898723651873006', 
                'lon' => '12.46775662449579', 
                'night_price' => 99, 
                'cover_img' =>"storage/img/amazing_roma_lux.jpg"

            ],
            [  
                'user_id'=>2,
               'title' => "Stanza privata in appartamento - Host: Helen", 
               'n_bathrooms' => 1, 
               'n_rooms' => 1, 
               'n_beds' => 1, 
               'lat'=> '41.90250380717655', 
               'lon' => '12.497263608239923',
                'address' => 'Via Principe Amedeo, 2, 00185 Roma RM', 
                'sq_meters' => 20,
                'visible' => true,
                'night_price' => 50 ,
                'cover_img' => 'storage/img/cover_img_principe_amedeo.jpeg',
            ],
            [
                'user_id' => 1,
                'title' => 'NUOVA CAMERA VICINO AL COLOSSEO/TERMINI TURCHESE',
                'n_rooms' => 1,
                'n_beds' => 2,
                'n_bathrooms' => 1,
                'sq_meters' => 30,
                'visible' => true,
                'address' =>  'Via di Porta Labicana, 35, 00185 Roma RM',
                'lat' => '41.89534067529945',
                'lon' => '12.51293748272684',
                'night_price' => 49,
                'cover_img' =>"storage/img/nuova_camera_vicino_al_colosseo_termini_turchese_cover.jpeg",
            
            ],
            // appartamento 10 casa funari
            [
                'user_id' => 1,
                'title' => 'Casa Funari, nel cuore di una Roma antica',
                'n_rooms' => 1,
                'n_beds' => 1,
                'n_bathrooms' => 1,
                'sq_meters' => 50,
                'visible' => true,
                'address' =>  'Via Michelangelo Caetani, 6',
                'lat' => '41.89462701975429',
                'lon' => '12.478419746479682',
                'night_price' => 90,
                'cover_img' =>"storage/img/casa_funari_nel_cuore_di_una_roma_antica_cover.jpg",
               
            ],
            [ 
               'title' => "Luxury Loft fino a 5pax / BRUNO DOMUS TRASTEVERE",
               'n_bathrooms' => 1, 
               'n_rooms' => 1,
               'n_beds' => 3,
               'lat'=> '41.883852725661136', 
               'lon' => '12.46819208452245',
                'address' => 'Viale Aurelio Saffi, 4b, 00153 Roma RM',  
                'cover_img' => 'storage/img/cover_img_bruno_domus_trastevere.jpeg', 
                'user_id' => 2, 
                'sq_meters' => 100,
                'visible' => true,
                'night_price' => 150
            ],
            [ 
               'title' => "Historic center Campo dei Fiori",
               'n_bathrooms' => 1, 
               'n_rooms' => 1,
               'n_beds' => 1,
               'lat'=> '41.89259109595948', 
               'lon' => ' 12.47509126415321',
                'address' => 'Via Arenula, 41, 00186 Roma RM',  
                'cover_img' => 'storage/img/historic_campo_dei_fiori_cover.jpg', 
                'user_id' => 2, 
                'sq_meters' => 60,
                'visible' => true,
                'night_price' => 56
            ],
            [ 
               'title' => "Trevi Luxury Apartment",
               'n_bathrooms' => 1, 
               'n_rooms' => 1,
               'n_beds' => 1,
               'lat'=> '41.90031060959034', 
               'lon' => '12.4819361725756',
                'address' => 'Via Santa Maria in Via, 26, 00187 Roma RM',  
                'cover_img' => 'storage/img/trevi_luxury_apartment_cover.jpg', 
                'user_id' => 2, 
                'sq_meters' => 70,
                'visible' => true,
                'night_price' => 60
            ],
            [ 
               'title' => "Angel's love",
               'n_bathrooms' => 1, 
               'n_rooms' => 1,
               'n_beds' => 1,
               'lat'=> '41.900413247844085', 
               'lon' => '12.467280533254884',
                'address' => 'Vicolo della Campanella, 16, 00186 Roma RM',  
                'cover_img' => 'storage/img/angels_love_cover.jpg', 
                'user_id' => 2, 
                'sq_meters' => 50,
                'visible' => true,
                'night_price' => 59
            ],
            [ 
               'title' => "Holidays Suites Navona -3",
               'n_bathrooms' => 1, 
               'n_rooms' => 1,
               'n_beds' => 2,
               'lat'=> '41.89948819577085', 
               'lon' => '12.47207289893885',
                'address' => "Via di Santa Maria dell'Anima, 00186 Roma RM",  
                'cover_img' => 'storage/img/holiday_suite_navona_cover.jpg', 
                'user_id' => 2, 
                'sq_meters' => 30,
                'visible' => true,
                'night_price' => 97
            ],
            [ 
               'title' => "Fortuna Apartment Trastevere II",
               'n_bathrooms' => 1, 
               'n_rooms' => 1,
               'n_beds' => 2,
               'lat'=> '41.88886624016033', 
               'lon' => '12.474826835384631',
                'address' => "Via di Monte Fiore, 15, 00153 Roma RM",  
                'cover_img' => 'storage/img/fortuna_apartment_cover.jpg', 
                'user_id' => 2, 
                'sq_meters' => 40,
                'visible' => true,
                'night_price' => 87
            ],
            [ 
               'title' => "Primavera al Colosseo",
               'n_bathrooms' => 1, 
               'n_rooms' => 1,
               'n_beds' => 2,
               'lat'=> '41.89195300875546', 
               'lon' => '12.50216896482262',
                'address' => "Via Merulana, 83, 00185 Roma RM",  
                'cover_img' => 'storage/img/primavera_al_colosseo_cover.jpg', 
                'user_id' => 1, 
                'sq_meters' => 60,
                'visible' => true,
                'night_price' => 50
            ],
            [ 
               'title' => "Appartamento con Terrazza Roma Est Circelli House",
               'n_bathrooms' => 1, 
               'n_rooms' => 2,
               'n_beds' => 3,
               'lat'=> '41.94326114279241', 
               'lon' => '12.580000913624811',
                'address' => "Via Fossombrone, 95-51, 00156 Roma RM",  
                'cover_img' => 'storage/img/terrazza_roma_est_circelli_cover.jpg', 
                'user_id' => 1, 
                'sq_meters' => 60,
                'visible' => true,
                'night_price' => 90
            ],
            [ 
               'title' => "Eur- Perfetto per una Coppia",
               'n_bathrooms' => 1, 
               'n_rooms' => 1,
               'n_beds' => 2,
               'lat'=> '41.78892618964554', 
               'lon' => '12.442988260514007',
                'address' => "Via Carlo Avolio, 61, 00128 Roma RM",  
                'cover_img' => 'storage/img/eur_perfetto_per_coppia_cover.jpg', 
                'user_id' => 1, 
                'sq_meters' => 100,
                'visible' => true,
                'night_price' => 43
            ],
            [ 
               'title' => "Attico centralissimo vista mare a mezz’ora da Roma",
               'n_bathrooms' => 1, 
               'n_rooms' => 1,
               'n_beds' => 2,
               'lat'=> '41.62438616663468', 
               'lon' => '12.462078633817523',
                'address' => "Viale Italia, 37, 00040 Torvaianica RM",  
                'cover_img' => 'storage/img/eur_perfetto_per_coppia_cover.jpg', 
                'user_id' => 1, 
                'sq_meters' => 100,
                'visible' => true,
                'night_price' => 80
            ],
            [ 
                'user_id' => 1,
                'title' => 'Villa Rosa, piccola e tranquilla',
                'n_rooms' => 2,
                'n_beds' => 2,
                'n_bathrooms' => 1,
                'sq_meters' => 80,
                'visible' => true,
                'address' =>  'Via fossati 26, 31021 Mogliano Veneto Ve',
                'lat' => '45.551988',
                'lon' => '12.225222',
                'night_price' => 55,
                'cover_img' =>"storage/img/cover_Pavia_intero_alloggio.jpg"

            ],
            [ 
                'user_id' => 2,
                'title' => 'Chic & Design in the trendy area of Milan',
                'n_rooms' => 4,
                'n_beds' => 4,
                'n_bathrooms' => 2,
                'sq_meters' => 150,
                'visible' => true,
                'address' =>  'Via Claudio Treves, 34, 20090 Trezzano sul Naviglio MI',
                'lat' => '45.417155',
                'lon' => '9.064244',
                'night_price' => 99,
                'cover_img' =>"storage/img/cover_milan.jpg"

            ],
            [ 
                'user_id' => 1,
                'title' => 'Elegant apartment near Central Station',
                'n_rooms' => 1,
                'n_beds' => 1,
                'n_bathrooms' => 1,
                'sq_meters' => 80,
                'visible' => true,
                'address' =>  'Via Vitruvio, 20124 Milano MI',
                'lat' => '45.481982',
                'lon' => '9.207527',
                'night_price' => 105,
                'cover_img' =>"storage/img/cover_milano_elegant.jpeg"

            ],


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
