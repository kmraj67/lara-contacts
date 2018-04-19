<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
}
