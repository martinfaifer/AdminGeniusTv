<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppNews extends Model
{
    protected $fillable = [
        'title', 'text'
    ];

    protected $casts = [
        'created_at' => "date:d.m. Y"
    ];
}
