<?php

namespace App\Actions\Users;

use App\Models\Permision;
use App\Models\UserHasPermision;

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

            // update permisions
            $this->permisions($user->id, $formData);

            return true;
        } catch (\Throwable $th) {
            return false;
        }
    }

    protected function permisions(int $userId, $formData)
    {
        $permisions = Permision::get();
        // find permision id
        foreach ($permisions as $permision) {
            if ($permision->permision == "show_news") {
                $this->manipulate_with_user_permision($permision, $userId, $formData->show_news);
            }
            if ($permision->permision == "show_apps") {
                $this->manipulate_with_user_permision($permision, $userId, $formData->show_apps);
            }

            if ($permision->permision == "show_invoices") {
                $this->manipulate_with_user_permision($permision, $userId, $formData->show_invoices);
            }

            if ($permision->permision == "show_tutorials") {
                $this->manipulate_with_user_permision($permision, $userId, $formData->show_tutorials);
            }

            if ($permision->permision == "show_nangu") {
                $this->manipulate_with_user_permision($permision, $userId, $formData->show_nangu);
            }

            if ($permision->permision == "show_api") {
                $this->manipulate_with_user_permision($permision, $userId, $formData->show_api);
            }

            if ($permision->permision == "show_tickets") {
                $this->manipulate_with_user_permision($permision, $userId, $formData->show_tickets);
            }
        }
    }

    protected function manipulate_with_user_permision(object $permision, int $userId, bool $needle)
    {
        if ($needle == false) {
            UserHasPermision::where('user_id', $userId)->where('permision_id', $permision->id)->delete();
        } else {
            if (!UserHasPermision::where('user_id',  $userId)->where('permision_id', $permision->id)->first()) {
                UserHasPermision::create([
                    'user_id' => $userId,
                    'permision_id' => $permision->id
                ]);
            }
        }
    }
}
