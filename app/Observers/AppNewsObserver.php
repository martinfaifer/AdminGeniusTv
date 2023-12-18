<?php

namespace App\Observers;

use App\Models\User;
use App\Models\AppNews;
use App\Jobs\SendNotificationJob;

class AppNewsObserver
{
    public function created(AppNews $appNews)
    {
        $users = User::where('has_apps_notification', true)->get();

        $users->each(function ($user) use ($appNews) {
            // dispatch job
            SendNotificationJob::dispatch($user->email, $appNews->title, $appNews->text);
        });
    }
}
