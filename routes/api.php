<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\StateController;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

Route::namespace('Api')->group(function () {

    Route::prefix('auth')->group(function () {
        Route::post('/registration', [AuthController::class, 'registration']);
        Route::post('/login', [AuthController::class, 'login']);
        Route::post('/logout', [AuthController::class, 'logout'])->middleware("auth:sanctum");
    });

    Route::group(["middleware" => ["auth:sanctum"]], function () {
        Route::get('/state', [StateController::class, 'index']);
    });
});
