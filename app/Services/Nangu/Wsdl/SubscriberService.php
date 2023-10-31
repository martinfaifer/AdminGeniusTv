<?php
namespace App\Services\Nangu\Wsdl;

use App\Services\Nangu\Wsdl\ConnectWsdlService;

class SubscriberService
{
    public function show(string $subscriberCode, int $ispCode)
    {
        $subscriber = (new ConnectWsdlService())->connect(
            wsdl: "subscriber",
            params: [
                'GetInfo' =>
                    [
                        "subscriberCode" => $subscriberCode,
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "GetInfo"
        );

        return $subscriber;
    }
}