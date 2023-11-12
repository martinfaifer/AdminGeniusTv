<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AppCategory extends Model
{
    protected $fillable = [
        'category'
    ];

    public function apps(): HasMany
    {
        return $this->hasMany(App::class, 'app_category_id', 'id');
    }
}
