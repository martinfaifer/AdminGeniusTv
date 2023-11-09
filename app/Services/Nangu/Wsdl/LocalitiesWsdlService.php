<?php

namespace App\Services\Nangu\Wsdl;

class LocalitiesWsdlService
{
    public function index(int $ispCode)
    {
        $localities = (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'GetLocalities' =>
                    [
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "GetLocalities"
        );

        return $localities;
    }

    public function update(string $subscriptionCode, string $localityCode, int $ispCode): bool
    {
        try {
            (new ConnectWsdlService())->connect(
                wsdl: "subscription",
                params: [
                    'SetLocality' =>
                        [
                            "subscriptionCode" => $subscriptionCode,
                            'localityCode' => $localityCode,
                            "ispCode" => $ispCode
                        ]
                ],
                soap_call_parameter: "SetLocality"
            );

            return true;

        } catch (\Throwable $th) {
            return false;
        }
    }
}
