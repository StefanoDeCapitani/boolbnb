<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flat extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'n_rooms', 'n_beds', 'n_bathrooms', 'sq_meters', 'visible', 'address', 'lat', 'lon', 'night_price', 'cover_img'
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function messages(){
        return $this->hasMany('App\Message');
    }

    public function views(){
        return $this->hasMany('App\View');
    }

    public function images(){
        return $this->hasMany('App\Image');
    }

    public function sponsorships(){
        return $this->belongsToMany('App\Sponsorship');
    }

    public function services(){
        return $this->belongsToMany('App\Service');
    }
}
