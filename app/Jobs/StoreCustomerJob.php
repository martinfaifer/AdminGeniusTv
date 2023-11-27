<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Actions\Nangu\StoreNewCustomerAction;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class StoreCustomerJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public object $formData, public $ispCode)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        (new StoreNewCustomerAction())->execute(
            formData: $this->formData,
            ispCode: $this->ispCode
        );
    }
}
