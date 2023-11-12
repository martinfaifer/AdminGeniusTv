<?php

namespace App\Http\Controllers\Apps;

use App\Http\Resources\IndexAppsResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppController extends Controller
{
    public function index()
    {
        return new IndexAppsResource([]);
    }
}
