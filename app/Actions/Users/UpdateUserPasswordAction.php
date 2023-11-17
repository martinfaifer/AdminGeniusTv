<?php

namespace App\Actions\Users;

use App\Actions\Nangu\GeneratePasswordAction;
use App\Jobs\SendChangePasswordEmailJob;

class UpdateUserPasswordAction
{
    public function execute(object $user)
    {
        try {
            $password = (new GeneratePasswordAction())->execute();
            $user->update([
                'password' => $password
            ]);

            // send email
            SendChangePasswordEmailJob::dispatch($user->email, $password);
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
