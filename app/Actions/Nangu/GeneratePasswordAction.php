<?php
namespace App\Actions\Nangu;

use Illuminate\Support\Str;

class GeneratePasswordAction
{
    public function execute(): string
    {
        return Str::password(
            length: 12,
            letters: true,
            numbers: true,
            symbols: false,
            spaces: false
        );
    }
}