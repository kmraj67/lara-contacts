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
            <div class="panel panel-default" id="chat_page" data-user="{{ Auth::user('user') }}">
            </div>
        </div>
    </div>
</div>
@endsection
