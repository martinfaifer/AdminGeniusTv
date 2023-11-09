<?php

namespace App\Http\Resources;

use App\Actions\Nangu\GeneratePasswordAction;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GeneratePasswordResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'password' => (new GeneratePasswordAction())->execute()
        ];
    }
}
