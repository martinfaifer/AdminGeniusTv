<?php

namespace App\Http\Resources;

use App\Models\NanguIsp;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexNanguIspResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return NanguIsp::get()->toArray();
    }
}
