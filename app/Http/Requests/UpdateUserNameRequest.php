<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserNameRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:250']
        ];
    }

    public function messages()
    {
        return [
            'name.required' => "Jméno nesmí být prázdné",
            'name.string' => "Neplatný formát",
            'name.max' => "Maximální počet znaků je 250"
        ];
    }
}
