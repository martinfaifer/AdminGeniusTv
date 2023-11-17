<?php

namespace App\Actions\Apps;

use App\Models\AppCategory;

class StoreAppCategoryAction
{
    public function execute(object $formData): true
    {
        try {
            AppCategory::create([
                'category' => $formData->category
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
