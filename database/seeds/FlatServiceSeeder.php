<?php

use Illuminate\Database\Seeder;
use App\Flat;
use App\Service;

class FlatServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $flats = Flat::all();
        $services = Service::all();
        $servicesIds = [];

        foreach ($services as $service) {
            $servicesIds[] = $service->id; //push id di service nell'array $servicesIds[]
        }


        foreach ($flats as $flat) {
            $savedNumbers = [];
            
            for ($i = 0; $i < rand(1, count($services)); $i++) {
                $generatedNumber = rand(0, count($servicesIds) - 1);
                if (in_array($servicesIds[$generatedNumber], $savedNumbers)) {
                    $i--;
                    continue;
                }
                $savedNumbers[] = $servicesIds[$generatedNumber];
                $flat->services()->attach($servicesIds[$generatedNumber]);
            }
        }
    }
}
