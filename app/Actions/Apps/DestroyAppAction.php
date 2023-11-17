<?php

namespace App\Actions\Apps;

use Illuminate\Support\Facades\Storage;

class DestroyAppAction
{
    public function execute(object $app): bool
    {
        try {
            Storage::delete($app->path);
            $app->delete();

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
