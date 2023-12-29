<?php

namespace App\Actions\Marketing;

use App\Models\Marketing;

class StoreMarketingAction
{
    public function execute(object $formData): bool
    {
        $file = $formData->file('file');
        $name = uniqid() . '.' . $file->extension();
        $file->storeAs('public/marketing', $name);

        Marketing::create([
            'title' => $formData->title,
            'text' => $formData->text,
            'path' => '/storage/marketing/' . $name,
        ]);

        return true;
    }
}
