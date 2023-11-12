<?php

namespace App\Http\Resources;

use App\Models\Maintenance;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexMaintenanceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return Maintenance::orderBy('created_at', 'DESC')->with('author')->get()->toArray();
    }
}
