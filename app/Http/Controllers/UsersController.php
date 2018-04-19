<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
//use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    public function display()
    {
        return view('Users/display');
    }

    public function index()
    {
      //return DB::table('users')->paginate(2);
    	return User::orderBy("id", "DESC")->paginate(2);
    }
}
