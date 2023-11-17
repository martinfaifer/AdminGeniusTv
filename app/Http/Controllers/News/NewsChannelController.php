<?php

namespace App\Http\Controllers\News;

use App\Models\Topic;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Actions\News\StoreTopicAction;
use App\Actions\News\UpdateTopicAction;
use App\Http\Requests\StoreNewsRequest;
use App\Http\Requests\UpdateNewsChannelRequest;
use App\Http\Resources\IndexNewsChannelResource;

class NewsChannelController extends Controller
{
    public function index()
    {
        return new IndexNewsChannelResource([]);
    }

    public function store(StoreNewsRequest $request, StoreTopicAction $storeTopicAction)
    {
        return $storeTopicAction->execute(formData: $request) == true
            ? $this->success_response("Vytvořeno")
            : $this->error_response("Nepodařilo se vytvořit článek");
    }

    public function update(Topic $topic, UpdateNewsChannelRequest $request, UpdateTopicAction $updateTopicAction)
    {
        return $updateTopicAction->execute(
            topic: $topic,
            formData: $request
        ) == true
            ? $this->success_response("Upraveno")
            : $this->error_response("Nepodařilo se upravit");
    }

    public function destroy(Topic $topic)
    {
        $topic->delete();
        return $this->success_response("Odebráno");
    }
}
