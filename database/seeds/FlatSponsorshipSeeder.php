<?php

use Illuminate\Database\Seeder;
use App\Flat;
use App\Sponsorship;
use Carbon\Carbon;

class FlatSponsorshipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $flatSponsorship = [
            [
                'sponsorship_id'=>1,
                'flat_id'=>4,
                'expiration_date'=> Carbon::now()->addDays(1),
                'payment_id'=>'aer4',
            ],
            [
                'sponsorship_id'=>3,
                'flat_id'=>2,
                'expiration_date'=>Carbon::now()->addDays(6),
                'payment_id'=>'sdf4',
            ],
            [
                'sponsorship_id'=>2,
                'flat_id'=>1,
                'expiration_date'=>Carbon::now()->addDays(3),
                'payment_id'=>'afwa3',
            ],
            [
                'sponsorship_id'=>1,
                'flat_id'=>3,
                'expiration_date'=>Carbon::now()->addDays(1),
                'payment_id'=>'fswfa6',
            ],
            [
                'sponsorship_id'=>1,
                'flat_id'=>12,
                'expiration_date'=> Carbon::now()->addDays(1),
                'payment_id'=>'aer4',
            ],
            [
                'sponsorship_id'=>3,
                'flat_id'=>25,
                'expiration_date'=>Carbon::now()->addDays(6),
                'payment_id'=>'sdf4',
            ],
            // [
            //     'sponsorship_id'=>2,
            //     'flat_id'=>37,
            //     'expiration_date'=>Carbon::now()->addDays(3),
            //     'payment_id'=>'afwa3',
            // ],
            // [
            //     'sponsorship_id'=>1,
            //     'flat_id'=>40,
            //     'expiration_date'=>Carbon::now()->addDays(1),
            //     'payment_id'=>'fswfa6',
            // ],
        ];

        foreach ($flatSponsorship as $sponsorship) {
            
            $flat = Flat::find($sponsorship['flat_id']);

            $flat->sponsorships()->attach($sponsorship['sponsorship_id'], [
                'expiration_date'=> $sponsorship['expiration_date'],
                'payment_id'=> $sponsorship['payment_id'],
            ]);
        }
    }
}
