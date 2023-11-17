<?php

namespace App\Actions\Users;

use App\Actions\Nangu\GeneratePasswordAction;
use App\Jobs\SendEmailJob;
use App\Models\User;

class StoreUserAction
{
    public function execute(object $formData): bool
    {
        try {
            $password = (new GeneratePasswordAction())->execute();
            User::create([
                'name' => $formData->name,
                'email' => $formData->email,
                'password' => $password,
                'nangu_isp_id' => $formData->nangu_isp_id,
                'crm_id' => $formData->crm_id,
                'is_admin' => is_null($formData->is_admin) ? false : $formData->is_admin
            ]);

            SendEmailJob::dispatch(
                $formData->email, $password
            );

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
