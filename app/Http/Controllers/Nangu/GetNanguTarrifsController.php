<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Nangu\Wsdl\GetTarrifsWsdlService;
use Illuminate\Support\Facades\Auth;

class GetNanguTarrifsController extends Controller
{
    public function __invoke()
    {
        $user = Auth::user();
        return (new GetTarrifsWsdlService())->execute($user->nanguIsp->isp_id);
    }
}
