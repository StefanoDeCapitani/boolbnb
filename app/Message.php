<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['name', 'text', 'flat_id', 'email'];

    public function flat(){
        return $this->belongsTo('App\Flat');
    }
}
