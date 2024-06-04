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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->text('problem');
            $table->string('serviceType');
            $table->enum('status',['à faire','en attente','fini'])->default('à faire');            
            $table->string('arriveDate');
            $table->integer('technicien_id');
            $table->integer('client_id');
            $table->integer('contact_id');
            $table->integer('laptop_id');
            $table->timestamps();

            $table->foreign('technicien_id')->references('id')->on('users');
            $table->foreign('client_id')->references('id')->on('clients');
            $table->foreign('contact_id')->references('id')->on('contacts');
            $table->foreign('laptop_id')->references('id')->on('laptops');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
