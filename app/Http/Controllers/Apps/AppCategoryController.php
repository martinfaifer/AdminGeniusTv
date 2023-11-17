<?php

namespace App\Http\Controllers\Apps;

use App\Models\AppCategory;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\Apps\StoreAppCategoryAction;
use App\Actions\Apps\UpdateAppCategoryAction;
use App\Actions\Apps\DestroyAppCategoryAction;
use App\Http\Requests\StoreAppCategoryRequest;
use App\Http\Requests\UpdateAppCategoryRequest;
use App\Http\Resources\IndexAppCategoryResource;

class AppCategoryController extends Controller
{
    public function index()
    {
        return new IndexAppCategoryResource([]);
    }

    public function store(StoreAppCategoryRequest $request, StoreAppCategoryAction $storeAppCategoryAction)
    {
        return $storeAppCategoryAction->execute(formData: $request) == true
            ? $this->success_response("Přidáno")
            : $this->error_response("Nepodařilo se přidat");
    }


    public function update(AppCategory $appCategory, UpdateAppCategoryRequest $request, UpdateAppCategoryAction $updateAppCategoryAction)
    {
        return $updateAppCategoryAction->execute($appCategory, $request) == true
            ? $this->success_response("Upraveno")
            : $this->error_response("Nepodařilo se upravit");
    }

    public function destroy(AppCategory $appCategory, DestroyAppCategoryAction $destroyAppCategoryAction)
    {
        return $destroyAppCategoryAction->execute($appCategory) == true
            ? $this->success_response("Odebráno")
            : $this->error_response("Kategorie má na sobě aplikace");
    }
}
