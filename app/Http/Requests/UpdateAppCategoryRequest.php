<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAppCategoryRequest extends FormRequest
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
            'category' => ['required', 'string', 'max:160', 'unique:app_categories,category,'. $this->appCategory->id]
        ];
    }

    public function messages()
    {
        return [
            'category.required' => "Vyplňte kategorii",
            'category.string' => "Neplatný formát",
            'category.max' => "Maximální počet znaků je 160",
            'category.unique' => "Již existuje"
        ];
    }
}
