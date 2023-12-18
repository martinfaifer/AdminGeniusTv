<?php

namespace App\Observers;

use App\Jobs\SendNotificationJob;
use App\Models\Topic;
use App\Models\User;

class NewsObserver
{
    public function created(Topic $topic)
    {
        $users = User::where('has_newsletter_notification', true)->get();

        $users->each(function ($user) use ($topic) {
            // dispatch job
            SendNotificationJob::dispatch($user->email, $topic->title, $topic->text);
        });
    }
}
