<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreIdentityRequest extends FormRequest
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
            'subscriptionCode' => ['required', 'string'],
            'subscriptionStbAccountCode' => ['required', 'string'],
            'identityName' => ['nullable', 'string'],
            'identityPassword' => ['required', 'string', 'min:6', "max:16"]
        ];
    }

    public function messages()
    {
        return [
            'identityName.string' => "Neplatný formát",
            'identityPassword.required' => "Vyplňte heslo",
            'identityPassword.string' => "Neplatný formát",
            'identityPassword.min' => "Minimální počet znaků je 6",
            'identityPassword.max' => "Maximální počet znaků je 16"
        ];
    }
}
