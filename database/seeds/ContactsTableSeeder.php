<?php

use Illuminate\Database\Seeder;

class ContactsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();
 
        // Create 50 contacts records
        for ($i = 0; $i < 10; $i++) {
        	DB::table('contacts')->insert([
                'name' => $faker->name,
                'mobile' => intval('98'.$faker->randomNumber(8)),
                'address1' => $faker->address,
                'address2' => $faker->address,
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    }
}
