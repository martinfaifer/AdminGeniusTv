<?php

use App\Models\AppCategory;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Apps\AppController;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\News\AppNewsController;
use App\Http\Controllers\Nangu\NanguIspController;
use App\Http\Controllers\Nangu\NanguStbController;
use App\Http\Controllers\Nangu\StbModelController;
use App\Http\Controllers\Tickets\TicketController;
use App\Http\Controllers\Invoice\InvoiceController;
use App\Http\Controllers\Apps\AppCategoryController;
use App\Http\Controllers\News\MaintenanceController;
use App\Http\Controllers\News\NewsChannelController;
use App\Http\Controllers\Nangu\SearchNanguController;
use App\Http\Controllers\Tutorials\TutorialController;
use App\Http\Controllers\Nangu\NanguCustomerController;
use App\Http\Controllers\Nangu\NanguIdentityController;
use App\Http\Controllers\User\ChangePasswordController;
use App\Http\Controllers\Nangu\GetNanguTarrifsController;
use App\Http\Controllers\Nangu\NanguLocalitiesController;
use App\Http\Controllers\Nangu\NanguStbAccountController;
use App\Http\Controllers\Nangu\GeneratePasswordController;
use App\Http\Controllers\Nangu\UpdateSubscriptionTarrifController;
use App\Http\Controllers\Nangu\UpdateSubscriptionLocalityController;
use App\Http\Controllers\User\AuthentificateUserController;

Route::get('/', function () {
    return view('welcome');
});

// Auth
Route::post('login', [AuthController::class, 'login']);

Route::get('login', function () {
    redirect('/#/login');
})->name('login');

Route::middleware('auth')->group(function () {
    Route::post('logout', [AuthController::class, 'logout']);
    Route::prefix('users')->group(function () {
        Route::prefix('authentificate')->group(function() {
            Route::patch('name', [AuthentificateUserController::class, 'update_name']);
            Route::patch('password', [AuthentificateUserController::class, 'update_password']);
        });
        Route::get('', [UserController::class, 'index'])->middleware('isAdmin');
        Route::get('auth', [UserController::class, 'show']);
        Route::post('', [UserController::class, 'store'])->middleware('isAdmin');
        Route::patch('{user}', [UserController::class, 'update'])->middleware('isAdmin');
        Route::patch('{user}/password', ChangePasswordController::class)->middleware('isAdmin');
        Route::delete('{user}', [UserController::class, 'destroy'])->middleware('isAdmin');
    });

    Route::prefix('news')->group(function () {
        Route::prefix('channels-info')->group(function () {
            Route::get('', [NewsChannelController::class, 'index']);
            Route::post('', [NewsChannelController::class, 'store'])->middleware('isAdmin');
            Route::patch('{topic}', [NewsChannelController::class, 'update'])->middleware('isAdmin');
            Route::delete('{topic}', [NewsChannelController::class, 'destroy'])->middleware('isAdmin');
        });

        Route::prefix('maintenances')->group(function () {
            Route::get('', [MaintenanceController::class, 'index']);
            Route::post('', [MaintenanceController::class, 'store'])->middleware('isAdmin');
            Route::patch('{maintenance}', [MaintenanceController::class, 'update'])->middleware('isAdmin');
            Route::delete('{maintenance}', [MaintenanceController::class, 'destroy'])->middleware('isAdmin');
        });

        Route::prefix('apps')->group(function() {
            Route::get('', [AppNewsController::class, 'index']);
        });
    });

    Route::prefix('apps')->group(function () {
        Route::prefix('categories')->group(function () {
            Route::get('', [AppCategoryController::class, 'index']);
            Route::post('', [AppCategoryController::class, 'store'])->middleware('isAdmin');
            Route::patch('{appCategory}', [AppCategoryController::class, 'update'])->middleware('isAdmin');
            Route::delete('{appCategory}', [AppCategoryController::class, 'destroy'])->middleware('isAdmin');
        });
        Route::get('', [AppController::class, 'index']);
        Route::post('', [AppController::class, 'store'])->middleware('isAdmin');
        Route::patch("{app}", [AppController::class, 'update'])->middleware('isAdmin');
        Route::delete("{app}", [AppController::class, 'destroy'])->middleware('isAdmin');
    });

    Route::get('tickets/{status?}', TicketController::class);

    Route::prefix('invoices')->group(function () {
        Route::get('', [InvoiceController::class, 'index']);
        Route::get('download', [InvoiceController::class, 'download']);
    });

    Route::prefix('tutorials')->group(function () {
        Route::get('', [TutorialController::class, 'index']);
        Route::post('', [TutorialController::class, 'store'])->middleware('isAdmin');
        Route::patch('{tutorial}', [TutorialController::class, 'update'])->middleware('isAdmin');
        Route::delete('{tutorial}', [TutorialController::class, 'destroy'])->middleware('isAdmin');
    });

    // nangu
    Route::prefix('nangu')->group(function () {
        Route::get('isps', [NanguIspController::class, 'index'])->middleware('isAdmin');
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
