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

            <div class="col-lg-9 right-chat-section">
                <div class="row top-section">
                    <div class="col-lg-12"></div>
                </div>

                <div class="row middle-section" id="chat-section" data-user="{{ Auth::user('user') }}">
                    <div class="col-lg-12">
                        <div class="message-div">
                            <div class="messae-heading">
                                <strong>Krishan:</strong>
                                <span>May 2, 2018</span>
                            </div>
                            <p>Float left on all viewport sizes</p>
                        </div>
                        <div class="message-div">
                            <div class="messae-heading">
                                <strong>Krishan:</strong>
                                <span>May 2, 2018</span>
                            </div>
                            <p>Float left on all viewport sizes</p>
                        </div>
                        <div class="message-div">
                            <div class="messae-heading">
                                <strong>Krishan:</strong>
                                <span>May 2, 2018</span>
                            </div>
                            <p>Float left on all viewport sizes</p>
                        </div>
                        <div class="message-div">
                            <div class="messae-heading">
                                <strong>Krishan:</strong>
                                <span>May 2, 2018</span>
                            </div>
                            <p>Float left on all viewport sizes</p>
                        </div>
                        <div class="message-div">
                            <div class="messae-heading">
                                <strong>Krishan:</strong>
                                <span>May 2, 2018</span>
                            </div>
                            <p>Float left on all viewport sizes</p>
                        </div>
                        <div class="message-div">
                            <div class="messae-heading">
                                <strong>Krishan:</strong>
                                <span>May 2, 2018</span>
                            </div>
                            <p>Float left on all viewport sizes</p>
                        </div>
                        <div class="message-div">
                            <div class="messae-heading">
                                <strong>Krishan:</strong>
                                <span>May 2, 2018</span>
                            </div>
                            <p>Float left on all viewport sizes</p>
                        </div>
                        <div class="message-div">
                            <div class="messae-heading">
                                <strong>Krishan:</strong>
                                <span>May 2, 2018</span>
                            </div>
                            <p>Float left on all viewport sizes</p>
                        </div>
                    </div>
                </div>
                <div class="row bottom-section">
                    <div class="col-lg-12">
                        <div class="input-group">
                            <input type="text" class="form-control chat-text-box" placeholder="Type your message here..." aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
