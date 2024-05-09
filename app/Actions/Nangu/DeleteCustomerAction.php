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

        try {
            $subscriberDetail = (new GetSubscriberDetailService())->show(
                subscriberCode: $subscriberCode,
                ispCode: $ispCode
            );

            $subscriptions = $subscriberDetail['subscriber']['getSubscriptionsResponse'];
        } catch (\Throwable $th) {
            // nenalezeny subscriptions
        }

        try {
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

                        if (array_key_exists('identities', $identities)) {
                            // UNASSIGN IDENTITY
                            $wsdlIdentityService->unassign(
                                subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                                identityId: $identities['identities']['identityId'],
                                ispCode: $ispCode
                            );

                            sleep(2);
                            // DELETE IDENTITY
                            $wsdlIdentityService->delete(
                                identityId: $identities['identities']['identityId'],
                                ispCode: $ispCode
                            );

                            sleep(2);
                        }

                        // STB SECTION
                        $stbsData = $subscriptionService->show_stb(
                            subscriptionCode: $subscription['subscriptionCode'],
                            subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                            ispCode: $ispCode
                        );

                        sleep(2);
                        // UNASSING STB ACCOUNT
                        $stbAccountService->unassing(
                            subscriptionCode: $subscription['subscriptionCode'],
                            subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                            ispCode: $ispCode
                        );


                        if (array_key_exists("stb", $stbsData)) {
                            sleep(2);
                            // DELETE STB
                            $nanguWsdlStbService->delete(
                                serialNumber: $stbsData['stb']['serialNumber'],
                                macAddress: $stbsData['stb']['macAddress'],
                                ispCode: $ispCode
                            );
                        }
                    }

                    sleep(2);
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
                        sleep(2);
                        if (array_key_exists('identityId', $identities['identities'])) {
                            // UNASSIGN IDENTITY
                            if (array_key_exists('identities', $identities)) {
                                sleep(2);
                                $wsdlIdentityService->unassign(
                                    subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                                    identityId: $identities['identities']['identityId'],
                                    ispCode: $ispCode
                                );

                                // DELETE IDENTITY
                                sleep(2);
                                $wsdlIdentityService->delete(
                                    identityId: $identities['identities']['identityId'],
                                    ispCode: $ispCode
                                );
                            }
                        } else {
                            // IDENTITIES SECTION
                            foreach ($identities['identities'] as $identity) {
                                // UNASSIGN IDENTITY
                                sleep(2);
                                $wsdlIdentityService->unassign(
                                    subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                                    identityId: $identity['identityId'],
                                    ispCode: $ispCode
                                );

                                // DELETE IDENTITY
                                sleep(2);
                                $wsdlIdentityService->delete(
                                    identityId: $identity['identityId'],
                                    ispCode: $ispCode
                                );
                            }
                        }

                        // UNASSING STB ACCOUNT
                        sleep(2);
                        $stbAccountService->unassing(
                            subscriptionCode: $subscription['subscriptionCode'],
                            subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                            ispCode: $ispCode
                        );

                        // STB SECTION
                        sleep(2);
                        $stbsData = $subscriptionService->show_stb(
                            subscriptionCode: $subscription['subscriptionCode'],
                            subscriptionStbAccountCode: $stbAccount['subscriptionStbAccountCode'],
                            ispCode: $ispCode
                        );

                        if (array_key_exists("stb", $stbsData)) {
                            // DELETE STB
                            sleep(2);
                            $nanguWsdlStbService->delete(
                                serialNumber: $stbsData['stb']['serialNumber'],
                                macAddress: $stbsData['stb']['macAddress'],
                                ispCode: $ispCode
                            );
                        }
                    }
                }
            }
        } catch (\Throwable $th) {
            //throw $th;
        }

        // sleep(3);
        // delete subscriber -> subscriberCode
        (new DeleteSubscriberCodeService())->delete(
            subscriberCode: $subscriberCode,
            ispCode: $ispCode
        );
    }
}
