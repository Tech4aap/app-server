<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('piece_information', function (Blueprint $table) {
            $table->comment('');
            $table->integer('PID', true);
            $table->float('Per piece GSM & Spec', 10, 0);
            $table->float('Width', 10, 0);
            $table->float('Lenght/Height', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('piece_information');
    }
};
