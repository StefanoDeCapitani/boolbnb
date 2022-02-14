<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;

class Flat extends Model
{
    use SoftDeletes;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'n_rooms', 'n_beds', 'n_bathrooms', 'sq_metres', 'visible', 'address', 'lat', 'lon', 'night_price', 'cover_img', 'slug'
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
        return $this->belongsToMany('App\Sponsorship')->withTimestamps();
    }
    public function activeSponsorships(){
        $date = Carbon::now();
        return $this->belongsToMany('App\Sponsorship')->wherePivot('expiration_date','>', $date);
    }

    public function services(){
        return $this->belongsToMany('App\Service')->withTimestamps();
    }
}
