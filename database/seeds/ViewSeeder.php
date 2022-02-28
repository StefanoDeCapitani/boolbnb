<?php

use App\View;
use Faker\Generator as Faker;
use Illuminate\Database\Seeder;

class ViewSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i=0; $i < 1000; $i++) {
            $views = new View();
            $views->flat_id= rand(1, 19);
            $views->ip = $faker->ipv4();
            $views->created_at= $faker->dateTimeBetween($startDate = '-4 years', $endDate = 'now', $timezone = null );
            $views->save();
        }
        for ($i=0; $i < 200; $i++) {
            $views = new View();
            $views->flat_id= rand(1, 19);
            $views->ip = $faker->ipv4();
            $views->created_at= $faker->dateTimeBetween($startDate = '-0 years', $endDate = 'now', $timezone = null );
            $views->save();
        }
    }
}
