<?php

namespace App\Http\Controllers\News;

use App\Http\Resources\IndexNewsChannelResource;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class NewsChannelController extends Controller
{
    public function index()
    {
        return new IndexNewsChannelResource([]);
    }
}
