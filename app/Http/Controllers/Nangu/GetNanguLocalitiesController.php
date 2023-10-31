<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Nangu\Wsdl\GetLocalitiesWsdlService;
use Illuminate\Support\Facades\Auth;

class GetNanguLocalitiesController extends Controller
{
    public function __invoke()
    {
        $user = Auth::user();
        return (new GetLocalitiesWsdlService())->execute($user->nanguIsp->isp_id);
    }
}
