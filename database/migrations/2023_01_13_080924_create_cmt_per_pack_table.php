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
        Schema::create('cmt_per_pack', function (Blueprint $table) {
            $table->comment('');
            $table->integer('CWPID', true);
            $table->float('TagPin', 10, 0);
            $table->float('Twill', 10, 0);
            $table->float('BasicCarton', 10, 0);
            $table->float('FancyCarton', 10, 0);
            $table->float('Hanger', 10, 0);
            $table->float('RFIDtag', 10, 0);
            $table->float('PolyBag', 10, 0);
            $table->float('BallyBand', 10, 0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cmt_per_pack');
    }
};
