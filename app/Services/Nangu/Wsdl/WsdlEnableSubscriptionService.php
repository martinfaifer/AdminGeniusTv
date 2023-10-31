<?php

namespace App\Services\Nangu\Wsdl;

class WsdlEnableSubscriptionService
{
    public function execute(string $subscriptionCode, string|null $puk, int $ispCode)
    {
        $response = (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'Enable' =>
                [
                    "subscriptionCode" => $subscriptionCode,
                    "subscriptionStbAccountCode" => $subscriptionCode,
                    "puk" => is_null($puk) ? implode(':', str_split(substr(md5(mt_rand()), 0, 12), 2)) : $puk,
                    "ispCode" => $ispCode
                ]
            ],
            soap_call_parameter: "Enable"
        );

        return $response;
    }
}
