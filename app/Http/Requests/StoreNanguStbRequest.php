<?php

namespace App\Http\Requests;

use App\Rules\NanguExistsRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreNanguStbRequest extends FormRequest
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
            'modelCode' => ['required', 'string'],
            'serialNumber' => ['required', 'string', new NanguExistsRule],
            'macAddress' => ['required', 'string', new NanguExistsRule],
            'ispCode' => ['required', 'string'],
        ];
    }

    public function messages()
    {
        return [
            'modelCode.required' => "Vyplňte model",
            'modelCode.string' => "Neplatný formát",

            'serialNumber.required' => "Vyplňte sn",
            'serialNumber.string' => "Neplatný formát",

            'macAddress.required' => "Vyplňte mac adresu",
            'macAddress.string' => "Neplatný formát",

        ];
    }
}
