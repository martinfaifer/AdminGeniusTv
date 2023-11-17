<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\IndexNanguIspResource;

class NanguIspController extends Controller
{
    // data is getted from iptvdoku via api call and stored in db
    public function index()
    {
        return new IndexNanguIspResource([]);
    }
}
