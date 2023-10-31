<?php

namespace App\Services\Nangu\Wsdl;

class GetLocalitiesWsdlService
{
    public function execute(int $ispCode)
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
}
