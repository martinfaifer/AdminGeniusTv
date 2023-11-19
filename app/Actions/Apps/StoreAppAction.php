<?php

namespace App\Actions\Apps;

use App\Models\App;

class StoreAppAction
{
    public function execute(object $formData): bool
    {
        // try {
            $file = $formData->file('file');
            $name = uniqid() . '.' . $file->extension();
            $file->storeAs('public/apps', $name);

            App::create([
                'name' => $formData->file('file')->getClientOriginalName(),
                'description' => $formData->description,
                'path' => '/storage/apps/' . $name,
                'app_category_id' => $formData->category,
            ]);

            (new StoreAppNewsAction())->execute(
                title: $formData->file('file')->getClientOriginalName()
            );
            return true;
        // } catch (\Throwable $th) {
        //     return false;
        // }
    }
}
