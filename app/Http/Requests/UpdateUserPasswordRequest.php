<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserPasswordRequest extends FormRequest
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
            'password' => ['required', 'string', 'min:8', "max:64"]
        ];
    }

    public function messages()
    {
        return [
            'password.required' => "Vyplňte heslo",
            'password.string' => "Neplatný formát",
            'password.min' => "Minimální počet znaků je 8",
            'password.max' => "Maximální počet znaků je 64"
        ];
    }
}
