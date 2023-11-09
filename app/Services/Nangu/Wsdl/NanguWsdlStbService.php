<?php

namespace App\Services\Nangu\Wsdl;

class NanguWsdlStbService
{
    public function store(string $modelCode, string $serialNumber, string $macAddress, string $ispCode)
    {
        $result = (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'CreateStb' =>
                    [
                        "modelCode" => $modelCode,
                        "serialNumber" => $serialNumber,
                        'macAddress' => $macAddress,
                        'ispCode' => $ispCode
                    ]
            ],
            soap_call_parameter: "CreateStb"
        );

        return $result;
    }

    public function delete(string $serialNumber, string $macAddress, string $ispCode): bool
    {
        try {
            (new ConnectWsdlService())->connect(
                wsdl: "subscription",
                params: [
                    'RemoveStb' =>
                        [
                            "serialNumber" => $serialNumber,
                            'macAddress' => $macAddress,
                            'ispCode' => $ispCode
                        ]
                ],
                soap_call_parameter: "RemoveStb"
            );

            return true;

        } catch (\Throwable $th) {
            return false;
        }
    }
}
