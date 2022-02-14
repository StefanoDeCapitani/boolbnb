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
                "name" => "basic",
                "duration" => 24,
                "price" => 2.99
            ],
            [
                "name" => "advanced",
                "duration" => 72,
                "price" => 5.99
            ],
            [
                "name" => "elite",
                "duration" => 144,
                "price" => 9.99
            ]
        ];

        foreach($sponsorships as $sponsorship){
            $newSponsoriship = Sponsorship::create($sponsorship);
        }
    }
}
