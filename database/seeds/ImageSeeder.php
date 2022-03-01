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
                "path" => "storage/img/miro_loft_romantico_nel_cuore_di_roma1.jpg"
            ],
            [
                "flat_id" => 2,
                "path" => "storage/img/miro_loft_romantico_nel_cuore_di_roma2.jpg"
            ],
            [
                "flat_id" => 3,
                "path" => "storage/img/la_terrazza_con_vista_del_castello.jpg"
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
            [
                'flat_id' => 6,
                'path' => 'storage/img/roma_alloggio.jpg'
            ],
            [
                'flat_id' => 6,
                'path' => 'storage/img/romaaa_all.jpg'
            ],
            [
                'flat_id' => 7,
                'path' => 'storage/img/amazing_roma_lux1.jpg '
            ],

            [
                'flat_id' => 7,
                'path' => 'storage/img/amazing_roma_lux2.jpg '
            ],
            [
                'flat_id' => 8,
                'path' => 'storage/img/principe_amedeo_1.jpeg',
            ],
            [
                'flat_id' => 8,
                'path' => 'storage/img/principe_amedeo_2.jpeg',
            ],
            [
                'flat_id' => 9,
                'path' => 'storage/img/nuova_camera_vicino_al_colosseo_termini_turchese_1.jpeg'
            ],
            [
                'flat_id' => 9,
                'path' => 'storage/img/nuova_camera_vicino_al_colosseo_termini_turchese_2.jpeg'
            ],
            [
                'flat_id' => 10,
                'path' => 'storage/img/casa_funari_nel_cuore_di_una_roma_antica_1.jpg'
            ],
            [
                'flat_id' => 10,
                'path' => 'storage/img/casa_funari_nel_cuore_di_una_roma_antica_2.jpg'
            ],
            [
                'flat_id' => 11,
                'path' => 'storage/img/bruno_domus_trastevere_1.jpeg'
            ],
            [
                'flat_id' => 11,
                'path' => 'storage/img/bruno_domus_trastevere_2.jpeg'
            ],
            [
                'flat_id' => 12,
                'path' => 'storage/img/historic_campo_dei_fiori_1.jpg'
            ],
            [
                'flat_id' => 12,
                'path' => 'storage/img/historic_campo_dei_fiori_2.jpg'
            ],
            [
                'flat_id' => 13,
                'path' => 'storage/img/trevi_luxury_apartment_1.jpg'
            ],
            [
                'flat_id' => 13,
                'path' => 'storage/img/trevi_luxury_apartment_2.jpg'
            ],
            [
                'flat_id' => 14,
                'path' => 'storage/img/angels_love_1.jpg'
            ],
            [
                'flat_id' => 14,
                'path' => 'storage/img/angels_love_2.jpg'
            ],
            [
                'flat_id' => 15,
                'path' => 'storage/img/holiday_suite_navona_1.jpg'
            ],
            [
                'flat_id' => 15,
                'path' => 'storage/img/holiday_suite_navona_2.jpg'
            ],
            [
                'flat_id' => 16,
                'path' => 'storage/img/fortuna_apartment_1.jpg'
            ],
            [
                'flat_id' => 16,
                'path' => 'storage/img/fortuna_apartment_2.jpg'
            ],
            [
                'flat_id' => 17,
                'path' => 'storage/img/primavera_al_colosseo_1.jpg'
            ],
            [
                'flat_id' => 17,
                'path' => 'storage/img/primavera_al_colosseo_2.jpg'
            ],
            [
                'flat_id' => 18,
                'path' => 'storage/img/terrazza_roma_est_circelli_1.jpg'
            ],
            [
                'flat_id' => 18,
                'path' => 'storage/img/terrazza_roma_est_circelli_2.jpg'
            ],
            [
                'flat_id' => 19,
                'path' => 'storage/img/eur_perfetto_per_coppia_1.jpg'
            ],
            [
                'flat_id' => 19,
                'path' => 'storage/img/eur_perfetto_per_coppia_2.jpg'
            ],
            [
                'flat_id' => 20,
                'path' => 'storage/img/pavia.jpg'
            ],
            [
                'flat_id' => 20,
                'path' => 'storage/img/pavia_2.jpg'
            ],
            [
                'flat_id' => 21,
                'path' => 'storage/img/Milan.jpg'
            ],
            [
                'flat_id' => 21,
                'path' => 'storage/img/Milan_2.jpg'
            ],
            [
                'flat_id' => 22,
                'path' => 'storage/img/milano_elegant.jpg'
            ],
            [
                'flat_id' => 22,
                'path' => 'storage/img/milano_elegant_2.jpg'
            ],
            [
                'flat_id' => 23,
                'path' => 'storage/img/bba_biddanoa_boutique_apartment_1.jpeg'
            ],
            [
                'flat_id' => 23,
                'path' => 'storage/img/bba_biddanoa_boutique_apartment_2.jpeg'
            ],
            [
                'flat_id' => 24,
                'path' => 'storage/img/piccolo_e_grazioso_monolocale_1.jpeg'
            ],
            [
                'flat_id' => 24,
                'path' => 'storage/img/piccolo_e_grazioso_monolocale_2.jpeg'
            ],
            [
                'flat_id' => 25,
                'path' => 'storage/img/sant_efisio_cagliari_centre_1.jpeg'
            ],
            [
                'flat_id' => 25,
                'path' => 'storage/img/sant_efisio_cagliari_centre_2.jpeg'
            ],
            [
                'flat_id' => 26,
                'path' => 'storage/img/izz_home_full_center_grand_1.jpeg'
            ],
            [
                'flat_id' => 26,
                'path' => 'storage/img/izz_home_full_center_grand_2.jpeg'
            ],
            [
                'flat_id' => 27,
                'path' => 'storage/img/right_house_castello_1.jpeg'
            ],
            [
                'flat_id' => 27,
                'path' => 'storage/img/right_house_castello_2.jpeg'
            ],
            [
                'flat_id' => 28,
                'path' => 'storage/img/pathLorenzo.jpg'
            ],
            [
                'flat_id' => 28,
                'path' => 'storage/img/path2Lorenzo.jpg'
            ],
            [
                'flat_id' => 29,
                'path' => 'storage/img/pathLorenzo.jpg'
            ],
            [
                'flat_id' => 29,
                'path' => 'storage/img/path2Lorenzo.jpg'
            ],
            [
                'flat_id' => 30,
                'path' => 'storage/img/path1Infinity.jpg'
            ],
            [
                'flat_id' => 30,
                'path' => 'storage/img/path2Infinity.jpg'
            ],
            [
                'flat_id' => 31,
                'path' => 'storage/img/luspath1.jpg'
            ],
            [
                'flat_id' => 31,
                'path' => 'storage/img/luspath2.jpg'
            ],
            [
                'flat_id' => 32,
                'path' => 'storage/img/pathLasta.jpg'
            ],
            [
                'flat_id' => 32,
                'path' => 'storage/img/pathLasta1.jpg'
            ],
            [
                'flat_id' => 33,
                'path' => 'storage/img/pathLastone.jpg'
            ],
            [
                'flat_id' => 33,
                'path' => 'storage/img/pathlastone1.jpg'
            ],
            [
                "flat_id" => 34,
                "path" => "storage/img/milano_plus.jpeg"
            ],
            [
                "flat_id" => 34,
                "path" => "storage/img/milano_plus_2.jpeg"
            ],
            [
                "flat_id" => 35,
                "path" => "storage/img/firenze_img.jpeg"
            ],
            [
                "flat_id" => 35,
                "path" => "storage/img/firenze_img_2.jpeg"
            ],
            [
                "flat_id" => 35,
                "path" => "storage/img/firenze_img_3.jpeg"
            ],
            [
                "flat_id" => 36,
                "path" => "storage/img/venezia_black.jpeg"
            ],
            [
                "flat_id" => 36,
                "path" => "storage/img/venezia_black_2.jpeg"
            ],
            [
                "flat_id" => 37,
                "path" => "storage/img/venezia_img_2.jpeg"
            ],
            [
                "flat_id" => 37,
                "path" => "storage/img/venezia_img.jpeg"
            ],
            [
                "flat_id" => 38,
                "path" => "storage/img/venezia_center.jpeg"
            ],
            [
                "flat_id" => 38,
                "path" => "storage/img/venezia_center_2.jpeg"
            ],
            [
                "flat_id" => 39,
                "path" => "storage/img/venezia_3ponti_2.jpeg"
            ],
            [
                "flat_id" => 39,
                "path" => "storage/img/venezia_3ponti.jpeg"
            ],
            [
                "flat_id" => 40,
                "path" => "storage/img/venezia_solaro.jpeg"
            ],
            [
                "flat_id" => 40,
                "path" => "storage/img/venezia_solaro_2.jpeg"
            ],
            [
                "flat_id" => 40,
                "path" => "storage/img/venezia_solaro_3.jpeg"
            ],
            [
                "flat_id" => 41,
                "path" => "storage/img/venezia_leon_venezia.jpeg"
            ],
            [
                "flat_id" => 41,
                "path" => "storage/img/venezia_leon_venezia_2.jpeg"
            ],
            [
                "flat_id" => 42,
                "path" => "storage/img/venezia_appartamento.jpeg"
            ],
            [
                "flat_id" => 42,
                "path" => "storage/img/venezia_appartamento_2.jpeg"
            ],
            [
                "flat_id" => 43,
                "path" => "storage/img/venezia_forner.jpeg"
            ],
            [
                "flat_id" => 43,
                "path" => "storage/img/venezia_forner_2.jpeg"
            ],
            [
                "flat_id" => 44,
                "path" => "storage/img/venezia_sanmarco.jpeg"
            ],
            [
                "flat_id" => 44,
                "path" => "storage/img/venezia_sanmarco_2.jpeg"
            ],
            [
                "flat_id" => 45,
                "path" => "storage/img/venezia_attico.jpeg"
            ],
            [
                "flat_id" => 45,
                "path" => "storage/img/venezia_attico_2.jpeg"
            ],
            [
                "flat_id" => 45,
                "path" => "storage/img/venezia_attico_3.jpeg"
            ],
            [
                "flat_id" => 46,
                "path" => "storage/img/venezia_castello.jpeg"
            ],
            [
                "flat_id" => 46,
                "path" => "storage/img/venezia_castello_2.jpeg"
            ],
            [
                "flat_id" => 47,
                "path" => "storage/img/venezia_boutique.jpeg"
            ],[
                "flat_id" => 47,
                "path" => "storage/img/venezia_boutique_2.jpeg"
            ],
            [
                "flat_id" => 48,
                "path" => "storage/img/venezia_henrion.jpeg"
            ],
            [
                "flat_id" => 48,
                "path" => "storage/img/venezia_henrion_2.jpeg"
            ]


        ];

        foreach ($images as $image) {
            $newImage = new Image();
            $newImage->flat_id = $image['flat_id'];
            $newImage->path = $image['path'];
            $newImage->save();
        }
    }
}
