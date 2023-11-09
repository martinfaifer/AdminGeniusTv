<?php
namespace App\Services\Nangu\Wsdl;

class DeleteSubscriberCodeService
{
    public function delete(string $subscriberCode, string $ispCode)
    {
        (new ConnectWsdlService())->connect(
            wsdl: "subscriber",
            params: [
                'Disable' =>
                    [
                        "subscriberCode" => $subscriberCode
                    ]
            ],
            soap_call_parameter: "Disable"
        );

    }
}