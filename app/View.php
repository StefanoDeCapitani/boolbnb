<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class View extends Model
{
    protected $fillable = ['user_id', 'flat_id', "ip"];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function flat(){
        return $this->belongsTo('App\Flat');
    }
}
