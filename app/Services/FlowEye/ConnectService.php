<?php

namespace App\Services\FlowEye;

use Illuminate\Support\Facades\Http;

class ConnectService
{
    public function connect(string $method, $endPoint, $formData = [])
    {
        return Http::withHeaders([
            'x-api-token' => config('services.floweye.api_token')
        ])->$method(config('services.floweye.url') . $endPoint, $formData);
    }

    public function check_header_response($response)
    {
        if ($response->successful()) {
            return $response;
        }

        return false;
    }
}
