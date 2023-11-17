<?php

namespace App\Actions\News;

use App\Models\Maintenance;
use Illuminate\Support\Facades\Auth;

class StoreMaintenanceAction
{
    public function execute(object $formData): bool
    {
        try {
            Maintenance::create([
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
