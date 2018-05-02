@extends('layouts.chatroom')

@section('content')

<div class="container-fluid">
        <div class="row">

            <div class="col-lg-3 left-chat-section">
                <div class="row left-chat-box">
                    <h4>Krishan Mohan</h4>
                </div>

                <div class="row left-chat-box">
                    <h4>Channels</h4>
                    <div class="col-lg-12">
                        <ul>
                            <li class="">First item</li>
                            <li class="">Second item</li>
                            <li class="">Third item</li>
                        </ul>
                    </div>
                </div>

                <div class="row left-chat-box">
                    <h4>Direct Messages</h4>
                    <div class="col-lg-12">
                        <ul>
                            <li class="">First item</li>
                            <li class="">Second item</li>
                            <li class="">Third item</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-lg-9 right-chat-section" id="chat-section" data-user="{{ Auth::user('user') }}"></div>
        </div>
    </div>

@endsection
