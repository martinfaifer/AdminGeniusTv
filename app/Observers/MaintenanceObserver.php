<?php

namespace App\Observers;

use App\Models\User;
use App\Models\Maintenance;
use App\Jobs\SendNotificationJob;

class MaintenanceObserver
{
    public function created(Maintenance $maintenance)
    {
        $users = User::where('has_maintenance_notification', true)->get();

        $users->each(function ($user) use ($maintenance) {
            // dispatch job
            SendNotificationJob::dispatch($user->email, $maintenance->title, $maintenance->text);
        });
    }
}
