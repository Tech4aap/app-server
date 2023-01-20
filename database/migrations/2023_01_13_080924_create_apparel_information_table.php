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
        Schema::create('apparel_information', function (Blueprint $table) {
            $table->comment('');
            $table->integer('PID', true);
            $table->float('Per piece GSM & Spec', 10, 0);
            $table->float('Body/Chest Width', 10, 0);
            $table->float('Body/Chest  Lenght/Height', 10, 0);
            $table->float('Arm Width', 10, 0);
            $table->float('Arm Lenght/Height', 10, 0);
            $table->float('Hood Width', 10, 0);
            $table->float('Hood Lenght/Height', 10, 0);
            $table->float('Pocket Width', 10, 0);
            $table->float('Pocket Lenght/Height', 10, 0);
            $table->float('RIB Percentage', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('apparel_information');
    }
};
