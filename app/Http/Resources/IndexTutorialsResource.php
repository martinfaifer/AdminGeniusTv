<?php

namespace App\Http\Resources;

use App\Models\Tutorial;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexTutorialsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return Tutorial::get()->toArray();
    }
}
