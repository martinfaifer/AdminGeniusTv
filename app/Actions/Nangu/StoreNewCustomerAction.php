<?php

namespace App\Actions\Nangu;

use App\Services\Nangu\Wsdl\WsdlAssignIdentityService;
use App\Services\Nangu\Wsdl\WsdlCreateIdentityService;
use App\Services\Nangu\Wsdl\WsdlCreateSubscriberService;
use App\Services\Nangu\Wsdl\WsdlCreateSubscriptionService;
use App\Services\Nangu\Wsdl\WsdlEnableSubscriptionService;
use App\Services\Nangu\Wsdl\WsdlStbService;

class StoreNewCustomerAction
{
    public function execute(object $formData, $ispCode): bool
    {
        try {
            $puk = is_null($formData->macAddress) ? implode(':', str_split(substr(md5(mt_rand()), 0, 12), 2)) : $formData->macAddress;
            $subscriberCode = $formData->subscriberCode;

            (new WsdlCreateSubscriberService())->execute(subscriberCode: $subscriberCode, ispCode: $ispCode);
            $subscriptionCode = (new WsdlCreateSubscriptionService())->execute(
                subscriberCode: $subscriberCode,
                subscriptionCode: $formData->subscriptionCode,
                tariffCode: $formData->tariffCode,
                localityCode: $formData->localityCode,
                ispCode: $ispCode
            );
            $identityId = (new WsdlCreateIdentityService())->execute(subscriberCode: $subscriberCode, ispCode: $ispCode);

            (new WsdlAssignIdentityService())->execute(
                subscriptionCode: $subscriptionCode,
                identityId: $identityId,
                ispCode: $ispCode
            );

            if (!is_null($formData->macAddress)) {
                (new WsdlStbService())->store(
                    modelCode: $formData->modelCode,
                    serialNumber: $formData->serialNumber,
                    macAddress: $formData->macAddress,
                    ispCode: $ispCode
                );
            }

            (new WsdlEnableSubscriptionService())->execute(
                subscriptionCode: $subscriberCode,
                puk: $puk,
                ispCode: $ispCode
            );

            return true;
        } catch (\Throwable $th) {

            return false;
        }
    }
}
