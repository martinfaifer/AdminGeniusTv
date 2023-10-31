<?php
namespace App\Services\Nangu\Wsdl;

use App\Services\Nangu\Wsdl\ConnectWsdlService;

class SubscriptionService
{
    public function show(string $subscriptionCode, int $ispCode)
    {
        $subscription = (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'GetInfo' =>
                    [
                        "subscriptionCode" => $subscriptionCode,
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "GetInfo"
        );

        return $subscription;
    }
}