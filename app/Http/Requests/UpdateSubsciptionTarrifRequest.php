<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSubsciptionTarrifRequest extends FormRequest
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
            'tariffCode' => ['required', 'string'],
            'subscriptionCode' => ['required', 'string']
        ];
    }

    public function messages()
    {
        return [
            'tariffCode.required' => "Vyberte tarif.",
            'tariffCode.string' => "Neplatný formát.",

            'subscriptionCode.required' => "Vyplňte subscriptionCode.",
            'subscriptionCode.string' => "Neplatný formát."
        ];
    }
}
