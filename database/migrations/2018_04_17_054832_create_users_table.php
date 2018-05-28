<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Seeder;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('role_id');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('first_name',50);
            $table->string('last_name',50);
            $table->smallInteger('status');
            $table->rememberToken();
            $table->timestamps();
            $table->index('role_id');
            $table->foreign('role_id')->references('id')->on('roles');
        });

        DB::table('users')->insert([
            'role_id' => Config::get('constants.roles.admin'),
            'email' => 'krishan.mohan@kiwitech.com',
            'password' => bcrypt('User@123'),
            'first_name' => 'Krishan',
            'last_name' => 'Mohan',
            'status' => Config::get('constants.status.active'),
            'created_at' => now(),
            'updated_at' => now()
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
