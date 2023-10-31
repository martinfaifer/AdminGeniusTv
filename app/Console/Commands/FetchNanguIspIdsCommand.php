<?php

namespace App\Console\Commands;

use App\Models\NanguIsp;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class FetchNanguIspIdsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'nangu:fetch_isps';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Take Nangu ISP IDs from main server and store them in to table';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $response = Http::withBasicAuth(
            config('services.iptvdoku.username'),
            config('services.iptvdoku.password')
        )->get(config('services.iptvdoku.url') . "v1/nangu/isps");

        if($response->successful()) {
            foreach ($response->json()['data'] as $isp) {
                NanguIsp::firstOrCreate(
                    ['isp_id' =>  $isp['nangu_isp_id']],
                    ['name' => $isp['nangu_isp']]
                );
            }
        }
    }
}
