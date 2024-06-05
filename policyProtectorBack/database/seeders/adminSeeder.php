<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class adminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'firstName' => 'Salma',
            'lastName' => 'ElGadi',
            'email' => 'elgadi.salma0@gmail.com',
            'password' => bcrypt('123'),
            'picture' => '0P9A8633.jpg',
            'phoneNumber' => '0697987568',
            'role' => 'admin',
        ]);
    }
}
