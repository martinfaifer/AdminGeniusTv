<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreNanguStbRequest;
use App\Services\Nangu\Wsdl\NanguWsdlStbService;

class NanguStbController extends Controller
{
    public function store(StoreNanguStbRequest $request)
    {
        return (new NanguWsdlStbService())->store(
            modelCode: $request->modelCode,
            serialNumber: $request->serialNumber,
            macAddress: $request->macAddress,
            ispCode: $request->ispCode
        );
    }
}
