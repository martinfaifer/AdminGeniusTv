<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\API\GetApiEndPointsAction;

class ApiEndPointsController extends Controller
{
    public function __invoke(GetApiEndPointsAction $getApiEndPointsAction)
    {
        return $getApiEndPointsAction->execute();
    }
}
