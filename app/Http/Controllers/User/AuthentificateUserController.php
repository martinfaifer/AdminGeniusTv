<?php

namespace App\Http\Controllers\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Actions\User\UpdateUserNameAction;
use App\Http\Requests\UpdateUserNameRequest;
use App\Actions\User\UpdateUserPasswordAction;
use App\Http\Requests\UpdateUserPasswordRequest;

class AuthentificateUserController extends Controller
{
    public function update_name(UpdateUserNameRequest $request, UpdateUserNameAction $updateUserNameAction)
    {
        $user = Auth::user();
        return $updateUserNameAction->execute($user, $request->name) == true
            ? $this->success_response("Upraveno")
            : $this->error_response("Nepodařilo se upravit");
    }

    public function update_password(UpdateUserPasswordRequest $request, UpdateUserPasswordAction $updateUserNameAction)
    {
        return $updateUserNameAction->execute(Auth::user(), $request->password) == true
            ? $this->success_response("Upraveno")
            : $this->error_response("Nepodařilo se upravit");
    }
}
