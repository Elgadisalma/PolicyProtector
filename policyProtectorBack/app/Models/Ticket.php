<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'problem',
        'serviceType',
        'status',
        'arriveDate',
        'technicien_id',
        'client_id',
        'contact_id',
        'laptop_id',
    ];
}
