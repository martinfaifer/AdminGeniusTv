<?php

namespace App\Http\Controllers\Invoice;

use App\Actions\API\GetInvoicesByIpsIdAction;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InvoiceController extends Controller
{
    public function show(User $user, GetInvoicesByIpsIdAction $getInvoicesByIpsIdAction)
    {
        return $getInvoicesByIpsIdAction->execute($user);
    }
}
