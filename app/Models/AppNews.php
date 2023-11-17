<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AppNews extends Model
{
    protected $fillable = [
        'title', 'text'
    ];
}
