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
}
