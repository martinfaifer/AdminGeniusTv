<?php

namespace App\Http\Requests;

use App\Rules\NanguExistsRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreCustomerRequest extends FormRequest
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
            'subscriberCode' => ['required', 'string', new NanguExistsRule],
            'subscriptionCode' => ['required', 'string', new NanguExistsRule],
            'tariffCode' => ['required', 'string'],
            'localityCode' => ['required', 'string'],
            'puk' => ['nullable'],
            'modelCode' => ['nullable', 'string'],
            'serialNumber' => ['nullable', 'string',new  NanguExistsRule],
            'macAddress' => ['nullable', 'string', new NanguExistsRule],
        ];
    }

    public function messages()
    {
        return [
            'subscriberCode.required' => "Vypňte subscriber code.",
            'subscriberCode.string' => "Neplatný formát.",

            'subscriptionCode.required' => "Vypňte subscription code code.",
            'subscriptionCode.string' => "Neplatný formát.",

            'tariffCode.required' => "Vyberte tarif.",
            'tariffCode.string' => "Neplatný formát.",

            'subscriberCode.required' => "Vypňte subscriber code.",
            'subscriberCode.string' => "Neplatný formát.",

            'localityCode.required' => "Vypňte lokalitu.",
            'localityCode.string' => "Neplatný formát.",

            'modelCode.required' => "Vyplňte model.",
            'modelCode.string' => "Neplatný formát.",

            'serialNumber.required' => "Vyplňte sn.",
            'serialNumber.string' => "Neplatný formát.",

            'macAddress.required' => "Vyplňte mac adresu.",
            'macAddress.string' => "Neplatný formát.",

            'ispCode.requried' => "Není nadefinován ISP.",
            'ispCode.exists' => "Neexistující ISP."
        ];
    }
}
