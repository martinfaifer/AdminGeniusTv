<?php

namespace App\Http\Resources;

use App\Models\App;
use App\Models\AppCategory;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class IndexAppsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        if ($request->unsorted) {
            return [
                'count' => App::count(),
                'apps' => App::with('category')->get()
            ];
        }
        $output = [];
        $categories = AppCategory::get();
        $output['count'] = $categories->count();
        foreach ($categories as $category) {
            $output['apps'][$category->category] = App::where('app_category_id', $category->id)->with('category')->orderBy('id', 'DESC')->get();
        }

        return $output;
    }
}
