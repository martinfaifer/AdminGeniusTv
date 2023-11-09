<?php
namespace App\Actions\Nangu;

use App\Services\Nangu\Wsdl\WsdlStbService;
use App\Services\Nangu\Wsdl\WsdlEnableSubscriptionService;

class StoreStbToSubscriptionAccountAction
{
    public function execute(object $formData, int $ispCode)
    {
        try {
            (new WsdlEnableSubscriptionService())->execute(
                subscriptionCode: $formData->subscriptionCode,
                subscriptionStbAccountCode: $formData->subscriptionStbAccountCode,
                puk: $formData->macAddress,
                ispCode: $ispCode
            );
            
            (new WsdlStbService())->store(
                modelCode: $formData->modelCode,
                serialNumber: $formData->serialNumber,
                macAddress: $formData->macAddress,
                ispCode: $ispCode
            );

            // assing stb
            (new WsdlStbService())->assign(
                subscriptionCode: $formData->subscriptionCode,
                subscriptionStbAccountCode: $formData->subscriptionStbAccountCode,
                modelCode: $formData->modelCode,
                serialNumber: $formData->serialNumber,
                macAddress: $formData->macAddress,
                ispCode: $ispCode
            );
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}