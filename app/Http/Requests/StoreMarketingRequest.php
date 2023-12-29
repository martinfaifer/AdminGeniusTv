<?php

namespace App\Http\Requests;

use App\Rules\CheckFileNameRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreMarketingRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:255'],
            'text' => ["required", 'string', 'max:255'],
            'file' => ['required', new CheckFileNameRule],
        ];
    }

    public function messages()
    {
        return [
            'file.required' => "Připojte soubor",

            'title.string' => "Neplatný formát",
            'title.max' => "Maximální počet znaků je 255",

            'text.string' => "Neplatný formát",
            'text.max' => "Maximální počet znaků je 255"
        ];
    }
}
