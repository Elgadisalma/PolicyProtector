<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('firstName');
            $table->string('lastName');
            $table->string('adress');
            $table->string('phoneNumber');
            $table->string('city');
            $table->string('cin');
            $table->integer('created_by');
            $table->timestamps();

            $table->foreign('created_by')->references('id')->on('contacts');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
