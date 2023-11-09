<?php

namespace App\Services\Nangu\Wsdl;

class WsdlAssignIdentityService
{
    public function execute(string $subscriptionStbAccountCode, string $identityId, int $ispCode)
    {
        (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'AssignIdentity' =>
                [
                    "subscriptionStbAccountCode" => $subscriptionStbAccountCode,
                    "identityId" => $identityId,
                    "ispCode" => $ispCode
                ]
            ],
            soap_call_parameter: "AssignIdentity"
        );
    }
}
