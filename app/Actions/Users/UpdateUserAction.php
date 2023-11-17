<?php

namespace App\Actions\Users;

class UpdateUserAction
{
    public function execute(object $user, object $formData): bool
    {
        try {
            $user->update([
                'nangu_isp_id' => $formData->nangu_isp_id,
                'crm_id' => $formData->crm_id,
                'is_admin' => is_null($formData->is_admin) ? false : $formData->is_admin
            ]);
            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
