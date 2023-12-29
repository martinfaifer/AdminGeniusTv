<?php

namespace App\Http\Resources;

use App\Models\Permision;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PermisionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $output = [];
        $permisions = Permision::get();

        foreach($permisions as $permision) {
            array_push($output, $permision->permision);
        }

        return $output;
    }
}
