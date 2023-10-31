<?php
namespace App\Traits;

trait HttpResponseTrait
{
    public function success_response(string $message, $data = null)
    {
        return response()->json([
            'status' => "success",
            'message' => $message,
            'data' => $data
        ]);
    }

    public function error_response(string $message = "Něco se nepovedlo")
    {
        return response()->json([
            'status' => "error",
            'message' => $message
        ]);
    }
}