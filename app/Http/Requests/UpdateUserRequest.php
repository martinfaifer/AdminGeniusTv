<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
            'nangu_isp_id' => ['nullable', 'exists:nangu_isps,id'],
            'crm_id' => ['nullable'],
            'is_admin' => ['nullable'],
            'show_news' => ['required', 'boolean'],
            'show_apps' => ['required', 'boolean'],
            'show_invoices' => ['required', 'boolean'],
            'show_tutorials' => ['required', 'boolean'],
            'show_nangu' => ['required', 'boolean'],
            'show_api' => ['required', 'boolean'],
            'show_tickets' => ['required', 'boolean'],
        ];
    }

    public function messages()
    {
        return [
            'nangu_isp_id.exists' => "Nenalezeno v db",
        ];
    }
}
