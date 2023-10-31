<?php

namespace App\Services\Nangu\Wsdl;

class WsdlCreateSubscriptionService
{
    public function execute(string $subscriberCode, string $subscriptionCode, string $tariffCode, string $localityCode, int $ispCode)
    {
        (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'Create' =>
                    [
                        "subscriberCode" => $subscriberCode,
                        "subscriptionCode" => $subscriptionCode,
                        "subscriptionStbAccountCode" => $subscriptionCode,
                        "currencyCode" => "CZK",
                        "tariffCode" => $tariffCode,
                        "localityCode" => $localityCode,
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "Create"
        );

        return $subscriptionCode;
    }
}
