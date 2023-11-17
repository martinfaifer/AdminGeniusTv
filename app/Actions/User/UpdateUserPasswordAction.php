<?php

namespace App\Actions\User;

class UpdateUserPasswordAction
{
    public function execute(object $user, string $password)
    {
        $user->update([
            'password' => $password
        ]);

        return true;
    }
}
