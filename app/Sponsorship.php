<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sponsorship extends Model
{
    protected $fillable = ['name', 'duration', 'price'];

    public function flats(){
        return $this->belongsToMany('App\Flat');
    }
}
