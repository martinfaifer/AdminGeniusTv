<?php

namespace App\Actions\Apps;

class UpdateAppAction
{
    public function execute($app, object $formData): bool
    {
        try {
            $app->update([
                'description' => $formData->description
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
