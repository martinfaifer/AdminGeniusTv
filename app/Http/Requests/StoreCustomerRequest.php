<?php

namespace App\Http\Requests;

use App\Rules\EmptySpaceRule;
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
            // validate subscriber with subscription
            'subscriberCode' => ['required', 'string', 'min:4', new NanguExistsRule, new EmptySpaceRule],
            'subscriptionCode' => ['required', 'string', 'min:4', new NanguExistsRule, new EmptySpaceRule],
            'tariffCode' => ['required', 'string'],
            'localityCode' => ['required', 'string'],
            'puk' => ['nullable'],

            // validate stb
            'modelCode' => ['nullable', 'string'],
            'serialNumber' => ['nullable', 'string', new NanguExistsRule, new EmptySpaceRule],
            'macAddress' => ['nullable', 'string', new NanguExistsRule, new EmptySpaceRule],

            // validate identity
            'identityName' => ['string', 'max:250', new NanguExistsRule, new EmptySpaceRule],
            'identityPassword' => ['required', 'string', 'min:8', 'max:64']
        ];
    }

    public function messages()
    {
        return [
            'subscriberCode.required' => "Vypňte subscriber code.",
            'subscriberCode.string' => "Neplatný formát.",
            'subscriberCode.min' => "Minimální počet znaků je 4.",

            'subscriptionCode.required' => "Vypňte subscription code code.",
            'subscriptionCode.string' => "Neplatný formát.",
            'subscriptionCode.min' => "Minimální počet znaků je 4.",

            'tariffCode.required' => "Vyberte tarif.",
            'tariffCode.string' => "Neplatný formát.",

            'localityCode.required' => "Vypňte lokalitu.",
            'localityCode.string' => "Neplatný formát.",

            'modelCode.required' => "Vyplňte model.",
            'modelCode.string' => "Neplatný formát.",

            'serialNumber.required' => "Vyplňte sn.",
            'serialNumber.string' => "Neplatný formát.",

            'macAddress.required' => "Vyplňte mac adresu.",
            'macAddress.string' => "Neplatný formát.",

            'ispCode.requried' => "Není nadefinován ISP.",
            'ispCode.exists' => "Neexistující ISP.",

            'identityName.string' => "Neplatný formát.",
            'identityName.max' => "Byl překročen maximální počet znaků 250.",

            'identityPassword.required' => "Vyplňte heslo do aplikace.",
            'identityPassword.string' => "Neplatný formát.",
            'identityPassword.min' => "Minimální počet znaků je 8.",
            'identityPassword.max' => "Byl překročen maximální počet znaků 64.",
        ];
    }
}
