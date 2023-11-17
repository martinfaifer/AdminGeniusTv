<?php

namespace App\Http\Requests;

use App\Rules\CheckFileNameRule;
use Illuminate\Validation\Rules\File;
use Illuminate\Foundation\Http\FormRequest;

class StoreAppRequest extends FormRequest
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
            'file' => ['required', new CheckFileNameRule],
            'category' => ['required', 'exists:app_categories,id'],
            'description' => ['nullable', 'string', 'max:250']
        ];
    }

    public function messages()
    {
        return [
            'file.required' => "Připojte soubor",

            'category.required' => "Vyberte kategorii",
            'category.exists' => "Nebyla nalezena kategorie",

            'description.string' => "Neplatný formát",
            'desctiption.max' => "Maximální počet znaků je 250"
        ];
    }
}
