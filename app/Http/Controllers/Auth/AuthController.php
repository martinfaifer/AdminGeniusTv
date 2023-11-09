<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Actions\Auth\LoginAction;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request, LoginAction $loginAction)
    {
        return $loginAction->execute($request) == true
            ? $this->success_response("Přihlášeno", Auth::user())
            : $this->error_response();
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();
    }
}
