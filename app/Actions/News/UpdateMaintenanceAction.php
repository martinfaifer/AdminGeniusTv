<?php

namespace App\Actions\News;

class UpdateMaintenanceAction
{
    public function execute(object $maintenance, object $formData): bool
    {
        try {
            $maintenance->update([
                'title' => $formData->title,
                'text' => $formData->text
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
