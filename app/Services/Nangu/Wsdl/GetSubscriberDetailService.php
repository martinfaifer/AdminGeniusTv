<?php

namespace App\Services\Nangu\Wsdl;

use App\Services\Nangu\Wsdl\ConnectWsdlService;

class GetSubscriberDetailService
{
    public function show(string $subscriberCode, int $ispCode): array|bool
    {
        $subscriptions = [];
        $subscriber = (new SubscriberService())->show($subscriberCode, $ispCode);

        if (array_key_exists('subscriptions', $subscriber['getSubscriptionsResponse'])) {
            if (array_key_exists('subscriptionCode', $subscriber['getSubscriptionsResponse']['subscriptions'])) {
                $subscriptionsResponse = $subscriber['getSubscriptionsResponse'];
            } else {
                // vice polí
                $subscriptionsResponse = $subscriber['getSubscriptionsResponse']['subscriptions'];
            }

            foreach ($subscriptionsResponse as $subscription) {
                $subscriptions[] = (new SubscriptionService())->show(
                    $subscription['subscriptionCode'],
                    $ispCode
                );
            }
        }


        // foreach ($subscriptions as $subscription) {
        //     if (array_key_exists('subscriptionStbAccountCode', $subscription['getSubscriptionStbAccountsResponse']['subscriptionStbAccounts'])) {
        //         $stbAccountsInfo[] = (new StbAccountService())->show(
        //             $subscription['getSubscriptionStbAccountsResponse']['subscriptionStbAccounts']['subscriptionStbAccountCode'],
        //             $ispCode
        //         );
        //     } else {
        //         foreach($subscription['getSubscriptionStbAccountsResponse']['subscriptionStbAccounts'] as $singleSubscription) {
        //             $stbAccountsInfo[] = (new StbAccountService())->show(
        //                 $singleSubscription['subscriptionStbAccountCode'],
        //                 $ispCode
        //             );
        //             // dd($singleSubscription);
        //         }
        //         // dd($subscription['getSubscriptionStbAccountsResponse']);
        //     }
        // }

        return [
            'subscriber' => $subscriber,
            'subscriptions' => $subscriptions,
            // 'stbAccountsInfo' => $stbAccountsInfo
        ];
    }
}
