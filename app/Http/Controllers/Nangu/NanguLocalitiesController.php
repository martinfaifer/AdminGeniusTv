<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Nangu\Wsdl\LocalitiesWsdlService;
use Illuminate\Support\Facades\Auth;

class NanguLocalitiesController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $localities = (new LocalitiesWsdlService())->index($user->nanguIsp->isp_id);

        if ($localities == false) {
            return $this->error_response("Nepodařilo se připojit k serveru!");
        }

        return $localities;
    }

    public function update()
    {
        $user = Auth::user();
    }
}
