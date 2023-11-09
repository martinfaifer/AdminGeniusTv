<?php
namespace App\Services\Nangu\Wsdl;

class StbAccountService
{

    public function get(string $subscriptionCode, int $ispCode)
    {
        $data = (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'GetSubscriptionStbAccounts' =>
                    [
                        "subscriptionCode" => $subscriptionCode,
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "GetSubscriptionStbAccounts"
        );

        return $data;
    }

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

    public function enable(string $subscriptionStbAccount, string $macAddress, string $deviceType, string $serialNumber, int $ispCode)
    {
        $stbAccountData = (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'EnableStbAccount' =>
                    [
                        "subscriptionStbAccountCode" => $subscriptionStbAccount,
                        'stb' => [
                            'macAddress' => $macAddress,
                            'serialNumber' => $serialNumber,
                            'deviceType' => $deviceType,
                        ],
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "EnableStbAccount"
        );

        return $stbAccountData;
    }

    public function unassing(string $subscriptionCode, string $subscriptionStbAccountCode, int $ispCode): bool
    {
        try {
            (new ConnectWsdlService())->connect(
                wsdl: "subscription",
                params: [
                    'UnassignStb' =>
                        [
                            "subscriptionCode" => $subscriptionCode,
                            "subscriptionStbAccountCode" => $subscriptionStbAccountCode,
                            "ispCode" => $ispCode
                        ]
                ],
                soap_call_parameter: "UnassignStb"
            );

            return true;

        } catch (\Throwable $th) {

            return false;
        }

    }
}