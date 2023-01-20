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
        Schema::create('fabric_information', function (Blueprint $table) {
            $table->comment('');
            $table->integer('FID', true);
            $table->float('Weaving / Knitting Cost', 10, 0);
            $table->float('Fabric Dying Cost', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fabric_information');
    }
};
