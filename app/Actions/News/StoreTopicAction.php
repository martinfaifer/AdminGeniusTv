<?php
namespace App\Actions\News;

use App\Models\Topic;
use Illuminate\Support\Facades\Auth;

class StoreTopicAction
{
    public function execute(object $formData): bool
    {
        try {
            Topic::create([
                'title' => $formData->title,
                'text' => $formData->text,
                'user_id' => Auth::user()->id
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }

    }
}
