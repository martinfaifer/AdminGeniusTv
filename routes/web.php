<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Nangu\NanguStbController;
use App\Http\Controllers\Nangu\StbModelController;
use App\Http\Controllers\Nangu\SearchNanguController;
use App\Http\Controllers\Nangu\NanguCustomerController;
use App\Http\Controllers\Nangu\NanguIdentityController;
use App\Http\Controllers\Nangu\GetNanguTarrifsController;
use App\Http\Controllers\Nangu\NanguLocalitiesController;
use App\Http\Controllers\Nangu\NanguStbAccountController;
use App\Http\Controllers\Nangu\GeneratePasswordController;
use App\Http\Controllers\Nangu\UpdateSubscriptionTarrifController;
use App\Http\Controllers\Nangu\UpdateSubscriptionLocalityController;

Route::get('/', function () {
    return view('welcome');
});

// Auth
Route::post('login', [AuthController::class, 'login']);
Route::get('login', function() {
    redirect('/#/login');
})->name('login');

Route::middleware('auth.basic')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::prefix('users')->group(function () {
        Route::get('', [UserController::class, 'show']);
    });

    // nangu
    Route::prefix('nangu')->group(function () {
        Route::prefix('tarrifs')->group(function () {
            Route::get('', GetNanguTarrifsController::class);
        });
        Route::prefix('localities')->group(function () {
            Route::get('', [NanguLocalitiesController::class, 'index']);
            // Route::patch('', [NanguLocalitiesController::class, 'update']);
        });
        Route::prefix('search')->group(function () {
            Route::get('{search}', SearchNanguController::class);
        });
        Route::prefix('stb')->group(function () {
            Route::prefix('models')->group(function () {
                Route::get('', [StbModelController::class, 'index']);
            });
            Route::post('', [NanguStbController::class, 'store']);
            Route::delete('{subscriptionStbAccountCode}/{subscriptionCode}/{serialNumber}/{macAddress}', [NanguStbController::class, 'destroy']);
        });

        Route::prefix('customer')->group(function () {
            Route::prefix('stbAccount')->group(function () {
                Route::post('stb', [NanguStbAccountController::class, 'store_stb']);
                Route::get('{subscriptionStbAccountCode}', [NanguStbAccountController::class, 'show']);
            });

            Route::prefix('generate-password')->group(function () {
                Route::get('', GeneratePasswordController::class);
            });

            Route::patch('locality', UpdateSubscriptionLocalityController::class);
            Route::patch('tarrif', UpdateSubscriptionTarrifController::class);
            Route::prefix('identity')->group(function () {
                Route::post('', [NanguIdentityController::class, 'store']);
                Route::patch('', [NanguIdentityController::class, 'update']);
                Route::delete('identity/{identityId}/{subscriptionStbAccountCode}', [NanguIdentityController::class, 'destroy']);
                Route::delete('{subscriptionCode}/{deviceId}', [NanguIdentityController::class, 'destroy_device']);
            });
            Route::get('{subscriberCode}', [NanguCustomerController::class, 'show']);
            Route::post('', [NanguCustomerController::class, 'store']);
            Route::delete('{subscriberCode}', [NanguCustomerController::class, 'destroy']);
        });
    });

});
