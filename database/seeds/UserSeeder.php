<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                "name" => "Florian",
                "last_name" => "Cordari",
                "date_of_birth" => "1985/12/10",
                "email" => "prova0@prova.it",
                "password" => "password"
            ],
            [
                "email" => "prova1@prova.it",
                "password" => "password",
            ]
        ];

        foreach($users as $user){
            $newUser = User::create($user);
        }
    }
}
