<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\DeleteStbRequest;
use App\Http\Requests\StoreNanguStbRequest;
use App\Services\Nangu\Wsdl\StbAccountService;
use App\Services\Nangu\Wsdl\NanguWsdlStbService;

class NanguStbController extends Controller
{
    public function store(StoreNanguStbRequest $request)
    {
        return (new NanguWsdlStbService())->store(
            modelCode: $request->modelCode,
            serialNumber: $request->serialNumber,
            macAddress: $request->macAddress,
            ispCode: $request->ispCode
        );
    }

    public function destroy(
        string $subscriptionStbAccountCode,
        string $subscriptionCode,
        string $serialNumber,
        string $macAddress,
        NanguWsdlStbService $nanguWsdlStbService
    ) {
        $user = Auth::user();

        $unAssignStbAccount = (new StbAccountService())->unassing(
            subscriptionCode: $subscriptionCode,
            subscriptionStbAccountCode: $subscriptionStbAccountCode,
            ispCode: $user->nanguIsp->isp_id
        );

        return $nanguWsdlStbService->delete(
            $serialNumber,
            $macAddress,
            $user->nanguIsp->isp_id
        ) == true
            ? $this->success_response("Odebráno")
            : $this->error_response("Nepodařilo se odebrat stb");
    }
}
