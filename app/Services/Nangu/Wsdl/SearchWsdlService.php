<?php

namespace App\Services\Nangu\Wsdl;

class SearchWsdlService
{
    public function execute(string $ispCode, string $search)
    {
        $result = (new ConnectWsdlService())->connect(
            wsdl: "subscriber",
            params: [
                'Search' =>
                [
                    "searchText" => $search,
                    "ispCode" => $ispCode
                ]
            ],
            soap_call_parameter: "Search"
        );

        return $result;
    }
}
