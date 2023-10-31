<?php

namespace App\Services\Nangu\Wsdl;

class WsdlAssignIdentityService
{
    public function execute(string $subscriptionCode, string $identityId, int $ispCode)
    {
        (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'AssignIdentity' =>
                [
                    "subscriptionStbAccountCode" => $subscriptionCode,
                    "identityId" => $identityId,
                    "ispCode" => $ispCode
                ]
            ],
            soap_call_parameter: "AssignIdentity"
        );
    }
}
