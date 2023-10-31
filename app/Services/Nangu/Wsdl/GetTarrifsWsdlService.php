<?php

namespace App\Services\Nangu\Wsdl;

class GetTarrifsWsdlService
{
    public function execute(int $ispCode)
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
}
