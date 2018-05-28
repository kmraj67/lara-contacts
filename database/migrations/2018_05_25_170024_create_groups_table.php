<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Seeder;

class CreateGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('groups', function (Blueprint $table) {
            $table->increments('id');
            $table->string('group')->unique();
            $table->string('slug')->unique();
            $table->smallInteger('status');
            $table->timestamps();
        });

        DB::table('groups')->insert([
            [
                'group' => 'General',
                'slug' => 'general',
                'status' => Config::get('constants.status.active'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'group' => 'One To One',
                'slug' => 'one_to_one',
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
        Schema::dropIfExists('groups');
    }
}
