<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        'scheme' => 'https',
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],
    'nangu' => [
        'url' => env('NANGU_WSDL_URL')
    ],
    'iptvdoku' => [
        'url' => env('IPTVDOKU_URL'),
        'username' => env('IPTVDOKU_USERNAME'),
        'password' => env('IPTVDOKU_PASSWORD')
    ],
    'floweye' => [
        'api_token' => env('FLOWEYE_API_TOKEN'),
        'url' => env('FLOWEYE_URL')
    ],
    'iptvdoku' => [
        'url' => env('IPTV_DOKU_API'),
        'username' => env('IPTV_DOKU_USERNAME'),
        'password' => env('IPTV_DOKU_PASSWORD')
    ],
    'iptvdoku_new' => [
        'url' => env('IPTV_DOKU_API_NEW'),
        'username' => env('IPTV_DOKU_USERNAME_NEW'),
        'password' => env('IPTV_DOKU_PASSWORD_NEW')
    ],
    'crm' => [
        'url' => env('CRM_URL')
    ]

];
