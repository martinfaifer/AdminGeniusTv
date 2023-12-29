<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

class ShowAsAdminUserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $request->user['id'],
            'email' => $request->user['email'],
            'crm_id' => $request->user['crm_id'],
            'is_admin' => $request->user['is_admin'],
            'nangu_isp_id' => $request->user['nangu_isp_id'],
            'permisions' => [
                'show_apps' => $this->has_permision(
                    'show_apps',
                    $request->user->permisions
                ),
                'show_news' => $this->has_permision(
                    'show_news',
                    $request->user->permisions
                ),
                'show_invoices' => $this->has_permision(
                    'show_invoices',
                    $request->user->permisions
                ),
                'show_tutorials' => $this->has_permision(
                    'show_tutorials',
                    $request->user->permisions
                ),
                'show_nangu' => $this->has_permision(
                    'show_nangu',
                    $request->user->permisions
                ),
                'show_api' => $this->has_permision(
                    'show_api',
                    $request->user->permisions
                ),
                'show_tickets' => $this->has_permision(
                    'show_tickets',
                    $request->user->permisions
                ),
            ]
        ];
    }

    protected function has_permision(string $needle, Collection $permisions): bool
    {
        foreach ($permisions as $permision) {
            if($permision->permision->permision == $needle) {
                return true;
            }
        }

        return false;
    }
}
