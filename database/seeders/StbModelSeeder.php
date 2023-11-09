<?php

namespace Database\Seeders;

use App\Models\StbModel;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StbModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if(!StbModel::first()) {
            StbModel::create([
                'modelCode' => "KREA-1113L"
            ]);

            StbModel::create([
                'modelCode' => "ARRISVIP4205"
            ]);

            StbModel::create([
                'modelCode' => "ARRISVIP4302"
            ]);

            StbModel::create([
                'modelCode' => "ARRIS-VIP5202"
            ]);

            StbModel::create([
                'modelCode' => "ARRISVIP5305"
            ]);

            StbModel::create([
                'modelCode' => "ARRISVIP5305W"
            ]);

            StbModel::create([
                'modelCode' => "ARRISVIP7300"
            ]);

            StbModel::create([
                'modelCode' => "KREA-1003"
            ]);

            StbModel::create([
                'modelCode' => "KREA-1103"
            ]);

            StbModel::create([
                'modelCode' => "KREA-1113"
            ]);

            StbModel::create([
                'modelCode' => "KREA-1510"
            ]);

            StbModel::create([
                'modelCode' => "KREA-1710"
            ]);

            StbModel::create([
                'modelCode' => "KREA-1853"
            ]);

            StbModel::create([
                'modelCode' => "KREA-1903"
            ]);

            StbModel::create([
                'modelCode' => "KREA-1910"
            ]);

            StbModel::create([
                'modelCode' => "KREA-1920"
            ]);

            StbModel::create([
                'modelCode' => "KREA-1960"
            ]);

            StbModel::create([
                'modelCode' => "KREA-1963"
            ]);

            StbModel::create([
                'modelCode' => "KREA-500"
            ]);
        }
    }
}
