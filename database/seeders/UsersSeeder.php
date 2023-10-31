<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (!User::first()) {
            User::create([
                'name' => "admin@admin.cz",
                'email' => "admin@admin.cz",
                'password' => "1122334455",
                'nangu_isp_id' => 7 // grape sc
            ]);
        }
    }
}
