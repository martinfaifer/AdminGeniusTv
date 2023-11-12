<?php

namespace App\Services\FlowEye;

class FlowEyeService extends ConnectService
{

    public string $endPoint = "v1/processes?templateId=6&state=%state%&include=template,currentStep,discussion,variables(detail,ticket)&variables=";
    public array $variables = [
        'adminus_customer_id' => '%crmId%'
    ];

    public function get(int $crm_id, $status = null)
    {
        $this->variables['adminus_customer_id'] = $crm_id;

        $response = $this->connect(
            method: 'get',
            endPoint: $this->endPoint ,
            formData: [
                'templateId' => '6',
                'state' => is_null($status) ? "active" : "complete",
                'include' => "template,currentStep,discussion,variables(detail,ticket)",
                'variables' => json_encode($this->variables)
            ]
        );

        return $response->json();
    }
}
