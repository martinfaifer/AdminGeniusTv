<?php

namespace App\Http\Controllers\Tickets;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\ShowTicketsResource;
use Illuminate\Support\Facades\Auth;
use App\Services\FlowEye\FlowEyeService;

class TicketController extends Controller
{
    public function __invoke($status = null)
    {
        if (is_null(Auth::user()->crm_id)) {
            return $this->error_response("Nemáte vazbu na tikety");
        }
        return new ShowTicketsResource($status);
    }
}
