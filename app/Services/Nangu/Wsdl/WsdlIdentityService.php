<?php
namespace App\Services\Nangu\Wsdl;

class WsdlIdentityService
{

    public function show($subscriptionStbAccountCode, int $ispCode)
    {
        $identity = (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'GetStbAccountIdentities' =>
                    [
                        "subscriptionStbAccountCode" => $subscriptionStbAccountCode,
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "GetStbAccountIdentities"
        );
        return $identity;
    }

    public function update(int $identityId, string $password, int $ispCode): bool
    {
        try {
            (new ConnectWsdlService())->connect(
                wsdl: "identity",
                params: [
                    'SetInfo' =>
                        [
                            "password" => $password,
                            "identityId" => $identityId,
                            "ispCode" => $ispCode
                        ]
                ],
                soap_call_parameter: "SetInfo"
            );

            return true;
        } catch (\Throwable $th) {
            return false;
        }

    }

    public function delete_device(string $subscriptionCode, int $deviceId, string $ispCode)
    {
        try {
            (new ConnectWsdlService())->connect(
                wsdl: "subscription",
                params: [
                    'RemoveDevice' =>
                        [
                            "subscriptionCode" => $subscriptionCode,
                            "deviceId" => $deviceId,
                            "ispCode" => $ispCode
                        ]
                ],
                soap_call_parameter: "RemoveDevice"
            );

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }

    public function delete(int $identityId, string $ispCode)
    {
        try {
            (new ConnectWsdlService())->connect(
                wsdl: "identity",
                params: [
                    'Remove' =>
                        [
                            "identityId" => $identityId,
                            "ispCode" => $ispCode
                        ]
                ],
                soap_call_parameter: "Remove"
            );

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }

    public function unassign(string $subscriptionStbAccountCode, string $identityId, string $ispCode)
    {
        try {
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

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}