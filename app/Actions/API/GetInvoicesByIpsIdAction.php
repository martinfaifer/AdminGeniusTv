<?php

namespace App\Actions\API;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class GetInvoicesByIpsIdAction
{
    public function execute(object $user)
    {
        if (Auth::user()->id != $user->id) {
            return [];
        }

        if (is_null($user->nanguIsp->isp_id)) {
            return [];
        }

        return Http::withBasicAuth(config('services.iptvdoku.username'), config('services.iptvdoku.password'))
            ->get(config('services.iptvdoku.url') . 'v1/nangu/isps/reports/' . $user->nanguIsp->isp_id)->json();
    }
}
