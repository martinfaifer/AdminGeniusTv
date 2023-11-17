<?php

namespace App\Actions\Tutorials;

use App\Models\Tutorial;

class StoreTutorialAction
{
    public function execute(object $formData): bool
    {
        try {
            Tutorial::create([
                'title' => $formData->title,
                'video_url' => $formData->video_url,
                'description' => $formData->description
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
