<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\MessageSent;
use App\Message;


class PrivateChatController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
    * Show chats
    *
    * @return \Illuminate\Http\Response
    */
    public function index()
    {
        return view('Chats/index');
    }

    /**
     * Fetch all messages
     *
     * @return Message
     */
    public function fetchMessages()
    {
        return Message::with('user')->get();
    }

    /**
     * Persist message to database
     *
     * @param  Request $request
     * @return Response
     */
    public function sendMessage(Request $request)
    {
        //$redis = Redis::connection();

        $user = Auth::user();

        $message = $user->messages()->create([
          'message' => $request->input('message')
        ]);

        $data = Message::whereId($message->id)->with('user')->first();

        //$redis->publish('chat', json_encode($data));
        broadcast(new MessageSent($data))->toOthers();

        return ['status' => 'Message Sent!', 'data' => $data];
    }

    public function show(Message $message)
    {
        return $message;
    }
}
