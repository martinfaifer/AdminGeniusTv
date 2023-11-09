<?php

namespace App\Services\Nangu\Wsdl;

class WsdlEnableSubscriptionService
{
    public function execute(string $subscriptionCode, string $subscriptionStbAccountCode, string $puk, int $ispCode)
    {
        $response = (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'Enable' =>
                    [
                        "subscriptionCode" => $subscriptionCode,
                        "subscriptionStbAccountCode" => $subscriptionStbAccountCode,
                        "puk" => $puk,
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "Enable"
        );

        return $response;
    }
}
