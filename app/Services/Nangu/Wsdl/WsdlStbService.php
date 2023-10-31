<?php

namespace App\Services\Nangu\Wsdl;

class WsdlStbService
{
    public function store(string $modelCode, string $serialNumber, string $macAddress, int $ispCode)
    {
        (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'CreateStb' =>
                [
                    "modelCode" => $modelCode,
                    "serialNumber" => $serialNumber,
                    "macAddress" => $macAddress,
                    "ispCode" => $ispCode
                ]
            ],
            soap_call_parameter: "CreateStb"
        );
    }
}
