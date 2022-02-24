<?php

use Illuminate\Database\Seeder;
use App\Sponsorship;

class SponsorshipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sponsorships = [
            [
                "name" => "Basic",
                "duration" => 24,
                "price" => 2.99
            ],
            [
                "name" => "Advanced",
                "duration" => 72,
                "price" => 5.99
            ],
            [
                "name" => "Elite",
                "duration" => 144,
                "price" => 9.99
            ]
        ];

        foreach($sponsorships as $sponsorship){
            $newSponsoriship = Sponsorship::create($sponsorship);
        }
    }
}
