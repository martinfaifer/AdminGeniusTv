<?php

namespace App\Actions\Apps;

class UpdateAppCategoryAction
{
    public function execute(object $appCategory, object $formData)
    {
        try {
            $appCategory->update([
                'category' => $formData->category
            ]);
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
