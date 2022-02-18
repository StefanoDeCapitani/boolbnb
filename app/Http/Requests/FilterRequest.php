<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FilterRequest extends FormRequest
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
            'rooms' => 'number|required',
            'bathrooms'=>'number|required',
            'beds'=>'number|required',
            'activeServices'=>'array',
            'activeServices.*'=>'number',
            'polygon'=>'array|required',
            'polygon.*'=>'array',
        ];
    }
}
