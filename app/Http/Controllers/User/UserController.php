<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Actions\Users\StoreUserAction;
use App\Actions\Users\DeleteUserAction;
use App\Actions\Users\UpdateUserAction;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\IndexUsersResource;
use App\Http\Resources\ShowAsAdminUserResource;

class UserController extends Controller
{

    public function index()
    {
        return new IndexUsersResource([]);
    }

    public function show()
    {
        $user = Auth::user();
        return !is_null($user)
            ? $this->success_response("Přihlášeno", Auth::user()->load(['nanguIsp', 'permisions.permision']))
            : $this->error_response();
    }

    public function show_user(User $user)
    {
        return ShowAsAdminUserResource::make($user->load(['nanguIsp', 'permisions.permision']));
    }

    public function store(StoreUserRequest $request, StoreUserAction $storeUserAction)
    {
        return $storeUserAction->execute(formData: $request) == true
            ? $this->success_response("Vytvořeno, přístupy odeslány do emailu")
            : $this->error_response("Nepodařilo se vytvořit");
    }

    public function update(User $user, UpdateUserRequest $request, UpdateUserAction $updateUserAction)
    {
        if (Auth::user()->id == $user->id) {
            return $this->error_response("Nemůžete upravit sami sebe!");
        }

        return $updateUserAction->execute(
            user: $user,
            formData: $request
        ) == true
            ? $this->success_response("Upraveno")
            : $this->error_response("Nepodařilo se upravit");
    }

    public function destroy(User $user, DeleteUserAction $deleteUserAction)
    {
        if (Auth::user()->id == $user->id) {
            return $this->error_response("Nemůžete upravit sami sebe!");
        }
        return $deleteUserAction->execute($user) == true
            ? $this->success_response("Odebráno")
            : $this->error_response("Nepodařilo se odebrat uživatele");
    }
}
