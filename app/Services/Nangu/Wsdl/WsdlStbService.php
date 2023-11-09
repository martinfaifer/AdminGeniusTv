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
                        'stb' => [
                            "modelCode" => $modelCode,
                            "serialNumber" => $serialNumber,
                            "macAddress" => $macAddress,
                        ],
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "CreateStb"
        );
    }

    public function assign(
        string $subscriptionCode,
        string $subscriptionStbAccountCode,
        string $modelCode,
        string $serialNumber,
        string $macAddress,
        string $ispCode
    ) {
        (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'AssignStb' =>
                    [
                        "subscriptionCode" => $subscriptionCode,
                        "subscriptionStbAccountCode" => $subscriptionStbAccountCode,
                        'stb' => [
                            "modelCode" => $modelCode,
                            "serialNumber" => $serialNumber,
                            "macAddress" => $macAddress,
                        ],
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "AssignStb"
        );
    }
}
