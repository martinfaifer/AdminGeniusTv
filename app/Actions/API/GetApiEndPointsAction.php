<?php

namespace App\Actions\API;

class GetApiEndPointsAction
{
    public function execute(): array
    {
        return [
            [
                'method' => "GET",
                'endpoint' => "/api/v1/public/channels"
            ]
        ];
    }
}
