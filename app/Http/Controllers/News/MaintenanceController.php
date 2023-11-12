<?php

namespace App\Http\Controllers\News;

use App\Http\Resources\IndexMaintenanceResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MaintenanceController extends Controller
{
    public function index()
    {
        return new IndexMaintenanceResource([]);
    }
}
