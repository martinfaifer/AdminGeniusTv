<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Actions\Nangu\GetIspCodeAction;
use App\Actions\Nangu\StoreIdentityAction;
use App\Http\Requests\StoreIdentityRequest;
use App\Http\Requests\UpdateIdentityRequest;
use App\Services\Nangu\Wsdl\SubscriptionService;
use App\Services\Nangu\Wsdl\WsdlIdentityService;

class NanguIdentityController extends Controller
{
    public function store(StoreIdentityRequest $request, StoreIdentityAction $storeIdentityAction)
    {
        return $storeIdentityAction->execute($request, (new GetIspCodeAction())->execute()) == true
            ? $this->success_response("Přidána identita ke službě.")
            : $this->error_response();

    }

    public function update(UpdateIdentityRequest $request, WsdlIdentityService $wsdlIdentityService)
    {
        return $wsdlIdentityService->update(
            identityId: $request->identityId,
            password: $request->password,
            ispCode: (new GetIspCodeAction())->execute()
        ) == true
            ? $this->success_response("Upraveno")
            : $this->error_response();
    }

    public function destroy_device(string $subscriptionCode, int $deviceId, WsdlIdentityService $wsdlIdentityService)
    {
        return $wsdlIdentityService->delete_device(
            subscriptionCode: $subscriptionCode,
            deviceId: $deviceId,
            ispCode: (new GetIspCodeAction())->execute()
        ) == true
            ? $this->success_response("Upraveno")
            : $this->error_response();
    }

    public function destroy(string $identityId, string $subscriptionStbAccountCode, WsdlIdentityService $wsdlIdentityService)
    {
        (new SubscriptionService())->unassignIdentity(
            subscriptionStbAccountCode: $subscriptionStbAccountCode,
            identityId: $identityId,
            ispCode: (new GetIspCodeAction())->execute()
        );
        return $wsdlIdentityService->delete(
            identityId: $identityId,
            ispCode: (new GetIspCodeAction())->execute()
        ) == true
            ? $this->success_response("Upraveno")
            : $this->error_response();
    }
}
