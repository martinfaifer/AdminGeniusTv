<?php

use App\Models\NanguIsp;
use App\Models\User;

it('get all users', function () {
    $user = User::where('is_admin', true)->first();
    $response = $this->actingAs($user)->get('/users');

    $response->assertStatus(200);
});

it("get authentificated user", function () {

    $user = User::first();

    $response = $this->actingAs($user)->get('users/auth');

    $response->assertStatus(200);
});

it('store new user', function () {

    $user = User::where('is_admin', true)->first();
    $response = $this->actingAs($user)->post('users', [
        'name' => "testing name",
        'email' => "testing@test.cz",
        'nangu_isp_id' => NanguIsp::first()->id,
        'crm_id' => "666",
        'is_admin' => false
    ]);

    $response->assertStatus(200);
});

it('update user name', function () {
    $user = User::where('email', "testing@test.cz")->first();

    $response = $this->actingAs($user)->patch("users/authentificate/name", [
        'name' => "name"
    ]);

    $response->assertStatus(200);
});

it("update user password", function () {
    $user = User::where('email', "testing@test.cz")->first();

    $response = $this->actingAs($user)->patch("users/authentificate/password", [
        'password' => "password123"
    ]);

    $response->assertStatus(200);
});

it("update user as admin", function () {
    $user = User::where('is_admin', true)->first();
    $userForUpdate = User::where('email', "testing@test.cz")->first();

    $response = $this->actingAs($user)->patch("users/" . $userForUpdate->id, [
        'nangu_isp_id' => "1",
        'crm_id' => "661",
        'is_admin' => false
    ]);

    $response->assertStatus(200);
});


it("update user password as admin", function () {
    $user = User::where('is_admin', true)->first();
    $userForUpdate = User::where('email', "testing@test.cz")->first();

    $response = $this->actingAs($user)->patch("users/" . $userForUpdate->id. "/password");

    $response->assertStatus(200);
});


it("delete user as admin", function () {
    $user = User::where('is_admin', true)->first();
    $userForUpdate = User::where('email', "testing@test.cz")->first();

    $response = $this->actingAs($user)->delete("users/" . $userForUpdate->id);

    $response->assertStatus(200);
});
