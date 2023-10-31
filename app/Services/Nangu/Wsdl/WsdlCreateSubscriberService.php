<?php

namespace App\Services\Nangu\Wsdl;

use App\Services\Nangu\Wsdl\ConnectWsdlService;
use App\Actions\Nangu\GenerateSubscriberCodeAction;

class  WsdlCreateSubscriberService
{
    public function execute(string $subscriberCode, int $ispCode)
    {
        (new ConnectWsdlService())->connect(
            wsdl: "subscriber",
            params: [
                'Create' =>
                [
                    "subscriberCode" => $subscriberCode,
                    'ispCode' => $ispCode
                ]
            ],
            soap_call_parameter: "Create"
        );

        return $subscriberCode;
    }
}
