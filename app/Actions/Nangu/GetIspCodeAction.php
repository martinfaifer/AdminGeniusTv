<?php
namespace App\Actions\Nangu;

use Illuminate\Support\Facades\Auth;

class GetIspCodeAction
{
    public function execute()
    {
        $user = Auth::user();
        return $user->nanguIsp->isp_id;
    }
}