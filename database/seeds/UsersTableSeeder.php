<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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
}
