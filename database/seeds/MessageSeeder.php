<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Message;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {


        for ($i=0; $i < 1000; $i++) {    
            $message = new Message();
            $message->flat_id= rand(1, 19);
            $message->name = $faker->name();
            $message->text= $faker->realText();
            $message->email= $faker->email();
            $message->created_at= $faker->dateTimeBetween($startDate = '-4 years', $endDate = 'now', $timezone = null );
            $message->save();
        }
        for ($i=0; $i < 200; $i++) {    
            $message = new Message();
            $message->flat_id= rand(1, 19);
            $message->name = $faker->name();
            $message->text= $faker->realText();
            $message->email= $faker->email();
            $message->created_at= $faker->dateTimeBetween($startDate = '-0 years', $endDate = 'now', $timezone = null );
            $message->save();
        }
    }
}
