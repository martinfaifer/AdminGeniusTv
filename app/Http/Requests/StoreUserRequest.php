<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:250'],
            'email' => ['required', 'email', 'max:250', 'unique:users,email'],
            'nangu_isp_id' => ['required', 'exists:nangu_isps,id'],
            'crm_id' => ['required'],
            'is_admin' => ['nullable', 'boolean']
        ];
    }

    public function messages()
    {
        return [
            'name.required' => "vyplňte jméno",
            'name.string' => "Neplatný formát",
            'name.max' => "Maximální počet znaků je 250",

            'email.required' => "vyplňte jméno",
            'email.email' => "Neplatný formát",
            'email.max' => "Maximální počet znaků je 250",
            'email.unique' => "Emailová adresa již existuje",

            'nangu_isp_id.string' => "Neplatný formát",
            'nangu_isp_id.max' => "Maximální počet znaků je 250",

            // 'crm_id.string' => "Neplatný formát",
            // 'crm_id.max' => "Maximální počet znaků je 250",

            'is_admin.boolean' => "Neplatný formát"
        ];
    }
}
