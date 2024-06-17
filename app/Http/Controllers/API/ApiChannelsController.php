<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class ApiChannelsController extends Controller
{
    public function __invoke()
    {
        return Http::get(config('services.iptvdoku_new.url') . "v1/public/channels/")->json();
    }
}
