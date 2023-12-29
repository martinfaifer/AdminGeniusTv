<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserHasPermision extends Model
{
    protected $fillable = [
        'user_id',
        'permision_id'
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function permision(): BelongsTo
    {
        return $this->belongsTo(Permision::class, 'permision_id', 'id');
    }
}
