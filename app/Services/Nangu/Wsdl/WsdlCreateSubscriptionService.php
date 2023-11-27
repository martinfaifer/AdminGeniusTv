<?php

namespace App\Services\Nangu\Wsdl;

use App\Actions\Nangu\CreateSubscriptionStbAccountCodeAction;

class WsdlCreateSubscriptionService
{
    public function execute(string $subscriberCode, string $subscriptionCode, string $tariffCode, string $localityCode, int $ispCode)
    {
        // for create unique subscriptionStbAccountCode , where subscriptionCode is root
        $subscriptionStbAccountCode = (new CreateSubscriptionStbAccountCodeAction())->execute($subscriptionCode);

        (new ConnectWsdlService())->connect(
            wsdl: "subscription",
            params: [
                'Create' =>
                    [
                        "subscriberCode" => $subscriberCode,
                        "subscriptionCode" => $subscriptionCode,
                        "subscriptionStbAccountCode" => $subscriptionStbAccountCode,
                        "currencyCode" => "CZK",
                        "tariffCode" => $tariffCode,
                        "localityCode" => $localityCode,
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "Create"
        );

        dump([$subscriptionStbAccountCode]);
        return $subscriptionStbAccountCode;
    }
}
