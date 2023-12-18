<?php

namespace App\Actions\User;

class UpdateUserNotificationAction
{
    public function execute(object $user, $formData): bool
    {
        try {
            $user->update([
                $formData->notificationType => $formData->state
            ]);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
