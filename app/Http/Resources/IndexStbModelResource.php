<?php

namespace App\Http\Resources;

use App\Models\StbModel;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexStbModelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return StbModel::get('modelCode')->toArray();
    }
}
