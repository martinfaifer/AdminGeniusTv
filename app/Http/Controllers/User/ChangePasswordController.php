<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Actions\Users\UpdateUserPasswordAction;

class ChangePasswordController extends Controller
{
    public function __invoke(User $user, UpdateUserPasswordAction $updateUserPasswordAction)
    {
        if (Auth::user()->id == $user->id) {
            return $this->error_response("Nemůžete upravit sami sebe!");
        }

        return $updateUserPasswordAction->execute($user) == true
            ? $this->success_response("Heslo zasláno")
            : $this->error_response("Nepodařilo se změnit heslo");
    }
}
