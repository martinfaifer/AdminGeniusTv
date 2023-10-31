<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Services\Nangu\Wsdl\StbAccountService;

class NanguStbAccountController extends Controller
{
    public function show(string $subscriptionStbAccountCode, StbAccountService $stbAccountService)
    {
        $user = Auth::user();
        return $this->success_response("Načteny data", $stbAccountService->show(
            $subscriptionStbAccountCode,
            $user->nanguIsp->isp_id
        )
        );
    }
}
