<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTutorialRequest extends FormRequest
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
            'title' => ['required', 'string', 'max:250', 'unique:tutorials,title'],
            'video_url' => ['required', 'string', 'max:250', 'unique:tutorials,title'],
            'description' => ['nullable', 'string']
        ];
    }

    public function messages()
    {
        return [
            'title.required' => "Vyplňte titulek",
            'title.string' => "Neplatný formát",
            'title.max' => "Maximální počet znaků je 250",
            'title.unique' => "Titulek již existuje",

            'video_url.required' => "Vyplňte video url",
            'video_url.string' => "Neplatný formát",
            'video_url.max' => "Maximální počet znaků je 250",
            'video_url.unique' => "Url již existuje",

            'description.string' => "Neplatný formát",
        ];
    }
}
