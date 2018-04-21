@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row">
    	<div className="col-lg">
            <h1 className="page-header">Live Chat</h1>
        </div>
    </div>

    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default" id="chat_page">
                <!-- <div class="panel-heading">Live Chats</div> -->

                <div class="panel-body">
                    <chat-messages :messages="messages"></chat-messages>
                </div>
                <div class="panel-footer">
                    <chat-form
                        v-on:messagesent="addMessage"
                        :user="{{ Auth::user() }}"
                    ></chat-form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
