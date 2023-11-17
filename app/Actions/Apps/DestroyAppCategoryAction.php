<?php

namespace App\Actions\Apps;

class DestroyAppCategoryAction
{
    public function execute(object $appCategory): bool
    {
        if ($appCategory->apps->isEmpty() == false) {
            return false;
        }

        $appCategory->delete();
        return true;
    }
}
