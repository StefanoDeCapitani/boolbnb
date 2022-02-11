<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = ['path', 'flat_id'];

    public function flat(){
        return $this->belongsTo('App\Flat');
    }
}
