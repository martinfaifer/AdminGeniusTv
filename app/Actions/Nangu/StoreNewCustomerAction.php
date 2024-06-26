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
        // try {
        $puk = $this->get_puk($formData);

        (new WsdlCreateSubscriberService())->execute(subscriberCode: $formData->subscriberCode, ispCode: $ispCode);

        sleep(1);
        $subscriptionStbAccountCode = (new WsdlCreateSubscriptionService())->execute(
            subscriberCode: $formData->subscriberCode,
            subscriptionCode: $formData->subscriptionCode,
            tariffCode: $formData->tariffCode,
            localityCode: $formData->localityCode,
            ispCode: $ispCode
        );

        info("subscriptionStbAccountCode", [$subscriptionStbAccountCode]);

        sleep(1);
        $identityId = (new WsdlCreateIdentityService())->execute(
            username: is_null($formData->identityName) ? $formData->subscriptionCode : $formData->identityName,
            password: $formData->identityPassword,
            ispCode: $ispCode
        );

        sleep(1);
        (new WsdlAssignIdentityService())->execute(
            subscriptionStbAccountCode: $subscriptionStbAccountCode,
            identityId: $identityId,
            ispCode: $ispCode
        );

        sleep(1);
        (new WsdlEnableSubscriptionService())->execute(
            subscriptionCode: $formData->subscriptionCode,
            subscriptionStbAccountCode: $subscriptionStbAccountCode,
            puk: $puk,
            ispCode: $ispCode
        );

        if (!is_null($formData->modelCode) || !is_null($formData->serialNumber) || !is_null($formData->macAddress)) {
            sleep(1);
            (new WsdlStbService())->store(
                modelCode: $formData->modelCode,
                serialNumber: $formData->serialNumber,
                macAddress: $formData->macAddress,
                ispCode: $ispCode
            );

            sleep(1);
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
        // } catch (\Throwable $th) {

        //     return false;
        // }
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
