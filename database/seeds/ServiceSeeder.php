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
                "name" => "Paperella",
                "icon" => "fa-brands fa-earlybirds",
            ],
            [
                "name" => "Cucina",
                "icon" => "fas fa-utensils",
            ],
            [
                "name" => "Parcheggio",
                "icon" => "fas fa-parking",
            ],
            [
                "name" => "Animali ammessi",
                "icon" => "fas fa-dog",
            ],
            [
                "name" => "Console",
                "icon" => "fas fa-gamepad",
            ],
            [
                "name" => "Portatile",
                "icon" => "fas fa-laptop-code",
            ],
            [
                "name" => "Caffè",
                "icon" =>"fas fa-coffee",
            ],
            [
                "name" => "StackOverflow",
                "icon" => "fab fa-stack-overflow",
            ],
            [
                "name" => "Monitor",
                "icon" => "fas fa-tv",
            ],
            
        ];

        foreach($services as $service){
            $newService = Service::create($service);
        }
    }
}
