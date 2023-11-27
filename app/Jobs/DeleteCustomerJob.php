<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use App\Actions\Nangu\DeleteCustomerAction;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Contracts\Queue\ShouldBeUnique;

class DeleteCustomerJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public string $subscriberCode, public string $ispCode)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        (new DeleteCustomerAction())->execute(
            subscriberCode: $this->subscriberCode,
            ispCode: $this->ispCode
        );
    }
}
