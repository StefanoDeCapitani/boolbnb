<?php

namespace App\Http\Controllers;

use App\Message;
use App\Flat;
use App\Http\Requests\StoreFlatMessageRequest;
use Illuminate\Support\Facades\Redirect;

class FlatMessageController extends Controller
{
    public function index(Flat $flat)
    {
        $messages = $flat->messages;
        $flat_title = $flat->title;
        $message_received = $flat->created_at;
        /* dd($message_received); */

        return view("messages", compact("messages", "flat_title", 'message_received'));
    }

    public function store(StoreFlatMessageRequest $request, Flat $flat)
    {
        $data = $request->validated();
        $data["flat_id"] = $flat->id;

        $newMessage = new Message();
        $newMessage->fill($data);
        $newMessage->save();

        return Redirect::back()->with("message", "Messaggio inviato");
    }

    public function destroy(Message $message)
    {
        //
    }
}
