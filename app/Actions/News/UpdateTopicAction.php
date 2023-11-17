<?php

namespace App\Actions\News;

class UpdateTopicAction
{
    public function execute($topic, $formData)
    {
        try {
            $topic->update([
                'title' => $formData->title,
                'text' => $formData->text
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
