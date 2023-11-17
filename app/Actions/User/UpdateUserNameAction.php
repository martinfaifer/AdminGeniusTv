<?php

namespace App\Actions\User;

class UpdateUserNameAction
{
    public function execute(object $user, string $name): true
    {
        $user->update([
            'name' => $name
        ]);

        return true;
    }
}
