<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function show()
    {
        $user = Auth::user();
        return !is_null($user)
            ? $this->success_response("Přihlášeno", Auth::user())
            : $this->error_response();
    }
}
