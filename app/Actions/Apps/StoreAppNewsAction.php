<?php

namespace App\Actions\Apps;

use App\Models\AppNews;

class StoreAppNewsAction
{
    public function execute(string $title): bool
    {
        try {
            AppNews::create([
                'title' => $title,
                'text' => "Dne " . now()->format("m.d.") . " byla nahrána nová aplikace."
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
