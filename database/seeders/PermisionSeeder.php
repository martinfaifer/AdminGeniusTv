<?php

namespace Database\Seeders;

use App\Models\Permision;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermisionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Permision::insert(
            [
                [
                    'permision' => "show_apps"
                ],
                [
                    'permision' => "show_news"
                ],
                [
                    'permision' => "show_invoices"
                ],
                [
                    'permision' => "show_tutorials"
                ],
                [
                    'permision' => "show_nangu"
                ],
                [
                    'permision' => "show_api"
                ],
                [
                    'permision' => "show_tickets"
                ]
            ]
        );
    }
}
