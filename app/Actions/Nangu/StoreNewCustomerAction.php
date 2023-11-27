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
            $subscriberCode = $formData->subscriberCode;
            $puk = $this->get_puk($formData);

            (new WsdlCreateSubscriberService())->execute(subscriberCode: $subscriberCode, ispCode: $ispCode);

            $subscriptionStbAccountCode = (new WsdlCreateSubscriptionService())->execute(
                subscriberCode: $subscriberCode,
                subscriptionCode: $formData->subscriptionCode,
                tariffCode: $formData->tariffCode,
                localityCode: $formData->localityCode,
                ispCode: $ispCode
            );
            $identityId = (new WsdlCreateIdentityService())->execute(
                username: is_null($formData->identityName) ? $formData->subscriptionCode : $formData->identityName,
                password: $formData->identityPassword,
                ispCode: $ispCode
            );

            (new WsdlAssignIdentityService())->execute(
                subscriptionStbAccountCode: $subscriptionStbAccountCode,
                identityId: $identityId,
                ispCode: $ispCode
            );

            (new WsdlEnableSubscriptionService())->execute(
                subscriptionCode: $formData->subscriptionCode,
                subscriptionStbAccountCode: $subscriptionStbAccountCode,
                puk: $puk,
                ispCode: $ispCode
            );

            if (!is_null($formData->modelCode) || !is_null($formData->serialNumber) || !is_null($formData->macAddress)) {
                (new WsdlStbService())->store(
                    modelCode: $formData->modelCode,
                    serialNumber: $formData->serialNumber,
                    macAddress: $formData->macAddress,
                    ispCode: $ispCode
                );

                // assing stb
                (new WsdlStbService())->assign(
                    subscriptionCode: $formData->subscriptionCode,
                    subscriptionStbAccountCode: $subscriptionStbAccountCode,
                    modelCode: $formData->modelCode,
                    serialNumber: $formData->serialNumber,
                    macAddress: $formData->macAddress,
                    ispCode: $ispCode
                );
            }

            return true;
        } catch (\Throwable $th) {

            return false;
        }
    }

    protected function get_puk(object $formData): string
    {
        if (is_null($formData->modelCode) || is_null($formData->serialNumber) || is_null($formData->macAddress)) {
            return (new MacGeneratorAction())->execute();
        } else {
            return $formData->macAddress;
        }
    }
}
