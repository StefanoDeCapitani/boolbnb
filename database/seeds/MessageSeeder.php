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


        for ($i=0; $i < 6; $i++) { 
            
            $message = new Message();
            $message->flat_id= rand(1, 5);
            $message->name = $faker->name();
            $message->text= $faker->realText();
            $message->email= $faker->email();
            $message->save();
            
        }
    }
}
