<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = ['name', 'icon'];

    public function flats(){
        return $this->belongsToMany('App\Flat');
    }
}
