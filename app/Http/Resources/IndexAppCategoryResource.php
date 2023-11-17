<?php

namespace App\Http\Resources;

use App\Models\AppCategory;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexAppCategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return AppCategory::get()->toArray();
    }
}
