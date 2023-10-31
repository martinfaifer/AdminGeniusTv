<?php
namespace App\Actions\Nangu;

use App\Traits\HttpResponseTrait;
use App\Services\Nangu\Wsdl\GetSubscriberDetailService;

class GetSubscriberDetailAction
{
    use HttpResponseTrait;
    public function execute(string $subscriberCode, int $ispCode)
    {
        $detail = (new GetSubscriberDetailService())->show(
            subscriberCode: $subscriberCode,
            ispCode: $ispCode
        );

        return $detail == false
            ? $this->error_response()
            : $this->success_response("Načteno", $detail);
    }
}