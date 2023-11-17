<?php

namespace App\Http\Controllers\News;

use App\Models\Maintenance;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\News\StoreMaintenanceAction;
use App\Actions\News\UpdateMaintenanceAction;
use App\Http\Requests\StoreMaintenanceRequest;
use App\Http\Requests\UpdateMaintenanceRequest;
use App\Http\Resources\IndexMaintenanceResource;

class MaintenanceController extends Controller
{
    public function index()
    {
        return new IndexMaintenanceResource([]);
    }

    public function store(StoreMaintenanceRequest $request, StoreMaintenanceAction $storeMaintenanceAction)
    {
        return $storeMaintenanceAction->execute(formData: $request) == true
            ? $this->success_response("Přidáno")
            : $this->error_response("Nepodařilo se přidat");
    }

    public function update(Maintenance $maintenance, UpdateMaintenanceRequest $request, UpdateMaintenanceAction $updateMaintenanceAction)
    {
        return $updateMaintenanceAction->execute(
            maintenance: $maintenance,
            formData: $request
        ) == true
            ? $this->success_response("Upraveno")
            : $this->error_response("Nepodařilo se upravit");
    }

    public function destroy(Maintenance $maintenance)
    {
        $maintenance->delete();
        return $this->success_response("Odebráno");
    }
}
