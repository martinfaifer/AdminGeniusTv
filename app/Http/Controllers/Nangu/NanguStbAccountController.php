<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreStbRequest;
use App\Http\Requests\StoreNanguStbRequest;
use App\Services\Nangu\Wsdl\StbAccountService;
use App\Actions\Nangu\StoreStbToSubscriptionAccountAction;

class NanguStbAccountController extends Controller
{
    public function show(string $subscriptionStbAccountCode, StbAccountService $stbAccountService)
    {
        $user = Auth::user();
        return $this->success_response(
            "Načteny data",
            $stbAccountService->show(
                $subscriptionStbAccountCode,
                $user->nanguIsp->isp_id
            )
        );
    }

    public function store_stb(StoreStbRequest $request, StoreStbToSubscriptionAccountAction $storeStbToSubscriptionAccountAction)
    {
        $user = Auth::user();
        return $storeStbToSubscriptionAccountAction->execute(
            $request,
            $user->nanguIsp->isp_id
        ) == true
            ? $this->success_response("Stb přidán")
            : $this->error_response();
    }
}
