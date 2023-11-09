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

    public function show_stb(string $subscriptionCode, string $subscriptionStbAccountCode, int $ispCode)
    {
        $stbs = (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'GetStbInfo' =>
                    [
                        "subscriptionCode" => $subscriptionCode,
                        "subscriptionStbAccountCode" => $subscriptionStbAccountCode,
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "GetStbInfo"
        );

        return $stbs;
    }


    public function unassignIdentity(string $subscriptionStbAccountCode, string $identityId, string $ispCode)
    {
        (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'UnassignIdentity' =>
                    [
                        "subscriptionStbAccountCode" => $subscriptionStbAccountCode,
                        "identityId" => $identityId,
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "UnassignIdentity"
        );
    }

    public function delete(string $subscriptionCode, int $ispCode): bool
    {
        try {
            (new ConnectWsdlService())->connect(
                wsdl: "subscription",
                params: [
                    'Disable' =>
                        [
                            "subscriptionCode" => $subscriptionCode,
                            "ispCode" => $ispCode
                        ]
                ],
                soap_call_parameter: "Disable"
            );

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}