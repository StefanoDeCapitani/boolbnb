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
        


        $randomServices = 3;

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
        /* $randomCategories = 2;

        $movies = Movie::all();
        $categories = Category::all();
        $categoriesIds = [];

        foreach ($categories as $category) {
            $categoriesIds[] = $category->id;
        }


        foreach ($movies as $movie) {
            $savedNumbers = [];
            
            for ($i = 0; $i < rand(1, min($randomCategories, count($categories))); $i++) {
                $generatedNumber = rand(0, count($categoriesIds));
                if (in_array($generatedNumber, $savedNumbers)) {
                    $i--;
                    continue;
                }
                $savedNumbers[] = $categoriesIds[$generatedNumber];
                $movie->categories()->attach($categoriesIds[$generatedNumber]);
            }
        }
    } */
    
}
