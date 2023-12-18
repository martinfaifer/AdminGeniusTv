<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ApiChannelsController;

Route::prefix('v1')->group(function () {
    Route::prefix('public')->group(function () {
        Route::get('channels', ApiChannelsController::class);
    });
});
