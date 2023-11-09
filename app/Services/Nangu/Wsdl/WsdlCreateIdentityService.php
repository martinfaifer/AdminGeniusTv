<?php

namespace App\Services\Nangu\Wsdl;

class WsdlCreateIdentityService
{
    public function execute(string $username, string $password, int $ispCode): string
    {
        $identityId = (new ConnectWsdlService())->connect(
            wsdl: "identity",
            params: [
                'Create' =>
                    [
                        "master" => true,
                        "username" => $username,
                        "password" => $password,
                        "pairingPin" => mt_rand(1000000000, 9999999999),
                        "ispCode" => $ispCode
                    ]
            ],
            soap_call_parameter: "Create"
        );

        return $identityId['identityId'];
    }
}
