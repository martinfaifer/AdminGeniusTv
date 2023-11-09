<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Nangu\Wsdl\TarrifsWsdlService;
use Illuminate\Support\Facades\Auth;

class GetNanguTarrifsController extends Controller
{
    public function __invoke()
    {
        $user = Auth::user();
        $tarrifs = (new TarrifsWsdlService())->index($user->nanguIsp->isp_id);
        
        if($tarrifs == false) {
            return $this->error_response("Nepodařilo se připojit k serveru!");
        }

        return $tarrifs;
    }
}
