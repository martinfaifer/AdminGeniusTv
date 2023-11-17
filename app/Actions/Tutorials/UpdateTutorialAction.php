<?php

namespace App\Actions\Tutorials;

class UpdateTutorialAction
{
    public function execute(object $tutorial, object $formData): bool
    {
        try {
            $tutorial->update([
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
