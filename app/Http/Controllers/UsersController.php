<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UsersController extends Controller
{
    public function display()
    {
        return view('Users/display');
    }

    public function index()
    {
    	return User::all();
    }
}
