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
        Schema::create('production_wastages', function (Blueprint $table) {
            $table->comment('');
            $table->integer('WID', true);
            $table->float('Dying Process', 10, 0);
            $table->float('Cutting / Stitching / B%', 10, 0);
            $table->float('Weaving / Knitting Yarn', 10, 0);
            $table->float('Shairing / Rising', 10, 0);
            $table->float('Yarn Dying', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('production_wastages');
    }
};
