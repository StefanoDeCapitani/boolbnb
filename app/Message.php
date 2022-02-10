<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['text', 'flat_id', 'email'];

    public function flats(){
        return $this->belongsTo('App\Flat');
    }
}
