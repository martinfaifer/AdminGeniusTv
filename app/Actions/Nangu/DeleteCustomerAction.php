<?php
namespace App\Actions\Nangu;

use App\Services\Nangu\Wsdl\StbAccountService;
use App\Services\Nangu\Wsdl\NanguWsdlStbService;
use App\Services\Nangu\Wsdl\SubscriptionService;
use App\Services\Nangu\Wsdl\WsdlIdentityService;
use App\Services\Nangu\Wsdl\GetSubscriberDetailService;
use App\Services\Nangu\Wsdl\DeleteSubscriberCodeService;

class DeleteCustomerAction
{
    public function execute(string $subscriberCode, string $ispCode)
    {
        $wsdlIdentityService = new WsdlIdentityService();
        $stbAccountService = new StbAccountService();
        $subscriptionService = new SubscriptionService();
        $nanguWsdlStbService = new NanguWsdlStbService();

        $subscriberDetail = (new GetSubscriberDetailService())->show(
            subscriberCode: $subscriberCode,
            ispCode: $ispCode
        );

        $subscriptions = $subscriberDetail['subscriber']['getSubscriptionsResponse'];

        if (array_key_exists("subscriptionCode", $subscriptions['subscriptions'])) {
            // JEDNA SUBSCRIPTION
            foreach ($subscriptions as $subscription) {
                $stbAccountsData = $stbAccountService->get(
                    subscriptionCode: $subscription['subscriptionCode'],
                    ispCode: $ispCode
                );
                // STB ACCOUNT SECTION
                foreach ($stbAccountsData as $stbAccount) {
                    $identities = $wsdlIdentityService->show($stbAccount['subscriptionStbAccountCode'], $ispCode);

                    // UNASSIGN IDENTITY
                    $wsdlIdentityService->unassign(
                        subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                        identityId: $identities['identities']['identityId'],
                        ispCode: $ispCode
                    );

                    // DELETE IDENTITY
                    $wsdlIdentityService->delete(
                        identityId: $identities['identities']['identityId'],
                        ispCode: $ispCode
                    );

                    // STB SECTION
                    $stbsData = $subscriptionService->show_stb(
                        subscriptionCode: $subscription['subscriptionCode'],
                        subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                        ispCode: $ispCode
                    );

                    // UNASSING STB ACCOUNT
                    $stbAccountService->unassing(
                        subscriptionCode: $subscription['subscriptionCode'],
                        subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                        ispCode: $ispCode
                    );

                    if (array_key_exists("stb", $stbsData)) {
                        // DELETE STB
                        $nanguWsdlStbService->delete(
                            serialNumber: $stbsData['stb']['serialNumber'],
                            macAddress: $stbsData['stb']['macAddress'],
                            ispCode: $ispCode
                        );
                    }
                }

                // REMOVE SUBSCRIPTION
                $subscriptionService->delete(
                    subscriptionCode: $subscription['subscriptionCode'],
                    ispCode: $ispCode
                );
            }



        } else {
            // MNOHO SUBSCRIPTONS
            foreach ($subscriptions['subscriptions'] as $subscription) {
                $stbAccountsData = $stbAccountService->get(
                    subscriptionCode: $subscription['subscriptionCode'],
                    ispCode: $ispCode
                );
                // STB ACCOUNT SECTION
                foreach ($stbAccountsData['subscriptionStbAccounts'] as $stbAccount) {
                    $identities = $wsdlIdentityService->show($stbAccount['subscriptionStbAccountCode'], $ispCode);
                    if (array_key_exists('identityId', $identities['identities'])) {
                        // UNASSIGN IDENTITY
                        $wsdlIdentityService->unassign(
                            subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                            identityId: $identities['identities']['identityId'],
                            ispCode: $ispCode
                        );

                        // DELETE IDENTITY
                        $wsdlIdentityService->delete(
                            identityId: $identities['identities']['identityId'],
                            ispCode: $ispCode
                        );
                    } else {
                        // IDENTITIES SECTION
                        foreach ($identities['identities'] as $identity) {
                            // UNASSIGN IDENTITY
                            $wsdlIdentityService->unassign(
                                subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                                identityId: $identity['identityId'],
                                ispCode: $ispCode
                            );

                            // DELETE IDENTITY
                            $wsdlIdentityService->delete(
                                identityId: $identity['identityId'],
                                ispCode: $ispCode
                            );
                        }
                    }

                    // UNASSING STB ACCOUNT
                    $stbAccountService->unassing(
                        subscriptionCode: $subscription['subscriptionCode'],
                        subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                        ispCode: $ispCode
                    );

                    // STB SECTION
                    $stbsData = $subscriptionService->show_stb(
                        subscriptionCode: $subscription['subscriptionCode'],
                        subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                        ispCode: $ispCode
                    );

                    if (array_key_exists("stb", $stbsData)) {
                        // DELETE STB
                        $nanguWsdlStbService->delete(
                            serialNumber: $stbsData['stb']['serialNumber'],
                            macAddress: $stbsData['stb']['macAddress'],
                            ispCode: $ispCode
                        );
                    }
                }
            }
        }

        // delete subscriber -> subscriberCode
        (new DeleteSubscriberCodeService())->delete(
            subscriberCode: $subscriberCode,
            ispCode: $ispCode
        );
    }
}