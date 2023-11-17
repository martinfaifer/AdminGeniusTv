<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreNewsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:250', 'unique:topics,title'],
            'text' => ['required', 'string']
        ];
    }

    public function messages()
    {
        return [
            'title.required' => "Vyplňte titulek",
            'title.string' => "Neplatný formát",
            'title.max' => "Maximální počet znaků je 250",
            'title.unique' => "Článek s tímto titulkem již existuje",

            'text.required' => "Obsah nesmí být prázdný",
            'text.string' => "Neplatný formát"
        ];
    }
}
