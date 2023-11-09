<?php
namespace App\Actions\Nangu;

use App\Services\Nangu\Wsdl\WsdlAssignIdentityService;
use App\Services\Nangu\Wsdl\WsdlCreateIdentityService;

class StoreIdentityAction
{
    public function execute(object $formData, $ispCode):bool
    {
        try {
            $identityId = (new WsdlCreateIdentityService())->execute(
                username: is_null($formData->identityName) ? $formData->subscriptionCode : $formData->identityName,
                password: $formData->identityPassword,
                ispCode: $ispCode
            );

            (new WsdlAssignIdentityService())->execute(
                subscriptionStbAccountCode: $formData->subscriptionStbAccountCode,
                identityId: $identityId,
                ispCode: $ispCode
            );

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}