<?php

namespace App\Services\Nangu\Wsdl;

class DeleteSubscriberCodeService
{
    public function delete(string $subscriberCode, string $ispCode)
    {
        (new ConnectWsdlService())->connect(
            wsdl: "subscriber",
            params: [
                'disable' =>
                [
                    "subscriberCode" => $subscriberCode,
                    'ispCode' => $ispCode
                ]
            ],
            soap_call_parameter: "disable"
        );
    }
}
