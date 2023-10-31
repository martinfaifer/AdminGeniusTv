<?php

namespace App\Rules;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\Services\Nangu\Wsdl\SearchWsdlService;
use Illuminate\Contracts\Validation\ValidationRule;

class NanguExistsRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $user = Auth::user();
        $nanguResult = (new SearchWsdlService())->execute($user->nanguIsp->isp_id, $value);
        if($nanguResult['count'] != 0) {
            $fail(':attribute již existuje');
        }
    }
}
