<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Actions\User\UpdateUserNotificationAction;
use App\Http\Requests\UpdateUserNotificationRequest;

class UserNotificationController extends Controller
{
    public function __invoke(UpdateUserNotificationRequest $request, UpdateUserNotificationAction $updateUserNotificationAction)
    {
        return $updateUserNotificationAction->execute(user: Auth::user(), formData: $request) == true
            ? $this->success_response("Upraveno")
            : $this->error_response("Nepodařilo se upravit");
    }
}
