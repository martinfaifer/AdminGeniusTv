<?php

namespace App\Http\Controllers\Invoice;

use App\Actions\API\GetInvoicesByIpsIdAction;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class InvoiceController extends Controller
{
    public function index(GetInvoicesByIpsIdAction $getInvoicesByIpsIdAction)
    {
        return $getInvoicesByIpsIdAction->execute(Auth::user());
    }

    public function download(Request $request)
    {
        $auth = base64_encode(config('services.iptvdoku.username').':'.config('services.iptvdoku.password'));
        $context = stream_context_create([
            'http' => [
                'header' => "Authorization: Basic $auth",
            ],
        ]);

        $postdata = http_build_query(
            [
                'endpoint' => $request->path,
            ]
        );

        $opts = [
            'http' => [
                'method' => 'POST',
                'header' => [
                    'Content-Type: application/x-www-form-urlencoded',
                    "Authorization: Basic $auth",
                ],
                'content' => $postdata,
            ],
        ];

        $context = stream_context_create($opts);

        $result = file_get_contents(config('services.iptvdoku.url').'v1/nangu/isps/report', false, $context);

        header('Content-Type: application/pdf');
        echo $result;
    }
}
