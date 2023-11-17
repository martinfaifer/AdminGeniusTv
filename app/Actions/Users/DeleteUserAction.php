<?php

namespace App\Actions\Users;

use Illuminate\Support\Facades\Auth;

class DeleteUserAction
{
    public function execute(object $user): bool
    {
        if (Auth::user()->id == $user->id) {
            return false;
        }

        try {
            $user->delete();
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
