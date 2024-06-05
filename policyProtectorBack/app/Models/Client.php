<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstName',
        'lastName',
        'adress',
        'city',
        'cin',
        'phoneNumber',
        'created_by'
    ];
}
