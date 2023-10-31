<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Nangu\NanguStbController;
use App\Http\Controllers\Nangu\StbModelController;
use App\Http\Controllers\Nangu\SearchNanguController;
use App\Http\Controllers\Nangu\NanguCustomerController;
use App\Http\Controllers\Nangu\GetNanguTarrifsController;
use App\Http\Controllers\Nangu\NanguStbAccountController;
use App\Http\Controllers\Nangu\GetNanguLocalitiesController;

Route::get('/', function () {
    return view('welcome');
});

// Auth
Route::post('login', [AuthController::class, 'login']);

Route::middleware('auth')->group(function () {
    Route::prefix('users')->group(function () {
        Route::get('', [UserController::class, 'show']);
    });

    // nangu
    Route::prefix('nangu')->group(function () {
        Route::prefix('tarrifs')->group(function () {
            Route::get('', GetNanguTarrifsController::class);
        });
        Route::prefix('localities')->group(function () {
            Route::get('', GetNanguLocalitiesController::class);
        });
        Route::prefix('search')->group(function () {
            Route::get('{search}', SearchNanguController::class);
        });
        Route::prefix('stb')->group(function () {
            Route::prefix('models')->group(function () {
                Route::get('', [StbModelController::class, 'index']);
            });
            Route::post('', [NanguStbController::class, 'store']);
        });

        Route::prefix('customer')->group(function () {
            Route::prefix('stbAccount')->group(function () {
                Route::get('{subscriptionStbAccountCode}', [NanguStbAccountController::class, 'show']);
            });
            Route::get('{subscriberCode}', [NanguCustomerController::class, 'show']);
            Route::post('', [NanguCustomerController::class, 'store']);
            Route::delete('{subscriberCode}', [NanguCustomerController::class, 'destroy']);
        });
    });

});
