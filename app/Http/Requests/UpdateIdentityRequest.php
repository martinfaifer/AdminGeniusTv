<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateIdentityRequest extends FormRequest
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
            'identityId' => ['required'],
            'password' => ['required', 'string', 'min:6']
        ];
    }

    public function messages()
    {
        return [
            'password.required' => "Vyplňte heslo",
            'password.string' => "Neplatný formát",
            'password.min' => "Minimáůmí počet znaků je 6"
        ];
    }
}
