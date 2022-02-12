<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeeder::class);
        $this->call(ServiceSeeder::class);
        $this->call(SponsorshipSeeder::class);
        $this->call(FlatSeeder::class);
        $this->call(FlatServiceSeeder::class);
        $this->call(FlatSponsorshipSeeder::class); 
        $this->call(MessageSeeder::class);
        $this->call(ImageSeeder::class);
    }
}
