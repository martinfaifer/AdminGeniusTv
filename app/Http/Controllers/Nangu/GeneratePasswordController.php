<?php

namespace App\Http\Controllers\Nangu;

use App\Http\Resources\GeneratePasswordResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class GeneratePasswordController extends Controller
{
    public function __invoke(Request $request)
    {
        return new GeneratePasswordResource($request);
    }
}
