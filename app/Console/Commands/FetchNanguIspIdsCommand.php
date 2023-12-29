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

        if ($response->successful()) {
            foreach ($response->json()['data'] as $isp) {
                $searcheableIsp = NanguIsp::where('isp_id', $isp['nangu_isp_id'])->first();

                switch ($searcheableIsp) {
                        // kontrola zda je název ISP totožný
                    case $searcheableIsp->name != $isp['nangu_isp']:
                        $searcheableIsp->update([
                            'name' => $isp['nangu_isp']
                        ]);
                        break;
                        // nebylo nalezeno ISP
                    case !$searcheableIsp:
                        NanguIsp::create([
                            'isp_id' => $isp['nangu_isp_id'],
                            'name' => $isp['nangu_isp']
                        ]);
                        break;
                    default:
                        // for checking if isp exists
                        $searcheableIsp->update([
                            'updated_at' => date('Y-m-d G:i:s')
                        ]);
                }

                // NanguIsp::firstOrCreate(
                //     ['isp_id' =>  $isp['nangu_isp_id']],
                //     ['name' => $isp['nangu_isp']]
                // );
            }
        }
    }
}
