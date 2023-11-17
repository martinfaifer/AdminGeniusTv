<?php

namespace App\Http\Controllers\Tutorials;

use App\Models\Tutorial;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTutorialRequest;
use App\Http\Requests\UpdateTutorialRequest;
use App\Actions\Tutorials\StoreTutorialAction;
use App\Http\Resources\IndexTutorialsResource;
use App\Actions\Tutorials\UpdateTutorialAction;
use App\Actions\Tutorials\DestroyTutorialAction;

class TutorialController extends Controller
{
    public function index()
    {
        return new IndexTutorialsResource([]);
    }

    public function store(StoreTutorialRequest $request, StoreTutorialAction $storeTutorialAction)
    {
        return $storeTutorialAction->execute(formData: $request) == true
            ? $this->success_response("Přiráno")
            : $this->error_response("Nepodařilo se přidat");
    }

    public function update(Tutorial $tutorial, UpdateTutorialRequest $request, UpdateTutorialAction $updateTutorialAction)
    {
        return $updateTutorialAction->execute(tutorial: $tutorial, formData: $request) == true
            ? $this->success_response("Upraveno")
            : $this->error_response("Nepodařilo se upravit");
    }

    public function destroy(Tutorial $tutorial, DestroyTutorialAction $destroyTutorialAction)
    {
        return $destroyTutorialAction->execute($tutorial) == true
            ? $this->success_response("Odebráno")
            : $this->error_response("Nepodařilo se odebrat");
    }
}
