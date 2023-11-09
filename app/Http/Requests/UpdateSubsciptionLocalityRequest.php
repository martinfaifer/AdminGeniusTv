<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSubsciptionLocalityRequest extends FormRequest
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
            'localityCode' => ['required', 'string'],
            'subscriptionCode' => ['required', 'string']
        ];
    }

    public function messages()
    {
        return [
            'localityCode.required' => "Vyplňte lokalitu",
            'localityCode.string' => "Neplatný formát",

            'subscriptionCode.required' => "Není vyplněn subscriptionCode",
            'subscriptionCode.string' => "Neplatný formát",
        ];
    }
}
