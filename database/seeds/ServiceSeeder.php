<?php

use App\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $services = [
            [
                "name" => "WIFI",
                "icon" => "fa-solid fa-wifi",
            ],
            [
                "name" => "Jacuzzi",
                "icon" => "fa-solid fa-hot-tub-person",
            ],
            [
                "name" => "Ascensore",
                "icon" => "fa-solid fa-elevator",
            ],
            [
                "name" => "Camino",
                "icon" => "fa-solid fa-fire-flame-curved",
            ],
            [
                "name" => "Paperella Boolean",
                "icon" => "fa-brands fa-earlybirds",
            ]
        ];

        foreach($services as $service){
            $newService = Service::create($service);
        }
    }
}
