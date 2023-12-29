<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Permision extends Model
{
    protected $fillable = [
        'permision'
    ];

    public function users()
    {
        return $this->hasMany(UserHasPermision::class, 'permision_id', 'id');
    }
}
