<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Services\Nangu\Wsdl\TarrifsWsdlService;
use App\Http\Requests\UpdateSubsciptionTarrifRequest;

class UpdateSubscriptionTarrifController extends Controller
{
    public function __invoke(UpdateSubsciptionTarrifRequest $request, TarrifsWsdlService $tarrifsWsdlService)
    {
        $user = Auth::user();
        return $tarrifsWsdlService->update(
            subscriptionCode: $request->subscriptionCode,
            tariffCode: $request->tariffCode,
            ispCode: $user->nanguIsp->isp_id
        ) == true
            ? $this->success_response("Tarrif změněn")
            : $this->error_response();
    }
}
