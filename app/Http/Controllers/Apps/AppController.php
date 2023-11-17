<?php

namespace App\Http\Controllers\Apps;

use App\Models\App;
use Illuminate\Http\Request;
use App\Actions\Apps\StoreAppAction;
use App\Http\Controllers\Controller;
use App\Actions\Apps\UpdateAppAction;
use App\Actions\Apps\DestroyAppAction;
use App\Http\Requests\StoreAppRequest;
use App\Http\Requests\UpdateAppRequest;
use App\Http\Resources\IndexAppsResource;

class AppController extends Controller
{
    public function index(Request $request)
    {
        return new IndexAppsResource($request);
    }

    public function store(StoreAppRequest $request, StoreAppAction $storeAppAction)
    {
        return $storeAppAction->execute(formData: $request) == true
            ? $this->success_response("Nahrán soubor")
            : $this->error_response("Nepodařilo se nahrát soubor");
    }

    public function update(App $app, UpdateAppRequest $request, UpdateAppAction $updateAppAction)
    {
        return $updateAppAction->execute(
            app: $app,
            formData: $request
        ) == true
            ? $this->success_response("Upraveno")
            : $this->error_response("Nepodařilo se upravit");
    }

    public function destroy(App $app, DestroyAppAction $destroyAppAction)
    {
        return $destroyAppAction->execute(app: $app) == true
            ? $this->success_response("Odebráno")
            : $this->error_response("Nepodařilo se odebrat");
    }
}
