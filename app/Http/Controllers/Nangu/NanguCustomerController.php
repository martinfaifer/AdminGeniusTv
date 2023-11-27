<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Jobs\StoreCustomerJob;
use App\Jobs\DeleteCustomerJob;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Actions\Nangu\GetIspCodeAction;
use App\Actions\Nangu\DeleteCustomerAction;
use App\Http\Requests\StoreCustomerRequest;
use App\Actions\Nangu\StoreNewCustomerAction;
use App\Actions\Nangu\GetSubscriberDetailAction;

class NanguCustomerController extends Controller
{

    public function show(string $subscriberCode, GetSubscriberDetailAction $getSubscriberDetailAction)
    {
        $user = Auth::user();
        return $getSubscriberDetailAction->execute(subscriberCode: $subscriberCode, ispCode: $user->nanguIsp->isp_id);
    }

    public function store(StoreCustomerRequest $request, StoreNewCustomerAction $storeNewCustomerAction)
    {
        $user = Auth::user();

        // StoreCustomerJob::dispatch($request, $user->nanguIsp->isp_id);
        return $storeNewCustomerAction->execute($request, $user->nanguIsp->isp_id) == true
            ? $this->success_response("Založeno")
            : $this->error_response();
    }

    public function destroy(string $subscriberCode)
    {

        // (new DeleteCustomerAction())->execute(
        //     subscriberCode: $subscriberCode,
        //     ispCode: (new GetIspCodeAction())->execute()
        // );

        DeleteCustomerJob::dispatch($subscriberCode, (new GetIspCodeAction())->execute());
        return $this->success_response("Odesláno k odebrání ...");
    }
}
