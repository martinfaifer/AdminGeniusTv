<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class App extends Model
{
    protected $fillable = [
        'name', 'description', 'path', 'app_category_id',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(AppCategory::class, 'app_category_id', 'id');
    }
}
