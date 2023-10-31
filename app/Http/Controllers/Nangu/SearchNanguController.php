<?php

namespace App\Http\Controllers\Nangu;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Services\Nangu\Wsdl\SearchWsdlService;
use Illuminate\Support\Facades\Auth;

class SearchNanguController extends Controller
{
    public function __invoke(string $search)
    {
        // try {
        $user = Auth::user();
        $searchedData = (new SearchWsdlService())->execute($user->nanguIsp->isp_id, $search);

        if ($searchedData['count'] == 0) {
            return $this->error_response("Nepodařilo se vyhledat zákazníka");
        }

        return $this->success_response(
            message: "Vyhledáno",
            data: $searchedData
        );
        // } catch (\Throwable $th) {
        //     return $this->error_response();
        // }
    }
}

// M92114ecd376
// 78:6a:1f:dd:6e:2f