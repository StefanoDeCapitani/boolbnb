<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateFlatRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|min:10',
            'n_rooms' => 'required|digits_between:0,2',
            'n_beds' => 'required|digits_between:0,2',
            'n_bathrooms' => 'required|digits_between:0,2',
            'sq_metres' => 'required|numeric',
            'visible' => 'boolean|required',
            'address' => 'required|string',
            'lat' => 'required|string',
            'lon' => 'required|string',
            'night_price' => 'required|string',
            'cover_img' => 'mimes:jpeg,jpg,png',
            'services'=>'array',
            'images'=>'array',
            'images.*'=>'mimes:jpeg,jpg,png',

        ];
    }
}
