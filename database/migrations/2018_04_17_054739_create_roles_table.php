<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Seeder;

class CreateRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('roles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',40)->unique();
            $table->smallInteger('status');
            $table->timestamps();
        });

        DB::table('roles')->insert([
            [
                'name' => 'Admin',
                'status' => Config::get('constants.status.active'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'User',
                'status' => Config::get('constants.status.active'),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
}
