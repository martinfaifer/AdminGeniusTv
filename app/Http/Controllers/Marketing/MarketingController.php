<?php

namespace App\Http\Controllers\Marketing;

use App\Models\Marketing;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\Apps\DestroyAppAction;
use App\Http\Requests\StoreMarketingRequest;
use App\Http\Resources\IndexMarketingResource;
use App\Actions\Marketing\StoreMarketingAction;

class MarketingController extends Controller
{
    public function index()
    {
        return new IndexMarketingResource([]);
    }

    public function store(StoreMarketingRequest $request, StoreMarketingAction $storeMarketingAction)
    {
        return $storeMarketingAction->execute(formData: $request) == true
            ? $this->success_response("Nahrán soubor")
            : $this->error_response("Nepodařilo se nahrát soubor");
    }

    public function destroy(Marketing $marketing, DestroyAppAction $destroyAppAction)
    {
        return $destroyAppAction->execute(app: $marketing) == true
        ? $this->success_response("Odebráno")
        : $this->error_response("Nepodařilo se odebrat");
    }
}
