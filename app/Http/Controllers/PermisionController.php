<?php

namespace App\Http\Controllers;

use App\Http\Resources\PermisionResource;
use Illuminate\Http\Request;

class PermisionController extends Controller
{
    public function __invoke(Request $request)
    {
        return PermisionResource::make($request);
    }
}
