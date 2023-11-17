<?php

namespace App\Http\Resources;

use App\Models\AppNews;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexAppNewsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return AppNews::orderBy('created_at', 'DESC')->get()->toArray();
    }
}
