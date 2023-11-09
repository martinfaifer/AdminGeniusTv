<?php
namespace App\Actions\Nangu;

class CreateSubscriptionStbAccountCodeAction
{
    public function execute(string $subscriptionCode): string
    {
        return $subscriptionCode . "-" . time();
    }
}