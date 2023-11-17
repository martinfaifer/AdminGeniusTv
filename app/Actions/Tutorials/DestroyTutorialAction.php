<?php

namespace App\Actions\Tutorials;

class DestroyTutorialAction
{
    public function execute(object $tutorial): bool
    {
        try {
            $tutorial->delete();
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
