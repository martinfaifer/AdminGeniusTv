<?php

use App\Models\User;

it('return login page', function () {
    $response = $this->get('login');

    $response->assertStatus(200);
});

it('login user', function () {

    $response = $this->post('login', [
        'email' => "admin@admin.cz",
        'password' => "1122334455"
    ]);

    $response->assertStatus(200);
});

it('logout authentificated user', function () {

    $user = User::first();
    $response = $this->actingAs($user)->post('logout');

    $response->assertStatus(200);
});
