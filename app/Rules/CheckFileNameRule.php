<?php

namespace App\Rules;

use App\Models\App;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class CheckFileNameRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $fileName = $value->getClientOriginalName();
        if (App::where('name', $fileName)->first()) {
            $fail("Soubor s tímto názvem již existuje");
        }
    }
}
