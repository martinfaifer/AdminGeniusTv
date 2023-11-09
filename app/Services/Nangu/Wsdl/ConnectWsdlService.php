<?php

namespace App\Services\Nangu\Wsdl;

use SoapClient;

class ConnectWsdlService
{
    public $soap;

    public function connect(string $wsdl, array $params, string $soap_call_parameter)
    {
        try {
            $this->soap = new SoapClient(config('services.nangu.url') . $this->available_endpoints($wsdl), [
                "exceptions" => true,
            ] );

            $soap_data = $this->soap->__soapCall($soap_call_parameter, $params);

            $response = json_decode(json_encode($soap_data), true);

            return $response;
        } catch (\Throwable $th) {
            return false;
        }
    }


    private function available_endpoints(string $systemEndPointName): string
    {
        return match ($systemEndPointName) {
            'billing' => '/adminws/billing/BillingEndpoint?wsdl',
            'subscription' => '/adminws/provisioning/SubscriptionEndpoint?wsdl',
            'subscriber' => '/adminws/provisioning/SubscriberEndpoint?wsdl',
            'identity' => '/adminws/provisioning/IdentityEndpoint?wsdl',
            'iptv' => '/adminws/iptv/IptvEndpoint?wsdl'
        };
    }
}
