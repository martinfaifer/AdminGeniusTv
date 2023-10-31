<?php
namespace App\Services\Nangu\Wsdl;

class StbAccountService
{
    public function show(string $subscriptionStbAccount, int $ispCode)
    {
        $stbAccountData = (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'GetStbAccountInfo' =>
                    [
                        "subscriptionStbAccountCode" => $subscriptionStbAccount,
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "GetStbAccountInfo"
        );

        return $stbAccountData;
    }
}