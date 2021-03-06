<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('contacts', 'ContactsController@index');
Route::get('contacts/{contact}', 'ContactsController@show');
Route::post('contacts','ContactsController@store');
Route::put('contacts/{contact}','ContactsController@update');
Route::delete('contacts/{contact}', 'ContactsController@delete');

Route::resource('users', 'UsersController');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
