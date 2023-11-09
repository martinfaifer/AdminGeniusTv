<?php

namespace App\Services\Nangu\Wsdl;

class TarrifsWsdlService
{
    public function index(int $ispCode)
    {
        $tarrifs = (new ConnectWsdlService())->connect(
            wsdl: "billing",
            params: [
                'GetTariffs' =>
                    [
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "GetTariffs"
        );

        return $tarrifs;
    }

    public function update(string $subscriptionCode, string $tariffCode, int $ispCode): bool
    {
        try {
            (new ConnectWsdlService())->connect(
                wsdl: "subscription",
                params: [
                    'ChangeTariff' =>
                        [
                            "subscriptionCode" => $subscriptionCode,
                            "tariffCode" => $tariffCode,
                            "ispCode" => $ispCode
                        ]
                ],
                soap_call_parameter: "ChangeTariff"
            );

            return true;
        } catch (\Throwable $th) {

            return false;
        }
    }
}
