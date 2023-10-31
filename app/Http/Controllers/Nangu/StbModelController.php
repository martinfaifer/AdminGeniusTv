<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\IndexStbModelResource;

class StbModelController extends Controller
{
    public function index(Request $request)
    {
        return new IndexStbModelResource($request);
    }
}
