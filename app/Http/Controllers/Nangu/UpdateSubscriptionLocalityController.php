<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Services\Nangu\Wsdl\LocalitiesWsdlService;
use App\Http\Requests\UpdateSubsciptionLocalityRequest;

class UpdateSubscriptionLocalityController extends Controller
{
    public function __invoke(UpdateSubsciptionLocalityRequest $request, LocalitiesWsdlService $localitiesWsdlService)
    {
        $user = Auth::user();
        return $localitiesWsdlService->update(
            subscriptionCode: $request->subscriptionCode,
            localityCode: $request->localityCode,
            ispCode: $user->nanguIsp->isp_id
        ) == true
            ? $this->success_response("Změněna lokalita u zákazníka")
            : $this->error_response();
    }
}
