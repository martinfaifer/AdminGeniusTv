<?php

namespace App\Http\Controllers\News;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\IndexAppNewsResource;

class AppNewsController extends Controller
{
    public function index()
    {
        return new IndexAppNewsResource([]);
    }
}
