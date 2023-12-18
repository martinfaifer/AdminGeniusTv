<?php

it('returns welcome page', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});
