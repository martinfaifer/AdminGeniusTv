<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\FlowEye\FlowEyeService;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowTicketsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // dd($request->status);
        $user = Auth::user();
        $flowEyeData = (new FlowEyeService())->get($user->crm_id, $request->status);
        $sorted = array_reverse($flowEyeData['data'], false);
        return $sorted;
    }
}
